import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { after, before, test } from 'node:test';

const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3210';
let server;
let logs = '';

before(async () => {
  if (process.env.SMOKE_BASE_URL) return;
  server = spawn(process.execPath, [
    'node_modules/next/dist/bin/next', 'dev', '--webpack',
    '--hostname', '127.0.0.1', '--port', '3210',
  ], { env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' }, stdio: ['ignore', 'pipe', 'pipe'] });
  for (const stream of [server.stdout, server.stderr]) {
    stream.on('data', chunk => { logs = (logs + chunk).slice(-8000); });
  }
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Next exited: ${logs}`);
    try {
      const response = await fetch(`${base}/icon.svg`, { signal: AbortSignal.timeout(2000) });
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`Next did not become ready: ${logs}`);
}, { timeout: 125_000 });

after(async () => {
  if (!server || server.exitCode !== null) return;
  const exited = once(server, 'exit');
  server.kill('SIGTERM');
  const force = setTimeout(() => server.kill('SIGKILL'), 5000);
  await exited;
  clearTimeout(force);
});

for (const path of ['/', '/features', '/security', '/docs/account-setup']) {
  test(`renders ${path} as a real application page`, { timeout: 120_000 }, async () => {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(110_000) });
    assert.equal(response.status, 200, `${path}: ${logs}`);
    assert.match(response.headers.get('content-type'), /text\/html/);
    const html = await response.text();
    assert.match(html, /<title>[^<]*Nuncio/);
    assert.match(html, /<h1(?:\s|>)/);
    assert.doesNotMatch(html, /Application error: a server-side exception/);
  });
}

test('serves the brand icon as SVG', async () => {
  const response = await fetch(base + '/icon.svg');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /image\/svg\+xml/);
  assert.match(await response.text(), /<svg/);
});

test('unknown routes return 404 rather than a misleading successful page', { timeout: 120_000 }, async () => {
  const response = await fetch(base + '/qualification-route-that-does-not-exist', {
    signal: AbortSignal.timeout(110_000),
  });
  assert.equal(response.status, 404);
});

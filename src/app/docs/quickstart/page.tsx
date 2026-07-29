import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { AvailableNow } from "@/components/StatusBadge";
import { GITHUB_URL } from "@/lib/status";
import { GithubIcon } from "@/components/GithubIcon";
import { Download, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "Quickstart — Build & Run Nuncio From Source — Nuncio Docs",
  description: "How to clone the Nuncio engine repository and build and run the daemon (nunciod) and reference CLI (nuncio-cli) from source today. There is no packaged installer yet — Nuncio is pre-alpha.",
};

export default function QuickstartDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="quickstart">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Getting Started • Step 1</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Download className="w-8 h-8 text-amber-400 shrink-0" />
                Quickstart: Build &amp; Run From Source
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio is pre-alpha — there is no installer, package, or download for end users yet. What is real: a
                Cargo workspace you can clone and build today, which gives you a working daemon (<code className="text-amber-300 font-mono">nunciod</code>)
                and a reference CLI (<code className="text-amber-300 font-mono">nuncio-cli</code>) that talks to it. <AvailableNow className="ml-1 align-middle" />
              </p>
            </div>

            {/* Clone + build */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                1. Clone &amp; Build the Workspace
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Requires the Rust toolchain pinned in <code className="text-amber-300 font-mono">rust-toolchain.toml</code>. Cargo will fetch it
                automatically via rustup.
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`git clone https://github.com/KofTwentyTwo/nuncio.git
cd nuncio
cargo build --workspace`}
              </pre>
            </div>

            {/* Run the daemon */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                2. Run the Daemon (`nunciod`)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The daemon owns all state and serves a versioned gRPC API on loopback <code className="text-cyan-300 font-mono">127.0.0.1:9420</code>,
                behind a bearer token minted into your OS keyring on first run.
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`cargo run -p nunciod`}
              </pre>
            </div>

            {/* Drive it with the CLI */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                3. Drive It With the Reference CLI
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                With the daemon running in one terminal, <code className="text-purple-300 font-mono">nuncio-cli</code> is a full gRPC client and
                the project&apos;s own end-to-end test driver:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-purple-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`cargo run -p nuncio-cli -- system status`}
              </pre>
            </div>

            {/* Honesty callout */}
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-3">
              <span className="text-blue-300 font-bold text-sm block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                What This Gets You Today
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                From source, you get real IMAP/SMTP sync, SQLite FTS5 full-text search, MBOX/EML/JSON/JSONL export, and
                a hash-chained WORM audit ledger — driven entirely through the CLI. There is no desktop GUI, terminal
                TUI, or MCP AI client yet; those are separate client projects planned on top of the same gRPC contract.
                See <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-1">the repository<GithubIcon className="w-3 h-3" /></a> for
                the current state of the workspace.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

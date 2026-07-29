import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck,
  Database,
  EyeOff,
  Cpu,
  AlertTriangle,
  Mail,
  Clock,
  GitBranch,
  MapPin,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import type { StatusVariant } from "@/lib/status";

export const metadata = {
  title: "Security & Privacy Design — Nuncio (Pre-Alpha)",
  description: "Nuncio's security design goals: OS keyring credentials and a WORM audit ledger are real today; at-rest encryption, memory zeroization, HTML sandboxing, and a fail-closed updater are hardening work still on the roadmap.",
};

interface SecurityPillar {
  title: string;
  status: StatusVariant;
  icon: React.ReactNode;
  accentColor: string;
  desc: string;
  specifications: string[];
}

interface ThreatRow {
  status: StatusVariant;
  vector: string;
  threat: string;
  mitigation: string;
}

export default function SecurityPage() {
  const securityPillars: SecurityPillar[] = [
    {
      title: "1. Column-Level Payload Encryption",
      status: "planned",
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      desc: "The design target: every email body, HTML string, and subject header encrypted before database persistence, so a stolen disk or raw SQLite dump reveals nothing. Not implemented yet — message content is currently stored unencrypted.",
      specifications: [
        "Target: authenticated encryption (AEAD) for every column write",
        "Target: key derivation seeded from the OS keyring, not a hardcoded secret",
        "Tracked under the engine's security hardening milestone (M6)",
        "Do not store sensitive real mail in Nuncio until this lands",
      ],
    },
    {
      title: "2. Attachment Stream Encryption",
      status: "planned",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60",
      desc: "Large binary attachments are meant to be encrypted with a modern streaming cipher so the daemon never buffers a full attachment in memory. This is a design goal, not shipped behavior today.",
      specifications: [
        "Target: chunked, authenticated encryption for attachment blobs",
        "Target: constant, low RAM ceiling regardless of file size",
        "Not yet implemented — attachments are not currently encrypted at rest",
      ],
    },
    {
      title: "3. Memory Hygiene (Secret Zeroization)",
      status: "in-progress",
      icon: <EyeOff className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      desc: "Cryptographic key material, passwords, and refresh tokens should be held in memory that is explicitly zeroed on drop and never swapped to disk. Work is underway; it isn't verified complete across the codebase yet.",
      specifications: [
        "Goal: explicit zeroing of secret buffers on drop",
        "Goal: OS-level page locking against swap for sensitive buffers",
        "Tracked under the engine's security hardening milestone (M6)",
      ],
    },
    {
      title: "4. OS Keyring Enclave Integration",
      status: "available-now",
      icon: <Key className="w-6 h-6 text-amber-400" />,
      accentColor: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60",
      desc: "This one is real today. Nuncio never writes plaintext passwords, OAuth refresh tokens, or private keys into configuration files or the SQLite database. Secrets go through the OS credential store.",
      specifications: [
        "Windows Credential Manager, macOS Keychain, and Linux Secret Service, via the keyring crate",
        "Zero credentials in SQLite or on-disk config files",
        "Enforced across every code path that touches account credentials",
      ],
    },
    {
      title: "5. WORM Cryptographic Audit Ledger",
      status: "available-now",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      desc: "Also real today. Filter matches, webhook dispatches, and account mutations are recorded in an immutable, Write-Once-Read-Many audit ledger sealed with HMAC-SHA256 block linking.",
      specifications: [
        "Block linking: H_n = HMAC-SHA256(K, seq || ts || actor || action || data_hash || H_n-1)",
        "SQLite triggers reject updates or deletes against the audit table",
        "Chain integrity is verifiable via the CLI today",
      ],
    },
    {
      title: "6. HTML Email Sandboxing",
      status: "planned",
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      accentColor: "border-red-500/30 bg-red-500/5 hover:border-red-500/60",
      desc: "HTML email carries tracking pixels and can carry hostile markup. The target is to render it inside a strict sandbox with JavaScript disabled — but no client renders HTML yet, so this hasn't shipped.",
      specifications: [
        "Target: <iframe sandbox> with a strict content-security-policy blocking script execution",
        "Target: stripped tracking beacons and remote-image proxying",
        "Depends on a GUI or TUI client existing to render into — neither exists yet",
      ],
    },
  ];

  const threatMitigations: ThreatRow[] = [
    {
      status: "planned",
      vector: "Remote Code Execution via HTML Email",
      threat: "Malicious HTML emails executing scripts in a rendering client.",
      mitigation: "Planned strict sandbox with script execution disabled — no rendering client exists yet to apply it to.",
    },
    {
      status: "planned",
      vector: "Uncontrolled AI Agent Data Access",
      threat: "An AI agent reading or acting on your mail without a boundary.",
      mitigation: "Planned RBAC gateway and PII redaction for the MCP client, which does not exist yet.",
    },
    {
      status: "in-progress",
      vector: "Server-Side Request Forgery (SSRF) via Webhooks",
      threat: "A webhook action reaching an internal service or cloud metadata endpoint.",
      mitigation: "The webhook dispatcher already blocks redirects and known private/loopback targets. Real in the engine; not yet wired into the live sync path.",
    },
    {
      status: "in-progress",
      vector: "ReDoS via Malicious Regex Rules",
      threat: "A crafted regular expression causing catastrophic backtracking.",
      mitigation: "The rule validator statically rejects dangerous nested-quantifier patterns before a rule can be saved — this is a compile-time check, not a runtime timeout.",
    },
    {
      status: "in-progress",
      vector: "Database Corruption from Crash or Power Loss",
      threat: "A sudden outage corrupting the local SQLite database.",
      mitigation: "Startup integrity checks and a recovery path exist in the storage engine and are under active hardening.",
    },
    {
      status: "available-now",
      vector: "Credential Exfiltration from Disk",
      threat: "Malware or an attacker scanning local files for plaintext passwords.",
      mitigation: "Real today: credentials are never written to files or SQLite — only to the OS credential store.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-20">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-tight shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Security design goals — pre-alpha, not a finished guarantee</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sovereign Privacy &amp;<br />
            <span className="gradient-text">Zero-Trust Architecture.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Nuncio is being engineered to keep your data on your hardware and your credentials out of reach of
            everything else. Two pillars below are real and enforced today. The rest — at-rest encryption, memory
            zeroization, HTML sandboxing, a fail-closed updater — are hardening work still ahead. Do not point
            Nuncio at real accounts or sensitive data until they land.
          </p>
        </div>

        {/* 6 Core Security Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white">Six Security Pillars</h2>
            <p className="text-slate-400 text-sm">Each card is tagged with what&apos;s actually true today, not just the target.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((p, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-6 ${p.accentColor}`}
              >
                <div className="space-y-4">
                  {/* Header Bar */}
                  <div className="flex items-start justify-between gap-3 w-full min-h-[3.5rem]">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 shadow-sm shrink-0">
                        {p.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white min-w-0 leading-tight flex-1">{p.title}</h3>
                    </div>
                    <StatusBadge variant={p.status} className="shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[4.5rem]">{p.desc}</p>
                </div>

                {/* Specifications List */}
                <div className="space-y-2 pt-4 border-t border-white/10 flex-1 flex flex-col justify-start min-h-[8rem]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Details:</span>
                  <ul className="space-y-2 text-xs text-slate-300 font-medium">
                    {p.specifications.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI MCP Security Gateway Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">A Governed AI Gateway (Planned)</h2>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-xs text-slate-400 font-medium">The MCP client doesn&apos;t exist yet — this is the design it will be held to.</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              When local LLMs and AI agents eventually connect to Nuncio via a Model Context Protocol client, the
              plan is that they never receive raw credentials or direct provider access. Every agent action would
              pass through a policy gateway governed by rules like these:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block font-mono">1. Capability RBAC</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Explicit capability flags (read mail, send mail, manage filters). Unauthorized tool calls get blocked.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-cyan-400 font-bold text-sm block font-mono">2. Folder &amp; Account Whitelists</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Restrict agent access to specific accounts or folders you choose.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-purple-400 font-bold text-sm block font-mono">3. PII Redaction</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Sensitive identifiers scrubbed before any text reaches an LLM context window.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Model & Defensive Matrix Table */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Threat Model &amp; Defensive Engineering</h2>
            <p className="text-slate-400 text-sm">What Nuncio defends against, and how far along each defense actually is.</p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                    <th className="py-3.5 px-5 font-semibold w-1/4">Attack Vector</th>
                    <th className="py-3.5 px-5 font-semibold w-1/3">Threat Scenario</th>
                    <th className="py-3.5 px-5 font-semibold">Defense</th>
                    <th className="py-3.5 px-4 font-semibold text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {threatMitigations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item.vector}</span>
                      </td>
                      <td className="py-4 px-5 text-slate-300 text-xs leading-relaxed">
                        {item.threat}
                      </td>
                      <td className="py-4 px-5 text-slate-300 text-xs leading-relaxed">
                        {item.mitigation}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <StatusBadge variant={item.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Audit Verification Terminal Code Block */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                Audit Ledger Integrity — Real Today
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                HMAC-SHA256
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Verify your WORM audit ledger integrity from the CLI, built and run from source:
            </p>

            <pre className="bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 leading-relaxed overflow-x-auto">
{`# Build and run from source (no packaged installer yet)
git clone https://github.com/KofTwentyTwo/nuncio.git
cargo run -p nuncio-cli -- store verify-audit-chain`}
            </pre>
          </div>
        </div>

        {/* Vulnerability Reporting Policy */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 shadow-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Reporting a Vulnerability</h2>
                <p className="text-xs text-slate-400 font-medium">Nuncio is pre-alpha; several hardening items above aren&apos;t complete. Please report privately, not via public issues.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1.5">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Where to report</span>
                <p className="text-slate-200">
                  Email <code className="text-red-300 font-mono text-xs">security@kof22.com</code> — do not open a
                  public GitHub issue for a security report.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1.5">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Response time
                </span>
                <p className="text-slate-200">Acknowledgment within 48 hours, and an assessment with a remediation timeline within 7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            Follow the build on GitHub
          </a>
          <a
            href={ROADMAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            See the roadmap
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

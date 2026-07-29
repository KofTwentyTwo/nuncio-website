import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Monitor, Code, Lock, Mail, Calendar, GitBranch, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import type { StatusVariant } from "@/lib/status";

export const metadata = {
  title: "Nuncio Feature Matrix — What's Shipped, What's Planned",
  description: "A scannable directory of every Nuncio capability — Core Email Engine, Calendar/Contacts, NSQL Automation, four presentation shells, MCP AI, and Security — tagged with its real status: available now, in progress, or planned.",
};

interface FeatureRow {
  feature: string;
  scope: string;
  benefit: string;
  status: StatusVariant;
}

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  rows: FeatureRow[];
}

export default function FeaturesPage() {
  const featureTables: FeatureCategory[] = [
    {
      category: "Core Email Engine & Inbox Power Tools",
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      rows: [
        { feature: "Multi-Account IMAP / SMTP Sync", scope: "Mail Engine", benefit: "Unify multiple IMAP/SMTP accounts into a single local SQLite inbox, tested against mock servers.", status: "available-now" },
        { feature: "JMAP Protocol Support", scope: "JMAP Driver", benefit: "A second mail backend alongside IMAP/SMTP, targeting session discovery and JSON-RPC batching per RFC 8620/8621.", status: "planned" },
        { feature: "SQLite FTS5 Full-Text Search", scope: "Search Engine", benefit: "Local full-text search over synced mail, backed by SQLite FTS5 — no cloud index required.", status: "available-now" },
        { feature: "Vim-Style Triage Motions", scope: "TUI & GUI", benefit: "Single-key triage chords for fast keyboard-driven inbox processing, once the TUI and GUI clients exist.", status: "planned" },
        { feature: "Rich HTML & Inline Image Rendering", scope: "Reader Engine", benefit: "HTML-to-text formatting for terminal display, with sandboxed HTML rendering as the target for the desktop GUI.", status: "planned" },
        { feature: "Portable Data Export (MBOX / EML / JSON)", scope: "Export Engine", benefit: "Export synced mail to standard, portable formats — no lock-in. Real and working today.", status: "available-now" },
        { feature: "Tracking Beacon Neutralization", scope: "Reader Engine", benefit: "Stripping 1x1 tracking pixels and remote CSS triggers before rendering, part of the HTML sanitization milestone.", status: "planned" },
      ],
    },
    {
      category: "Calendar & Contacts Management",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      rows: [
        { feature: "Natural-Language Event Booking", scope: "Calendar NLP", benefit: "Create calendar events from plain text ('coffee with Bob next Tuesday at 2pm'), a target once CalDAV lands.", status: "planned" },
        { feature: "Local Contacts Store", scope: "Contacts Engine", benefit: "A dedicated local SQLite contacts database with search and vCard support is under active development.", status: "in-progress" },
        { feature: "CardDAV Contacts Sync", scope: "CardDAV Protocol", benefit: "Sync address books from Google, iCloud, Fastmail, and Nextcloud over CardDAV.", status: "planned" },
        { feature: "Automated Contact Harvesting", scope: "Mail / Contacts", benefit: "Extract name/email pairs from mail traffic and update interaction metrics automatically.", status: "planned" },
        { feature: "CalDAV Calendar Sync", scope: "Calendar Engine", benefit: "Calendar sync exposed end-to-end over the API; the transport exists in the engine but isn't wired up yet.", status: "planned" },
        { feature: "OAuth 2.0 PKCE for Google Calendar/Contacts", scope: "Auth Engine", benefit: "Loopback OAuth with refresh tokens stored in the OS keyring, once Calendar/Contacts protocols ship.", status: "planned" },
      ],
    },
    {
      category: "NSQL Server-Side Filter Engine",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      rows: [
        { feature: "NSQL Parser & Compiler", scope: "Core Engine", benefit: "Compiles human-readable NSQL text into a typed Rust AST with multi-pass validation. Real and testable today.", status: "in-progress" },
        { feature: "ON ACCOUNT & Domain Matching", scope: "NSQL / Rules", benefit: "Match rules against specific accounts, exact addresses, or domain wildcards.", status: "in-progress" },
        { feature: "Dry-Run Rule Tester", scope: "CLI (today)", benefit: "Test a rule against a sample message without touching your database or network state. Works today via the CLI.", status: "in-progress" },
        { feature: "Rules Firing on Synced Mail", scope: "nunciod Daemon", benefit: "Running validated rules automatically during the live IMAP sync loop — the next milestone on the roadmap.", status: "planned" },
        { feature: "Signed Outbound Webhooks", scope: "Webhooks", benefit: "HMAC-SHA256 signed webhook dispatch with redirect blocking and private-IP defenses — implemented in the engine, not yet wired to live sync.", status: "in-progress" },
        { feature: "WASM / QuickJS Plugin Runtime", scope: "Plugin Runtime", benefit: "Sandboxed custom automation scripts with declared capability manifests.", status: "planned" },
      ],
    },
    {
      category: "Four Presentation Shells",
      icon: <Monitor className="w-5 h-5 text-yellow-400" />,
      rows: [
        { feature: "POSIX Reference CLI", scope: "CLI", benefit: "Pipeable JSON output (--json), the E2E driver for the engine, and the only client that exists today.", status: "available-now" },
        { feature: "Native Desktop GUI", scope: "GUI", benefit: "A visual workspace, split panes, sandboxed HTML viewer, and drag-and-drop rule builder — planned as a separate client repo.", status: "planned" },
        { feature: "Terminal TUI", scope: "TUI", benefit: "Vim motions, single-key triage chords, and a split-view previewer for keyboard-first users.", status: "planned" },
        { feature: "MCP AI Client", scope: "MCP", benefit: "Exposes mail, calendar, and rule tools to LLM agents through a governed gateway.", status: "planned" },
      ],
    },
    {
      category: "Model Context Protocol (MCP) AI Integration",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      rows: [
        { feature: "Local LLM Summarization & Triage", scope: "Local AI", benefit: "Offline thread summarization, action-item extraction, and smart replies — a future capability once the MCP client exists.", status: "planned" },
        { feature: "Claude Desktop & MCP Client Integration", scope: "MCP Protocol", benefit: "Connect AI agents to local mail and calendar data over stdio through a policy gateway.", status: "planned" },
        { feature: "RBAC Capability Gateway", scope: "MCP Security", benefit: "Fine-grained capability flags, folder whitelists, and audit logging for every agent tool call.", status: "planned" },
        { feature: "Automatic PII Redaction", scope: "MCP Enclave", benefit: "Masking sensitive identifiers before payloads reach an LLM context window.", status: "planned" },
      ],
    },
    {
      category: "Privacy, Security & Storage",
      icon: <Lock className="w-5 h-5 text-red-400" />,
      rows: [
        { feature: "OS Keyring Credential Vault", scope: "Security", benefit: "Passwords and OAuth tokens stored exclusively in the native OS credential store — real and enforced today.", status: "available-now" },
        { feature: "WORM Audit Hash Chain", scope: "Compliance", benefit: "Immutable, HMAC-SHA256 hash-chained audit ledger for filter and account mutations — real and verifiable today.", status: "available-now" },
        { feature: "At-Rest Body Encryption", scope: "Storage", benefit: "Column-level encryption for email bodies and subject lines. Not implemented yet — bodies are currently stored unencrypted in the local database.", status: "planned" },
        { feature: "Attachment Stream Encryption", scope: "Storage", benefit: "Large binary attachments encrypted with a modern stream cipher before being written to disk.", status: "planned" },
        { feature: "Key & Secret Zeroization", scope: "Core Vault", benefit: "Explicit zeroing of secret memory buffers on drop. In progress; not verified complete across the codebase.", status: "in-progress" },
        { feature: "Untrusted HTML Sanitization", scope: "GUI / TUI", benefit: "Sandboxed rendering with JS execution disabled, for whichever client renders HTML email.", status: "planned" },
        { feature: "Fail-Closed, Signature-Verified Updater", scope: "Distribution", benefit: "An updater that refuses to install anything it can't verify — tracked as a hardening milestone before any packaged release.", status: "planned" },
        { feature: "Self-Healing Storage Recovery", scope: "Storage Engine", benefit: "Startup integrity checks and corruption recovery for the local SQLite database.", status: "in-progress" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Master Capability Directory</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Full Feature <span className="gradient-text">Matrix</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Every capability Nuncio is building toward, each tagged with its real status. No invented benchmarks —
            just what&apos;s shipped, what&apos;s in progress, and what&apos;s planned.
          </p>
        </div>

        {/* Feature Tables Stack */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {featureTables.map((section, sIdx) => (
            <div key={sIdx} className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl space-y-0">
              <div className="flex items-center gap-3 p-5 bg-slate-900/90 border-b border-white/10">
                <div className="p-2 rounded-xl bg-slate-800 border border-white/10">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">{section.category}</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-950/60 border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                      <th className="py-3 px-5 font-semibold w-1/4">Feature / Capability</th>
                      <th className="py-3 px-4 font-semibold w-1/6">Scope</th>
                      <th className="py-3 px-5 font-semibold">Description</th>
                      <th className="py-3 px-4 font-semibold w-1/6 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {section.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-4 px-5 font-bold text-white">
                          <span>{row.feature}</span>
                        </td>
                        <td className="py-4 px-4 font-mono text-xs">
                          <span className="px-2.5 py-1 rounded-md bg-slate-800/90 text-blue-300 border border-white/10 font-semibold">
                            {row.scope}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-slate-300 leading-relaxed">
                          {row.benefit}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <StatusBadge variant={row.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-6 flex flex-wrap items-center justify-center gap-4">
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
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Sparkles, Monitor, Code, Lock, Database, RefreshCw } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio Feature Matrix — Full Structured Capability Directory",
  description: "Comprehensive scannable table of all Nuncio capabilities: GUI, TUI, CLI, MCP AI, NSQL filter engine, AES-256-GCM encryption, database self-healing, and auto-updater.",
};

export default function FeaturesPage() {
  const featureTables = [
    {
      category: "Four Great Interfaces (100% Feature Parity)",
      icon: <Monitor className="w-5 h-5 text-purple-400" />,
      rows: [
        { feature: "Tauri v2 Native Desktop GUI", scope: "GUI", benefit: "Glassmorphic visual workspace, split-pane resizers, sandboxed HTML viewer, and visual drag-and-drop rule builder." },
        { feature: "Ratatui Terminal TUI", scope: "TUI", benefit: "Vim motions (j/k/h/l/g i/e/s), single-key triage chords, split-view text/HTML previewer, and live log inspector." },
        { feature: "POSIX Scriptable CLI", scope: "CLI", benefit: "Pipeable JSON output (--json), microsecond search, headless daemon management (nunciod), and shell automation." },
        { feature: "Native MCP AI Server", scope: "MCP AI", benefit: "Exposes mail, calendar, and rule tools to LLM agents (Claude Desktop, Antigravity, ChatGPT) via Model Context Protocol." },
      ],
    },
    {
      category: "Server-Side Email Filter Engine (NSQL)",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      rows: [
        { feature: "Nuncio SQL Parser (sqlparser 0.54)", scope: "Core Engine", benefit: "Compiles human-readable NSQL text into typed Rust AST representations with 6-pass validation." },
        { feature: "ON ACCOUNT Wildcard Matching", scope: "NSQL / Rules", benefit: "Match rules against specific accounts, exact emails, or domain wildcards (*, %, %@company.com)." },
        { feature: "Pre-Ingestion Execution", scope: "nunciod Daemon", benefit: "Executes priority-ordered rules during background IMAP IDLE / JMAP push loops before database persistence." },
        { feature: "Dry-Run In-Memory Tester", scope: "All 4 Interfaces", benefit: "Test rules against inbox messages in microsecond time without database or network state mutations." },
        { feature: "HMAC Webhooks & SSRF Defense", scope: "Webhooks", benefit: "Dispatch signed webhooks with HMAC-SHA256, pre-flight DNS IP blacklisting, and redirect blocking." },
      ],
    },
    {
      category: "Sovereign Privacy & Security Enclave",
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      rows: [
        { feature: "AES-256-GCM Encryption at Rest", scope: "Storage", benefit: "Column-level encryption for email bodies and subject lines using PayloadCipher." },
        { feature: "age X25519 Attachment Ciphers", scope: "Storage", benefit: "Large binary attachment streams encrypted with age ciphers and 64KB chunk authentication." },
        { feature: "Memory Page Zeroing on Drop", scope: "Core Vault", benefit: "Keyring secrets and passphrase buffers locked in memory and zeroed out on drop via ZeroizeOnDrop." },
        { feature: "Strict HTML Email Sandboxing", scope: "GUI / TUI", benefit: "<iframe sandbox=\"allow-same-origin\"> with CSP default-src 'none' disabling JS execution." },
        { feature: "Tracking Pixel Neutralization", scope: "Reader Engine", benefit: "Automatic stripping of 1x1 tracking beacons, web bugs, and remote image triggers." },
        { feature: "MCP Agent RBAC & Data Filtering", scope: "MCP Protocol", benefit: "McpAgentPolicy enforcing capability flags, account/folder access lists, and automatic SSN/credit card redaction." },
      ],
    },
    {
      category: "Universal Portable Data Export & Automated Backups",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      rows: [
        { feature: "RFC 4155 MBOX & EML ZIP Archives", scope: "Core Export Engine", benefit: "Export full accounts, folders, or NSQL result sets to standard portable MBOX files or compressed EML ZIP archives with manifest.json." },
        { feature: "Structured JSON & JSONL Streams", scope: "Export Formats", benefit: "Export structured JSON or line-delimited JSONL data streams optimized for LLM data pipelines and custom analytics." },
        { feature: "Headless POSIX CLI Backup Jobs", scope: "CLI / Automation", benefit: "Automate periodic account backups via cron jobs using 'nuncio mail export --format mbox --output ~/backups/full_inbox.mbox'." },
        { feature: "Multi-Shell Data Export Parity", scope: "GUI / TUI / MCP", benefit: "Instant export modal in Desktop GUI, [e] key chord in Ratatui TUI, POSIX CLI subcommands, and nuncio_export_data tool in MCP AI server." },
      ],
    },
    {
      category: "Self-Healing Storage & Auto-Update Engine",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      rows: [
        { feature: "Startup Integrity Check", scope: "DatabaseEngine", benefit: "PRAGMA quick_check(10) runs automatically on startup to catch hardware crashes and corruptions." },
        { feature: "Corrupted Backup Isolation", scope: "Recovery Engine", benefit: "Isolates damaged .db, .db-wal, and .db-shm files into timestamped backup folders automatically." },
        { feature: "Stream Salvage Recovery Engine", scope: "Recovery Engine", benefit: "Extracts valid account, rule, and message records into a fresh SQLite file automatically." },
        { feature: "Self-Healing Sync Orchestrator", scope: "nunciod Daemon", benefit: "Triggers background remote IMAP/JMAP resync to reconstruct local email caches." },
        { feature: "GitHub Releases Auto-Updater", scope: "All Executables", benefit: "Periodic 24h background update check, SHA-256 checksum verification, and atomic binary swapping." },
      ],
    },
    {
      category: "Protocols & Synchronization",
      icon: <RefreshCw className="w-5 h-5 text-indigo-400" />,
      rows: [
        { feature: "Async IMAP IDLE & Lettre SMTP", scope: "Mail Engine", benefit: "Push email synchronization over TLS 993 / 587 / 465." },
        { feature: "Wiremock-Verified JMAP Push", scope: "Mail Engine", benefit: "Modern JSON-based email push protocol with wiremock test coverage." },
        { feature: "CalDAV & Google Calendar Sync", scope: "Calendar Engine", benefit: "Calendar event management with RRULE support and Google Calendar REST API integration." },
        { feature: "SQLite FTS5 Full-Text Search", scope: "Search Engine", benefit: "Trigram full-text index returning search results in <10ms across 100,000+ messages." },
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
            A scannable, structured breakdown of every capability built into Nuncio.
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
                      <th className="py-3 px-5 font-semibold w-1/3">Feature / Capability</th>
                      <th className="py-3 px-4 font-semibold w-1/6">Scope</th>
                      <th className="py-3 px-5 font-semibold">User Benefit / Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {section.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-6">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Latest Release
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

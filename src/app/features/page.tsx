import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Zap, Terminal, Code, Monitor, Bot, Lock, Database, RefreshCw, Cpu, CheckCircle2, ArrowRight, Sparkles, Filter, Key, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio Full Feature Catalog — Native Mail, Calendar, NSQL, Security & AI MCP",
  description: "Explore the complete feature breakdown of Nuncio: 4 interfaces, NSQL filter engine, AES-256-GCM encryption, self-healing database recovery, auto-updater, and MCP AI agent policies.",
};

export default function FeaturesPage() {
  const featureCategories = [
    {
      id: "interfaces",
      categoryName: "1. Four Great Interfaces (100% Multi-Shell Parity)",
      categoryDesc: "Every feature is 100% accessible across GUI, TUI, CLI, and MCP AI server.",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      features: [
        { title: "Tauri v2 Native Desktop GUI", desc: "Glassmorphic visual workspace with dark mode, split-pane resizers, HTML sandboxed viewer, and visual drag-and-drop rule builder." },
        { title: "Ratatui Terminal TUI", desc: "Vim motions (j/k/h/l/g i/e/s), single-key triage chords, split-view text/HTML previewer, unread badges, and live log inspector." },
        { title: "POSIX Scriptable CLI", desc: "Pipeable JSON output (--json), microsecond search, headless background daemon management (nunciod), and shell automation." },
        { title: "Native MCP AI Server", desc: "Exposes mail, calendar, and rule tools to LLM agents (Claude Desktop, Antigravity, ChatGPT) via Model Context Protocol." },
      ],
    },
    {
      id: "nsql",
      categoryName: "2. Server-Side Email Filter Engine (NSQL)",
      categoryDesc: "SQL-powered rule compilation and background execution inside nunciod.",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      features: [
        { title: "Nuncio SQL Parser (sqlparser 0.54)", desc: "Compiles human-readable NSQL text into typed Rust AST representations with 6-pass validation." },
        { title: "ON ACCOUNT Wildcard Matching", desc: "Match rules against specific accounts, exact emails, or domain wildcards (*, %, %@company.com)." },
        { title: "Pre-Ingestion Execution", desc: "nunciod executes priority-ordered rules during background IMAP IDLE / JMAP push loops before database persistence." },
        { title: "Dry-Run In-Memory Tester", desc: "Test rules against inbox messages in microsecond time without database or network state mutations." },
        { title: "HMAC Webhooks & SSRF Defense", desc: "Dispatch signed webhooks with HMAC-SHA256, pre-flight DNS IP blacklisting, and redirect blocking." },
      ],
    },
    {
      id: "security",
      categoryName: "3. Sovereign Privacy & Security Enclave",
      categoryDesc: "Zero cloud telemetry, zero unencrypted text on disk, strict HTML isolation.",
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      features: [
        { title: "AES-256-GCM Encryption at Rest", desc: "Column-level encryption for email bodies and subject lines using PayloadCipher." },
        { title: "age X25519 Attachment Ciphers", desc: "Large binary attachment streams encrypted with age ciphers and 64KB chunk authentication." },
        { title: "Memory Page Zeroing on Drop", desc: "Keyring secrets and passphrase buffers locked in memory and zeroed out on drop via ZeroizeOnDrop." },
        { title: "Strict HTML Email Sandboxing", desc: "<iframe sandbox=\"allow-same-origin\"> with CSP default-src 'none' disabling JS execution." },
        { title: "Tracking Pixel Neutralization", desc: "Automatic stripping of 1x1 tracking beacons, web bugs, and remote image triggers." },
        { title: "MCP Agent RBAC & Data Filtering", desc: "McpAgentPolicy enforcing capability flags, account/folder access lists, and automatic SSN/credit card redaction." },
      ],
    },
    {
      id: "storage",
      categoryName: "4. Self-Healing Storage & Auto-Update Engine",
      categoryDesc: "Automatic database corruption detection, stream salvage, and binary updates.",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      features: [
        { title: "Integrity Checking on Startup", desc: "DatabaseEngine runs PRAGMA quick_check(10) on open to catch hardware crashes and corruptions." },
        { title: "Corrupted Backup Isolation", desc: "Isolates damaged .db, .db-wal, and .db-shm files into timestamped backup folders." },
        { title: "Stream Salvage Recovery Engine", desc: "Extracts valid account, rule, and message records into a fresh SQLite file automatically." },
        { title: "Self-Healing Sync Orchestrator", desc: "Triggers background remote IMAP/JMAP resync to reconstruct local email caches." },
        { title: "GitHub Releases Auto-Updater", desc: "Periodic 24h background update check, SHA-256 checksum verification, and atomic binary swapping." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Master Capability Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Every Capability.<br />
            <span className="gradient-text">Zero Tradeoffs.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Explore the complete feature architecture powering Nuncio across desktop GUI, Vim terminal TUI, Unix shell CLI, and native MCP AI agent integration.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#downloads"
              className="apple-button-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              Download Nuncio v1.0.0
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Categories Bento Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {featureCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-3 rounded-2xl bg-slate-900 border border-white/10">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{cat.categoryName}</h2>
                  <p className="text-xs text-slate-400 font-medium">{cat.categoryDesc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.features.map((f, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <h3 className="text-base font-bold text-white">{f.title}</h3>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center pt-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Experience Nuncio Today</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              100% free open-source software. Runs 100% locally on macOS, Linux, and Windows.
            </p>
            <div className="pt-2">
              <a
                href="/#downloads"
                className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
              >
                Download for Your Platform
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Terminal,
  Code,
  Cpu,
  Key,
  Bot,
  Search,
  ChevronRight,
  HelpCircle,
  Download,
  FileCheck,
  Sparkles,
  Layers,
  AlertTriangle,
  Monitor,
} from "lucide-react";
import { StatusBadge, AvailableNow } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";

interface DocTopic {
  id: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

/**
 * Standalone tabbed documentation reader. Not currently linked from any
 * route — the per-slug pages under src/app/docs/* (via DocsLayout) are the
 * live docs surface. Kept accurate in case it's wired back in.
 */
export function DocsHub() {
  const [activeTopic, setActiveTopic] = useState<string>("quickstart");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const topics: DocTopic[] = [
    {
      id: "quickstart",
      category: "Getting Started",
      title: "Quickstart: Build & Run From Source",
      icon: <Download className="w-4 h-4 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Getting Started</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Download className="w-6 h-6 text-amber-400 shrink-0" />
              Build &amp; Run the Engine From Source
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              There is no installer or package yet. What&apos;s real: clone the repo, build the workspace, and run the
              daemon and reference CLI locally. <AvailableNow className="ml-1 align-middle" />
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-lg">
            <span className="text-sm font-bold text-amber-300">Clone &amp; Build</span>
            <pre className="bg-slate-950 p-3 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
{`git clone https://github.com/KofTwentyTwo/nuncio.git
cd nuncio
cargo build --workspace`}
            </pre>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-lg">
            <span className="text-sm font-bold text-cyan-300">Run the Daemon, Drive It With the CLI</span>
            <pre className="bg-slate-950 p-3 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
{`cargo run -p nunciod
cargo run -p nuncio-cli -- system status`}
            </pre>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-2 text-xs">
            <span className="text-blue-300 font-bold block flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              The Daemon (`nunciod`)
            </span>
            <p className="text-slate-300 leading-relaxed">
              The daemon owns all state and serves a versioned gRPC API on loopback (`127.0.0.1:9420`) behind a
              keyring-minted bearer token. The reference CLI is a full gRPC client over that same contract.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "account-setup",
      category: "Getting Started",
      title: "Account Setup (Planned)",
      icon: <Key className="w-4 h-4 text-purple-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Getting Started • Planned</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Key className="w-6 h-6 text-purple-400 shrink-0" />
              Account Setup &amp; Provider Configuration
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A polished, end-user onboarding flow for connecting accounts does not exist yet.{" "}
              <StatusBadge variant="planned" className="ml-1 align-middle" />
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-purple-300">What Exists Today</span>
            <p className="text-slate-300 text-xs leading-relaxed">
              IMAP/SMTP sync is real and tested against mock servers. The CLI&apos;s <code className="text-purple-300 font-mono">account add / list / show / edit / delete / test</code>{" "}
              commands exist for developers driving the daemon directly. Credentials are always routed through the OS
              keyring, never stored in plaintext.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2 text-xs">
            <span className="text-purple-300 font-bold block flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-purple-400" />
              Planned
            </span>
            <p className="text-slate-300 leading-relaxed">
              JMAP, CalDAV, and CardDAV provider support, and any OAuth-based consumer onboarding flow, are on the
              roadmap and not implemented yet.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "interfaces-guide",
      category: "User Interfaces",
      title: "Client Interfaces",
      icon: <Monitor className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">User Interfaces</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Monitor className="w-6 h-6 text-cyan-400 shrink-0" />
              One Contract, Several Clients
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              The reference CLI is the one working client today. A desktop GUI, a terminal TUI, and an MCP AI client
              are planned as separate thin clients over the same gRPC contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between items-center">
              <span className="text-slate-300">Reference CLI</span>
              <AvailableNow />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between items-center">
              <span className="text-slate-300">Desktop GUI</span>
              <StatusBadge variant="planned" />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between items-center">
              <span className="text-slate-300">Terminal TUI</span>
              <StatusBadge variant="planned" />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between items-center">
              <span className="text-slate-300">MCP AI Client</span>
              <StatusBadge variant="planned" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "nsql-spec",
      category: "Automation Engine",
      title: "NSQL Language Specification",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">NSQL Filter Engine</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400 shrink-0" />
              NSQL Syntax &amp; Grammar
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              NSQL is parsed and validated by <code className="text-cyan-300 font-mono">nuncio-filter</code> using{" "}
              <code className="text-cyan-300 font-mono">sqlparser-rs</code>. Authoring and dry-run testing rules is real
              today; firing them against live synced mail is still ahead. <AvailableNow label="Author & dry-run test" />
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">Real Grammar</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`[ON ACCOUNT '<target_account>']
[WHERE] <field> <operator> <value> [AND|OR <condition>]
ACTION <action_1> [, <action_2> ...];`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <span className="font-bold text-white block">Fields &amp; Operators</span>
              <p className="text-slate-300 font-mono">subject, from, to, body, has_attachment, size, folder, date, account</p>
              <p className="text-slate-300 font-mono">= != CONTAINS NOT CONTAINS MATCHES &gt; &lt; &gt;= &lt;= IN NOT IN</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <span className="font-bold text-white block">Actions</span>
              <p className="text-slate-300 font-mono">MOVE TO, COPY TO, MARK READ, MARK UNREAD, FLAG, UNFLAG, DELETE, FORWARD TO, CALL WEBHOOK</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "webhooks-spec",
      category: "Automation Engine",
      title: "Outbound Webhooks & SSRF Security",
      icon: <Code className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">NSQL Engine • Webhook Security</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Code className="w-6 h-6 text-emerald-400 shrink-0" />
              HMAC-SHA256 Signed Webhooks &amp; SSRF Defense
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A `CALL WEBHOOK &apos;url&apos;` action dispatches an HMAC-signed HTTP POST with SSRF defenses. The
              dispatcher is implemented and tested; it is not yet invoked from the live sync path.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2 text-xs">
            <span className="text-purple-300 font-bold block flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              SSRF Defense
            </span>
            <ul className="text-slate-300 space-y-1 list-disc list-inside">
              <li>Pre-flight DNS blocking of loopback, cloud metadata endpoints, and private subnets.</li>
              <li>Zero-redirect-loop policy on the outbound HTTP client.</li>
              <li>An `X-Nuncio-Signature` header carrying the HMAC-SHA256 signature.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mcp-deep-dive",
      category: "AI Integration",
      title: "Model Context Protocol (Planned)",
      icon: <Bot className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">AI Integration • Planned</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0" />
              A Governed Gateway for AI Agents
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              An MCP client is planned as a separate thin client over the daemon&apos;s gRPC contract. It does not
              exist yet, and no config below will connect to anything today.{" "}
              <StatusBadge variant="planned" className="ml-1 align-middle" />
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300">Target Configuration Shape</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`{
  "mcpServers": {
    "nuncio": {
      "command": "nuncio-mcp",
      "args": ["--stdio"]
    }
  }
}`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "html-rendering",
      category: "Security",
      title: "HTML Rendering & Sandboxing (Planned)",
      icon: <Monitor className="w-4 h-4 text-purple-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Security • Planned</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Monitor className="w-6 h-6 text-purple-400 shrink-0" />
              HTML Email Rendering &amp; Sandboxing
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              The plan is to render untrusted HTML email inside a sandboxed iframe with scripts disabled. Not
              implemented yet. <StatusBadge variant="planned" className="ml-1 align-middle" />
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "export-backups",
      category: "Maintenance",
      title: "Data Export & Backups",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">Maintenance</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400 shrink-0" />
              Export Synced Mail to Open Formats
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Export to MBOX, an EML zip, JSON, or JSON Lines — no vendor lock-in. <AvailableNow />
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300 font-mono">nuncio mail export</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`nuncio mail export --format mbox --out ~/backups/inbox.mbox --account <account-id>
nuncio mail export --format eml --out ~/backups/archive.zip --folder <folder-id>`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "worm-audits",
      category: "Security & Compliance",
      title: "WORM Audit Ledger",
      icon: <FileCheck className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Compliance</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-cyan-400 shrink-0" />
              Write Once, Read Many Audit Ledger
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Account and rule mutations are recorded in an append-only, hash-chained ledger. <AvailableNow />
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">CLI</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`nuncio system audit list --limit 50
nuncio system audit verify`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "recovery",
      category: "Maintenance",
      title: "Database Corruption Recovery",
      icon: <HelpCircle className="w-4 h-4 text-blue-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-wider">Maintenance • Self-Healing</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-400 shrink-0" />
              Automatic Corruption Detection &amp; Salvage
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A corrupted local database is isolated and salvaged automatically when the store is opened — no manual
              command required. <AvailableNow />
            </p>
          </div>
        </div>
      ),
    },
  ];

  const filteredTopics = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeDoc = topics.find((t) => t.id === activeTopic) || topics[0];

  return (
    <section id="docs" className="py-20 relative border-t border-white/10 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nuncio Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Documentation <span className="gradient-text">Hub</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            What&apos;s real and buildable from source today, and what&apos;s an honest, labeled design for what&apos;s
            still ahead.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Pre-alpha — not yet usable for real accounts</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Follow the build on GitHub
            </a>
            <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              See the roadmap
            </a>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, NSQL syntax, CLI commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Documentation Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Navigation */}
          <div className="lg:col-span-4 glass-panel p-4 rounded-2xl border border-white/10 space-y-2 shadow-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 block mb-2 font-mono">
              Documentation Index ({filteredTopics.length})
            </span>
            <div className="space-y-1.5">
              {filteredTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all text-left min-h-[48px] ${
                    activeTopic === topic.id
                      ? "bg-blue-600/20 border border-blue-500/40 text-blue-300 shadow-md shadow-blue-500/10"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="shrink-0">{topic.icon}</div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-slate-400 font-normal uppercase tracking-tight">{topic.category}</span>
                      <span className="block text-xs font-bold truncate">{topic.title}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeTopic === topic.id ? "rotate-90 text-blue-400" : "text-slate-500"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Documentation Reader Content */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 min-h-[550px] shadow-2xl">
            {activeDoc.content}
          </div>
        </div>
      </div>
    </section>
  );
}

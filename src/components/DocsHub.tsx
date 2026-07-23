"use client";

import React, { useState } from "react";
import { BookOpen, Terminal, Code, Cpu, Shield, Bot, Search, Check, Copy, ChevronRight, HelpCircle, Download } from "lucide-react";

interface DocTopic {
  id: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function DocsHub() {
  const [activeTopic, setActiveTopic] = useState<string>("quickstart");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const topics: DocTopic[] = [
    {
      id: "quickstart",
      category: "Getting Started",
      title: "Quickstart & Installation",
      icon: <Download className="w-4 h-4 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Download className="w-5 h-5 text-amber-400" />
            Installing Nuncio Across Platforms
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Nuncio can be installed via package managers (Homebrew, Cargo) or downloaded as a pre-packaged desktop app (`.dmg`, `.msi`, `.AppImage`).
          </p>

          {/* Homebrew */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-amber-300">Option 1: macOS &amp; Linux (Homebrew)</span>
              <button
                onClick={() => copyToClipboard("brew install koftwentytwo/tap/nuncio", "brew")}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white p-1 rounded hover:bg-slate-800"
              >
                {copiedCode === "brew" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy
              </button>
            </div>
            <pre className="bg-slate-950 p-3 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto">
              brew install koftwentytwo/tap/nuncio
            </pre>
          </div>

          {/* Cargo */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-cyan-300">Option 2: Cargo Rust Crates (Cross-Platform)</span>
              <button
                onClick={() => copyToClipboard("cargo install nuncio-cli nuncio-tui nuncio-mcp nunciod", "cargo")}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white p-1 rounded hover:bg-slate-800"
              >
                {copiedCode === "cargo" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy
              </button>
            </div>
            <pre className="bg-slate-950 p-3 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto">
              cargo install nuncio-cli nuncio-tui nuncio-mcp nunciod
            </pre>
          </div>

          {/* Launching Daemon */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-blue-300">First-Time Setup &amp; Daemon Auto-Spawn</span>
            <p className="text-xs text-gray-300">
              When you launch any Nuncio application interface (`nuncio`, `nuncio-tui`, `nuncio-gui`, `nuncio-mcp`), it automatically detects and auto-spawns the background daemon (`nunciod`) if it is not already running.
            </p>
            <pre className="bg-slate-950 p-3 rounded-lg text-blue-300 font-mono text-xs overflow-x-auto">
{`# Add your first account interactively
nuncio account add --email user@nuncio.mx --imap mail.nuncio.mx:993 --smtp mail.nuncio.mx:465

# Launch the Vim Ratatui TUI
nuncio-tui`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "nsql-guide",
      category: "Automation Engine",
      title: "NSQL Filter Language & Webhooks",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            NSQL Filter Language Specification
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            NSQL (Nuncio SQL) compiles declarative filter expressions into typed AST objects that execute inside `nunciod` with microsecond latency.
          </p>

          {/* Grammar Reference */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">NSQL Clause Syntax</span>
            <pre className="bg-slate-950 p-3 rounded-lg text-purple-300 font-mono text-xs overflow-x-auto">
{`WHEN <condition_expression> 
THEN <action_1>, <action_2> [WITH STOP PROCESSING];`}
            </pre>
            <ul className="text-xs text-gray-300 space-y-1 list-disc pl-5">
              <li><strong>Fields</strong>: `subject`, `from`, `to`, `body`, `has_attachment`, `size`, `folder`, `date`, `header['X-Spam']`</li>
              <li><strong>Operators</strong>: `=`, `!=`, `LIKE`, `CONTAINS`, `REGEXP`, `&gt;`, `&lt;`, `IN (...)`</li>
              <li><strong>Actions</strong>: `MOVE TO 'folder'`, `MARK READ`, `FLAG`, `DELETE`, `FORWARD TO 'email'`, `CALL WEBHOOK 'url'`</li>
            </ul>
          </div>

          {/* Example 1: Webhook Alert */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300">Example: Outbound Webhook Alert with HMAC-SHA256</span>
            <pre className="bg-slate-950 p-3 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto">
{`WHEN subject REGEXP '(?i)(urgent|security)' AND from LIKE '%@kof22.com%' 
THEN MOVE TO 'VIP', FLAG, CALL WEBHOOK 'https://hooks.nuncio.mx/alerts' WITH STOP PROCESSING;`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "gmail-oauth",
      category: "Protocols & Auth",
      title: "Google Workspace & Gmail OAuth2 PKCE",
      icon: <Shield className="w-4 h-4 text-purple-400" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Connecting Gmail &amp; Google Workspace
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Nuncio supports Google OAuth 2.0 PKCE (`RFC 7636`) for secure credential-free authentication with Gmail IMAP/SMTP and Google Calendar/Contacts.
          </p>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-purple-300">OAuth 2.0 PKCE Loopback Authentication</span>
            <pre className="bg-slate-950 p-3 rounded-lg text-purple-300 font-mono text-xs overflow-x-auto">
{`# Add a Google Workspace account via CLI
nuncio account add --provider google --email user@company.com

# Nuncio opens http://127.0.0.1:9422/oauth/callback in your browser.
# Refresh tokens are encrypted and stored in OS Keyring.`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "mcp-setup",
      category: "AI Integration",
      title: "Claude Desktop & LLM Agent Setup (MCP)",
      icon: <Bot className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Bot className="w-5 h-5 text-emerald-400" />
            Model Context Protocol (`nuncio-mcp`) Integration
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Connect AI assistants (Claude Desktop, Google Antigravity, Cursor) directly to your local email and calendar database over stdio.
          </p>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300">Claude Desktop Config (`claude_desktop_config.json`)</span>
            <pre className="bg-slate-950 p-3 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto">
{`{
  "mcpServers": {
    "nuncio": {
      "command": "nuncio-mcp",
      "args": []
    }
  }
}`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "recovery",
      category: "Maintenance",
      title: "Self-Healing Database Recovery",
      icon: <HelpCircle className="w-4 h-4 text-blue-400" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            Database Corruption Recovery Engine
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            If SQLite database corruption occurs due to ungraceful shutdown or hardware errors, Nuncio automatically isolates the damaged file and salvages valid records into a fresh database.
          </p>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-blue-300">Manual Recovery Diagnostics</span>
            <pre className="bg-slate-950 p-3 rounded-lg text-blue-300 font-mono text-xs overflow-x-auto">
{`# Check database integrity manually
nuncio store check-integrity

# View isolated corrupted backups
ls -l ~/.nuncio/corrupted_backups/`}
            </pre>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Documentation &amp; How-To Guides
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Nuncio User Guide &amp; Technical Manual
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Step-by-step instructions for installation, NSQL rule creation, protocol setup, and AI agent integration.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documentation, NSQL syntax, commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Documentation Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Navigation */}
          <div className="lg:col-span-4 glass-panel p-4 rounded-2xl border border-white/10 space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 block mb-2">
              Topic Index ({filteredTopics.length})
            </span>
            {filteredTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all text-left min-h-[44px] ${
                  activeTopic === topic.id
                    ? "bg-blue-600/20 border border-blue-500/40 text-blue-300 shadow-md shadow-blue-500/10"
                    : "text-gray-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {topic.icon}
                  <div>
                    <span className="block text-xs text-gray-400 font-normal">{topic.category}</span>
                    <span>{topic.title}</span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTopic === topic.id ? "rotate-90 text-blue-400" : "text-gray-500"}`} />
              </button>
            ))}
          </div>

          {/* Documentation Reader Content */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 min-h-[450px]">
            {activeDoc.content}
          </div>
        </div>
      </div>
    </section>
  );
}

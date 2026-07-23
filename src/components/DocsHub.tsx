"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Terminal,
  Code,
  Cpu,
  Shield,
  Bot,
  Search,
  Check,
  Copy,
  ChevronRight,
  HelpCircle,
  Download,
  Key,
  Lock,
  Database,
  FileCheck,
  RefreshCw,
  Sparkles,
  Layers,
  AlertTriangle,
  Monitor,
} from "lucide-react";

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
      title: "Quickstart & Installation Guide",
      icon: <Download className="w-4 h-4 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Getting Started • Step 1</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Download className="w-6 h-6 text-amber-400 shrink-0" />
              Installing Nuncio Across Platforms
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Nuncio is 100% free and open-source under MIT &amp; Apache-2.0 licenses. Install via package managers or standalone installer packages.
            </p>
          </div>

          {/* Homebrew */}
          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-amber-300">Option 1: macOS &amp; Linux (Homebrew Tap)</span>
              <button
                onClick={() => copyToClipboard("brew install koftwentytwo/tap/nuncio", "brew")}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-800 border border-white/10"
              >
                {copiedCode === "brew" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode === "brew" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="bg-slate-950 p-3 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
              brew install koftwentytwo/tap/nuncio
            </pre>
          </div>

          {/* Cargo */}
          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-cyan-300">Option 2: Cargo Rust Binaries (Cross-Platform)</span>
              <button
                onClick={() => copyToClipboard("cargo install nuncio-cli nuncio-tui nuncio-mcp nunciod", "cargo")}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-800 border border-white/10"
              >
                {copiedCode === "cargo" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode === "cargo" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="bg-slate-950 p-3 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
              cargo install nuncio-cli nuncio-tui nuncio-mcp nunciod
            </pre>
          </div>

          {/* Desktop Installers */}
          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-lg">
            <span className="text-sm font-bold text-purple-300">Option 3: Pre-Packaged Desktop Installers</span>
            <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
              <li><strong className="text-white">macOS Universal (`.dmg`)</strong>: Supports M1/M2/M3/M4 Apple Silicon &amp; Intel x64.</li>
              <li><strong className="text-white">Windows (`.msi`)</strong>: Native WiX installer with Windows DPAPI Keyring integration.</li>
              <li><strong className="text-white">Linux (`.AppImage`)</strong>: Standalone binary bundle for Ubuntu, Fedora, and Arch.</li>
            </ul>
          </div>

          {/* Daemon Auto-Spawn callout */}
          <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-2 text-xs">
            <span className="text-blue-300 font-bold block flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Hybrid Daemon Architecture (`nunciod`)
            </span>
            <p className="text-slate-300 leading-relaxed">
              When you launch any Nuncio application interface (`nuncio`, `nuncio-tui`, `nuncio-gui`, `nuncio-mcp`), it automatically auto-spawns the background synchronization daemon (`nunciod`) if it is not already running.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "account-setup",
      category: "Getting Started",
      title: "Account Setup & Provider Config",
      icon: <Key className="w-4 h-4 text-purple-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Getting Started • Step 2</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Key className="w-6 h-6 text-purple-400 shrink-0" />
              Connecting Mail &amp; Calendar Providers
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Configure unlimited IMAP, SMTP, JMAP, Google Workspace, and CalDAV accounts.
            </p>
          </div>

          {/* IMAP/SMTP Setup */}
          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-purple-300">1. Standard IMAP &amp; SMTP Configuration</span>
            <pre className="bg-slate-950 p-3 rounded-xl text-purple-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`# Add IMAP/SMTP account via CLI
nuncio account add \\
  --label "Work Mail" \\
  --email "user@company.com" \\
  --imap "mail.company.com:993" \\
  --smtp "mail.company.com:465"`}
            </pre>
          </div>

          {/* Google OAuth PKCE */}
          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">2. Google Workspace &amp; Gmail OAuth 2.0 PKCE (`RFC 7636`)</span>
            <p className="text-slate-300 text-xs leading-relaxed">
              Nuncio implements PKCE loopback authentication (`http://127.0.0.1:9422/oauth/callback`) so you never store raw passwords for Google accounts.
            </p>
            <pre className="bg-slate-950 p-3 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`# Add Google account via CLI
nuncio account add --provider google --email "user@company.com"

# Nuncio opens browser loopback URL for OAuth consent.
# Tokens are stored securely inside native OS Keyring (Keychain/DPAPI).`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "interfaces-guide",
      category: "User Interfaces",
      title: "Vim Keybindings & Shell Reference",
      icon: <Monitor className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">User Interfaces • Reference</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Monitor className="w-6 h-6 text-cyan-400 shrink-0" />
              Four Presentation Shells &amp; Keyboard Motion Table
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              All 4 interfaces (GUI, TUI, CLI, MCP) maintain 100% feature parity synchronized in real-time over daemon IPC.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-bold text-white">Vim Ratatui TUI (`nuncio-tui`) Keybinding Reference:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">j / k</span>
                <span className="text-slate-300">Move selection down / up</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">h / l</span>
                <span className="text-slate-300">Focus sidebar / message pane</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">e / s</span>
                <span className="text-slate-300">Archive / Star message chord</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">d / #</span>
                <span className="text-slate-300">Delete / Move to Trash</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">f / a</span>
                <span className="text-slate-300">Open NSQL rules / Accounts modal</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex justify-between">
                <span className="text-cyan-400">/ or s</span>
                <span className="text-slate-300">Trigger FTS5 trigram search</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "nsql-spec",
      category: "Automation Engine",
      title: "NSQL Language Specification & Grammar",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">NSQL Filter Engine • Language Spec</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400 shrink-0" />
              NSQL Syntax &amp; Compiler Grammar Manual
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              NSQL (Nuncio SQL) parses declarative filter rules into typed Rust AST objects executed inside `nunciod`.
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">Complete NSQL Grammar Form</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`CREATE RULE "VIP Priority Route"
ON ACCOUNT "user@company.com"
PRIORITY 10
WHEN sender LIKE '%@kof22.com%' AND (subject REGEXP '(Urgent|Audit)' OR size_bytes > 5242880)
THEN MOVE TO 'vip-inbox', COPY TO 'Archive', SET read = TRUE, CALL WEBHOOK 'https://api.kof22.com/webhook'
WITH STOP PROCESSING;`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <span className="font-bold text-white block">Supported Field Target Symbols</span>
              <ul className="space-y-1 text-slate-300 font-mono">
                <li>• <code className="text-cyan-300">subject</code>: Email subject header text</li>
                <li>• <code className="text-cyan-300">sender / from</code>: From email address</li>
                <li>• <code className="text-cyan-300">recipient / to</code>: Recipient email address</li>
                <li>• <code className="text-cyan-300">body</code>: Plain text / HTML body</li>
                <li>• <code className="text-cyan-300">size_bytes / size</code>: Attachment &amp; message size</li>
                <li>• <code className="text-cyan-300">header['X-Spam']</code>: Custom MIME headers</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <span className="font-bold text-white block">Supported Action Verbs</span>
              <ul className="space-y-1 text-slate-300 font-mono">
                <li>• <code className="text-emerald-300">MOVE TO &apos;folder&apos;</code>: Move message</li>
                <li>• <code className="text-emerald-300">COPY TO &apos;folder&apos;</code>: Copy message</li>
                <li>• <code className="text-emerald-300">SET read = TRUE</code>: Mark read</li>
                <li>• <code className="text-emerald-300">SET flagged = TRUE</code>: Star / flag</li>
                <li>• <code className="text-emerald-300">FORWARD TO &apos;email&apos;</code>: Forward message</li>
                <li>• <code className="text-emerald-300">CALL WEBHOOK &apos;url&apos;</code>: Send signed HTTP POST</li>
              </ul>
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
              When an NSQL rule triggers a `CALL WEBHOOK 'url'` action, `nunciod` dispatches an HTTP POST payload with cryptographic signatures.
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300">Outbound Webhook JSON Payload Schema</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`{
  "event": "filter_executed",
  "rule_id": "rule_vip_01",
  "rule_name": "VIP Priority Route",
  "message_id": "msg_892317823",
  "account": "user@company.com",
  "sender": "alice@kof22.com",
  "subject": "Urgent Architecture Review",
  "actions_taken": ["MOVE TO 'vip-inbox'", "CALL WEBHOOK 'https://api.kof22.com/webhook'"],
  "matched_at": 1700000000
}`}
            </pre>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2 text-xs">
            <span className="text-purple-300 font-bold block flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-purple-400" />
              SSRF Defense Specifications
            </span>
            <ul className="text-slate-300 space-y-1 list-disc list-inside">
              <li>Pre-flight DNS IP blacklisting blocking `127.0.0.1`, `169.254.169.254`, and private subnets (`10.0.0.0/8`, `192.168.0.0/16`).</li>
              <li>`max_redirects(0)` preventing HTTP 301/302 redirect loops to internal networks.</li>
              <li>`X-Nuncio-Signature` request header containing HMAC-SHA256 signature payload.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mcp-deep-dive",
      category: "AI Integration",
      title: "Native MCP AI Server & Security Enclave",
      icon: <Bot className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">AI Integration • MCP Server</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0" />
              Model Context Protocol (`nuncio-mcp`) Integration
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Connect Claude Desktop, Antigravity, ChatGPT, Cursor, and custom LLMs safely over stdio streams.
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-emerald-300">Claude Desktop Config (`claude_desktop_config.json`)</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`{
  "mcpServers": {
    "nuncio": {
      "command": "nuncio-mcp",
      "args": ["--stdio"],
      "env": {
        "NUNCIO_LOG_LEVEL": "info"
      }
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
      category: "User Experience",
      title: "HTML & Image Rendering Guide",
      icon: <Monitor className="w-4 h-4 text-purple-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">User Experience • Rendering</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Monitor className="w-6 h-6 text-purple-400 shrink-0" />
              Rendering HTML &amp; Inline Images Across Non-GUI Shells
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Rendering HTML emails and images seamlessly in TUI, CLI, and MCP without tracking beacons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-cyan-300">1. Terminal TUI (Ratatui)</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Converts HTML to ANSI via <code className="text-cyan-400 font-mono">html2text</code>. High-res images render inline using <b>Kitty</b>, <b>iTerm2</b>, or <b>Sixel</b> graphics.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-blue-300">2. POSIX CLI</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                <code className="text-blue-400 font-mono">nuncio mail show &lt;id&gt;</code> prints plain text. Use <code className="text-blue-400 font-mono">--html</code> for markdown or <code className="text-blue-400 font-mono">--open</code> for system browser.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold text-emerald-300">3. AI MCP Agents</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Converts HTML to Markdown. Image attachments pass as Base64 multimodal vision blocks to Vision LLMs.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "export-backups",
      category: "Maintenance",
      title: "Universal Data Export & Automated Backups",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">Maintenance • Backups</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400 shrink-0" />
              Universal Data Export &amp; Automated CLI Backups
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Export full accounts, specific folders, or NSQL query results to standard portable open formats without vendor lock-in.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
              <span className="text-sm font-bold text-emerald-300 font-mono">1. Headless CLI Automated Backup Commands</span>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Export full account inbox to standard RFC 4155 MBOX format
nuncio mail export --account "user@company.com" --format mbox --output ~/backups/inbox.mbox

# Export specific folder to compressed EML ZIP archive with manifest.json
nuncio mail export --folder "Archive" --format eml-zip --output ~/backups/archive.zip

# Export NSQL filter query results to line-delimited JSONL for LLM data pipelines
nuncio mail export --query "sender LIKE '%@kof22.com%'" --format jsonl --output ~/backups/kof22_vip.jsonl`}
              </pre>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "worm-audits",
      category: "Security & Compliance",
      title: "WORM Cryptographic Audit Hash Ledger",
      icon: <FileCheck className="w-4 h-4 text-cyan-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Compliance • WORM Audits</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-cyan-400 shrink-0" />
              Write Once Read Many (WORM) Hash-Chain Ledger
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every automated action, rule match, account mutation, and AI tool call writes an immutable entry linked via HMAC-SHA256 block chains.
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-cyan-300">WORM Audit CLI Diagnostics</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800">
{`# Verify cryptographic hash chain across all WORM audit records
nuncio store verify-audit-chain

# List recent WORM audit ledger records via CLI
nuncio audit list --limit 50 --json`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "recovery",
      category: "Maintenance",
      title: "Self-Healing Database Recovery Engine",
      icon: <HelpCircle className="w-4 h-4 text-blue-400" />,
      content: (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4 space-y-1">
            <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-wider">Maintenance • Self-Healing</span>
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-400 shrink-0" />
              Database Corruption Recovery &amp; Stream Salvage
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If SQLite database corruption occurs due to power outage or disk failure, Nuncio automatically isolates damaged files and salvages valid records.
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-sm font-bold text-blue-300">Manual Recovery Diagnostics</span>
            <pre className="bg-slate-950 p-4 rounded-xl text-blue-300 font-mono text-xs overflow-x-auto border border-slate-800">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nuncio Knowledge Base &amp; Technical Manual</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="gradient-text">Documentation Hub</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            In-depth architectural guides, NSQL compiler specs, CLI flag matrices, AI MCP setup, and security whitepapers.
          </p>

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
              Knowledge Base Index ({filteredTopics.length})
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

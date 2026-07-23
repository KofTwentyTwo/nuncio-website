"use client";

import React, { useState } from "react";
import { Terminal, Monitor, Bot, Code, CheckCircle, Copy, Check, Play, RefreshCw, Send, Calendar, ShieldCheck, Sparkles, ChevronRight, Activity, ArrowRight } from "lucide-react";

export function ShellInteractivePreview() {
  const [activeTab, setActiveTab] = useState<"gui" | "tui" | "cli" | "mcp">("gui");
  const [copied, setCopied] = useState(false);

  // TUI State
  const [tuiSelectedIndex, setTuiSelectedIndex] = useState(0);
  const [tuiDryRunRun, setTuiDryRunRun] = useState(false);
  const [tuiMode, setTuiMode] = useState<"rules" | "editor">("rules");

  // CLI Input State
  const [cliInput, setCliInput] = useState("nuncio filter list --json");
  const [cliOutput, setCliOutput] = useState<string>(
`[
  {
    "id": "rule_01VIP",
    "name": "VIP Priority Alerts",
    "priority": 10,
    "enabled": true,
    "nsql_text": "WHEN sender LIKE '%@kof22.com%' AND subject REGEXP '(Urgent|Architecture)' THEN MOVE TO 'vip-inbox', SET flagged = TRUE;"
  },
  {
    "id": "rule_02NEWS",
    "name": "Auto-Archive Newsletters",
    "priority": 50,
    "enabled": true,
    "nsql_text": "WHEN body LIKE '%unsubscribe%' THEN MOVE TO 'Newsletters', SET read = TRUE;"
  }
]`
  );

  // GUI Selected Message
  const [selectedMailId, setSelectedMailId] = useState(1);

  // MCP Tool Selected
  const [selectedMcpTool, setSelectedMcpTool] = useState<"send" | "event" | "status" | "update">("send");

  const tuiRules = [
    { id: "P10", name: "VIP Priority Alerts", target: "james.maes@kof22.com", nsql: "WHEN sender LIKE '%@kof22.com%' AND subject REGEXP '(Urgent|Architecture)' THEN MOVE TO 'vip-inbox', SET flagged = TRUE;" },
    { id: "P50", name: "Auto-Archive Newsletters", target: "*", nsql: "WHEN body LIKE '%unsubscribe%' THEN MOVE TO 'Newsletters', SET read = TRUE;" },
    { id: "P100", name: "Spam Purge Filter", target: "*", nsql: "WHEN header['X-Spam-Score'] > 5 THEN MOVE TO 'Trash', SET read = TRUE;" },
  ];

  const guiEmails = [
    { id: 1, sender: "Alice Vance (Kof22)", subject: "Urgent Architecture Review & VIP Release", folder: "INBOX", date: "12:42 PM", unread: true, snippet: "Please review the Nuncio sovereign mail architecture spec for 100% parity across all 4 interfaces..." },
    { id: 2, sender: "Antigravity Agent", subject: "MCP Calendar Event Confirmation: Architecture Alignment", folder: "INBOX", date: "11:15 AM", unread: false, snippet: "Created event 'Architecture Alignment' for tomorrow at 2:00 PM PST via nuncio_cal_create_event." },
    { id: 3, sender: "GitHub Actions Bot", subject: "Multi-Platform Nightly Build #30031303002 Succeeded", folder: "CI/CD", date: "Yesterday", unread: false, snippet: "macOS Universal .dmg, Windows .msi, and Linux .AppImage artifacts published with SHA256SUMS.txt." },
  ];

  const runCliCommand = (cmd: string) => {
    setCliInput(cmd);
    if (cmd.includes("daemon top") || cmd.includes("status")) {
      setCliOutput(
`{
  "status": "HEALTHY",
  "pid": 84192,
  "memory_rss_mb": 42.4,
  "db_size_mb": 1.04,
  "fts_index_size_mb": 0.52,
  "total_emails": 15000,
  "integrity_status": "OK",
  "active_ipc_clients": 2
}`
      );
    } else if (cmd.includes("update")) {
      setCliOutput(
`{
  "status": "up_to_date",
  "current_version": "1.0.0",
  "latest_version": "1.0.0"
}`
      );
    } else if (cmd.includes("search")) {
      setCliOutput(
`[
  {
    "id": "msg_9901",
    "subject": "Urgent Architecture Review & VIP Release",
    "sender": "alice@kof22.com",
    "received_at": 1700000000,
    "matched_score": 0.98
  }
]`
      );
    } else {
      setCliOutput(
`[
  {
    "id": "rule_01VIP",
    "name": "VIP Priority Alerts",
    "priority": 10,
    "enabled": true,
    "nsql_text": "WHEN sender LIKE '%@kof22.com%' AND subject REGEXP '(Urgent|Architecture)' THEN MOVE TO 'vip-inbox', SET flagged = TRUE;"
  }
]`
      );
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl glass-panel p-2 border border-white/10 overflow-hidden shadow-2xl">
      {/* Interface Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-900/90 rounded-xl border border-white/5">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab("gui")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all min-h-[44px] ${
              activeTab === "gui"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40 border border-purple-400/50"
                : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
            }`}
          >
            <Monitor className="w-4 h-4 text-purple-300" />
            1. Desktop GUI (Featured)
          </button>
          <button
            onClick={() => setActiveTab("tui")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === "tui"
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/30"
                : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
            }`}
          >
            <Code className="w-4 h-4 text-cyan-300" />
            2. Vim Ratatui TUI
          </button>
          <button
            onClick={() => setActiveTab("cli")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === "cli"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
            }`}
          >
            <Terminal className="w-4 h-4 text-blue-300" />
            3. POSIX CLI
          </button>
          <button
            onClick={() => setActiveTab("mcp")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
              activeTab === "mcp"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30"
                : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-300" />
            4. Native MCP AI
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-slate-950 text-[11px] font-mono text-gray-400 border border-slate-800">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Daemon IPC Connected</span>
        </div>
      </div>

      {/* Preview Viewport Container */}
      <div className="p-4 sm:p-6 bg-[#0B101D] font-mono text-xs sm:text-sm min-h-[420px] flex flex-col justify-between rounded-b-xl relative overflow-hidden">

        {/* 1. VIM RATATUI TUI INTERACTIVE SIMULATOR */}
        {activeTab === "tui" && (
          <div className="space-y-3">
            {/* Header Status Bar */}
            <div className="bg-cyan-950/80 border border-cyan-500/30 text-cyan-200 p-2 px-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center font-bold text-[11px] sm:text-xs gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>NUNCIO TUI v1.0.0 │ Account: james.maes@kof22.com │ State: Connected</span>
              </div>
              <span className="text-cyan-400">AppMode::{tuiMode === "rules" ? "FilterRules" : "QueryEditor"}</span>
            </div>

            {/* Split Viewport Panes */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              {/* Left Pane: Rules List */}
              <div className="col-span-12 md:col-span-5 bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-amber-400 font-bold">NSQL Rules (Use J/K)</span>
                  <span className="text-[10px] text-gray-500">{tuiRules.length} Active Rules</span>
                </div>
                <div className="space-y-1">
                  {tuiRules.map((rule, idx) => (
                    <div
                      key={rule.id}
                      onClick={() => setTuiSelectedIndex(idx)}
                      className={`p-2.5 rounded cursor-pointer transition-all ${
                        tuiSelectedIndex === idx
                          ? "bg-cyan-600/30 border border-cyan-500/50 text-cyan-200 font-bold"
                          : "hover:bg-slate-900 text-gray-400"
                      }`}
                    >
                      <div className="flex justify-between">
                        <span>[{rule.id}] {rule.name}</span>
                        <span className="text-[10px] text-gray-500">{rule.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Pane: Selected Rule & Live Dry-Run */}
              <div className="col-span-12 md:col-span-7 bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-cyan-300 font-bold">Inspect Rule: {tuiRules[tuiSelectedIndex].name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Priority {tuiRules[tuiSelectedIndex].id}</span>
                  </div>
                  <div className="text-[11px] text-gray-400">Target Account: <span className="text-amber-300">{tuiRules[tuiSelectedIndex].target}</span></div>
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800 text-emerald-300 leading-relaxed overflow-x-auto text-[11px]">
                    {tuiRules[tuiSelectedIndex].nsql}
                  </div>
                </div>

                {/* Dry-Run Trigger Bar */}
                <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                      Dry-Run Preview [t]:
                    </span>
                    <span className="text-emerald-400 font-bold">MATCHED (14µs)</span>
                  </div>
                  {tuiDryRunRun && (
                    <div className="text-[10px] text-cyan-300 space-y-1 border-t border-slate-800 pt-2">
                      <p>✓ Rule evaluated against sample message in 0.014ms</p>
                      <p>✓ Action sequence: MOVE TO &apos;vip-inbox&apos;, SET flagged = TRUE</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive Key Ribbon Controls */}
            <div className="bg-slate-900 p-2 px-3 rounded-lg flex flex-wrap items-center justify-between text-[11px] text-gray-300 gap-2 border border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 font-bold">Interactive Keys:</span>
                <button
                  onClick={() => setTuiSelectedIndex((prev) => (prev + 1) % tuiRules.length)}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-cyan-300 border border-slate-700"
                >
                  [j/k] Next Rule
                </button>
                <button
                  onClick={() => setTuiMode(tuiMode === "rules" ? "editor" : "rules")}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-purple-300 border border-slate-700"
                >
                  [s] Syntax Mode
                </button>
                <button
                  onClick={() => setTuiDryRunRun(!tuiDryRunRun)}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-yellow-300 border border-slate-700"
                >
                  [t] Run Preview
                </button>
              </div>
              <span className="text-gray-500 text-[10px]">Ratatui 0.28 Terminal Engine</span>
            </div>
          </div>
        )}

        {/* 2. POSIX CLI INTERACTIVE SIMULATOR */}
        {activeTab === "cli" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-2 gap-2 text-xs">
              <span className="text-blue-400 font-bold">~/workspace $ {cliInput}</span>
              <button
                onClick={() => handleCopy(cliInput)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-1.5 rounded hover:bg-slate-800"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy Command
              </button>
            </div>

            {/* Clickable Quick Command Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-400 font-bold">Quick Presets:</span>
              <button
                onClick={() => runCliCommand("nuncio filter list --json")}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800"
              >
                $ nuncio filter list
              </button>
              <button
                onClick={() => runCliCommand("nuncio daemon top")}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-800"
              >
                $ nuncio daemon top
              </button>
              <button
                onClick={() => runCliCommand("nuncio update check")}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-yellow-300 border border-slate-800"
              >
                $ nuncio update check
              </button>
              <button
                onClick={() => runCliCommand("nuncio mail search --query 'urgent'")}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-800"
              >
                $ nuncio mail search
              </button>
            </div>

            {/* Console Output */}
            <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 leading-relaxed overflow-x-auto text-xs min-h-[220px]">
              {cliOutput}
            </pre>
          </div>
        )}

        {/* 3. DESKTOP GUI TAURI V2 SIMULATOR */}
        {activeTab === "gui" && (
          <div className="space-y-3">
            {/* Title Bar */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-purple-300 ml-2">Nuncio Desktop GUI (Tauri v2 Native)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Native Glassmorphism</span>
            </div>

            {/* GUI Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              {/* Mailbox List Pane */}
              <div className="col-span-12 md:col-span-5 bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                <span className="text-gray-400 font-bold block uppercase text-[10px] border-b border-slate-800 pb-1">Inbox Envelopes</span>
                <div className="space-y-1">
                  {guiEmails.map((mail) => (
                    <div
                      key={mail.id}
                      onClick={() => setSelectedMailId(mail.id)}
                      className={`p-2.5 rounded-lg cursor-pointer transition-all ${
                        selectedMailId === mail.id
                          ? "bg-purple-900/40 border border-purple-500/40 text-white"
                          : "hover:bg-slate-900 text-gray-400"
                      }`}
                    >
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-bold text-purple-300 truncate">{mail.sender}</span>
                        <span className="text-[10px] text-gray-500">{mail.date}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-200 truncate mt-0.5">{mail.subject}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Inspector Detail Pane */}
              <div className="col-span-12 md:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                {(() => {
                  const mail = guiEmails.find((m) => m.id === selectedMailId) || guiEmails[0];
                  return (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between items-start border-b border-slate-800 pb-2">
                          <div>
                            <h4 className="text-sm font-bold text-white">{mail.subject}</h4>
                            <p className="text-xs text-purple-300">From: {mail.sender}</p>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Verified DKIM/SPF</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed pt-1">{mail.snippet}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-gray-400">
                        <span>AES-256-GCM Encrypted at Rest</span>
                        <button className="px-3 py-1 rounded gradient-bg text-white font-semibold text-xs flex items-center gap-1">
                          Reply <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* 4. NATIVE MCP LLM AGENT INTERFACE SIMULATOR */}
        {activeTab === "mcp" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Bot className="w-4 h-4" />
                <span>Native MCP Stdio Interface (`nuncio-mcp`)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Claude &amp; Antigravity</span>
            </div>

            {/* Tool Selector Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="text-gray-400 font-bold">MCP Tool Call:</span>
              <button
                onClick={() => setSelectedMcpTool("send")}
                className={`px-3 py-1 rounded border transition-all ${
                  selectedMcpTool === "send"
                    ? "bg-emerald-600 text-white border-emerald-500"
                    : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                }`}
              >
                nuncio_mail_send
              </button>
              <button
                onClick={() => setSelectedMcpTool("event")}
                className={`px-3 py-1 rounded border transition-all ${
                  selectedMcpTool === "event"
                    ? "bg-emerald-600 text-white border-emerald-500"
                    : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                }`}
              >
                nuncio_cal_create_event
              </button>
              <button
                onClick={() => setSelectedMcpTool("status")}
                className={`px-3 py-1 rounded border transition-all ${
                  selectedMcpTool === "status"
                    ? "bg-emerald-600 text-white border-emerald-500"
                    : "bg-slate-900 text-gray-400 border-slate-800 hover:text-white"
                }`}
              >
                nuncio_daemon_status
              </button>
            </div>

            {/* JSON-RPC Request & Response Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold block">JSON-RPC 2.0 Request Payload</span>
                <pre className="text-slate-300 overflow-x-auto text-[11px]">
                  {selectedMcpTool === "send" &&
`{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "nuncio_mail_send",
    "arguments": {
      "to": "alice@kof22.com",
      "subject": "Architecture Sync",
      "body": "All 4 interfaces operating with 100% parity!"
    }
  }
}`}
                  {selectedMcpTool === "event" &&
`{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "nuncio_cal_create_event",
    "arguments": {
      "title": "V1 Release Alignment",
      "start": "2026-07-24T14:00:00Z",
      "end": "2026-07-24T15:00:00Z"
    }
  }
}`}
                  {selectedMcpTool === "status" &&
`{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "nuncio_daemon_status",
    "arguments": {}
  }
}`}
                </pre>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold block">Execution Response</span>
                <pre className="text-emerald-300 overflow-x-auto text-[11px]">
                  {selectedMcpTool === "send" &&
`{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Email successfully dispatched via Lettre SMTP (Port 587 STARTTLS). Message ID: msg_99182"
      }
    ]
  }
}`}
                  {selectedMcpTool === "event" &&
`{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Calendar event 'V1 Release Alignment' scheduled across CalDAV & Google Calendar."
      }
    ]
  }
}`}
                  {selectedMcpTool === "status" &&
`{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Daemon Status: HEALTHY | RSS: 14.6MB | WAL: 512KB | IPC Clients: 3"
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

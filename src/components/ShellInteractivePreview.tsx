"use client";

import React, { useState } from "react";
import { Terminal, Monitor, Bot, Code, CheckCircle, Copy, Check } from "lucide-react";

export function ShellInteractivePreview() {
  const [activeTab, setActiveTab] = useState<"cli" | "tui" | "gui" | "mcp">("tui");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl glass-panel p-2 border border-white/10 overflow-hidden shadow-2xl">
      {/* Shell Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-900/80 rounded-xl border border-white/5">
        <button
          onClick={() => setActiveTab("cli")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            activeTab === "cli"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
          }`}
        >
          <Terminal className="w-4 h-4 text-blue-400" />
          POSIX CLI
        </button>
        <button
          onClick={() => setActiveTab("tui")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            activeTab === "tui"
              ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
          }`}
        >
          <Code className="w-4 h-4 text-cyan-400" />
          Vim Ratatui TUI
        </button>
        <button
          onClick={() => setActiveTab("gui")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            activeTab === "gui"
              ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
          }`}
        >
          <Monitor className="w-4 h-4 text-purple-400" />
          Tauri v2 Desktop GUI
        </button>
        <button
          onClick={() => setActiveTab("mcp")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            activeTab === "mcp"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
          }`}
        >
          <Bot className="w-4 h-4 text-emerald-400" />
          Native MCP LLM Agent
        </button>
      </div>

      {/* Preview Viewport */}
      <div className="p-4 sm:p-6 bg-[#0F172A] font-mono text-xs sm:text-sm min-h-[380px] flex flex-col justify-between rounded-b-xl relative overflow-hidden">
        {/* CLI Tab Content */}
        {activeTab === "cli" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 border-b border-slate-800 pb-2 gap-2">
              <span className="text-blue-400">~/nuncio-workspace $ nuncio filter list --json</span>
              <button
                onClick={() => handleCopy("nuncio filter create --sql \"WHEN sender LIKE '%@vip.com%' THEN MOVE TO 'VIP'\"")}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-1.5 rounded hover:bg-slate-800"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy Command
              </button>
            </div>
            <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
{`[
  {
    "id": "rule_01J38X4902K",
    "name": "VIP Priority Alerts",
    "priority": 10,
    "enabled": true,
    "nsql_text": "WHEN sender LIKE '%@kof22.com%' AND subject REGEXP '(Urgent|Architecture)' THEN MOVE TO 'vip-inbox', SET flagged = TRUE WITH STOP PROCESSING;"
  },
  {
    "id": "rule_02A99B8801C",
    "name": "Auto-Archive Newsletters",
    "priority": 50,
    "enabled": true,
    "nsql_text": "WHEN body LIKE '%unsubscribe%' THEN MOVE TO 'Newsletters', SET read = TRUE WITH STOP PROCESSING;"
  }
]`}
            </pre>
            <div className="pt-2 text-slate-400 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Daemon execution timing: 142µs across 100,000 index entries.</span>
            </div>
          </div>
        )}

        {/* TUI Tab Content */}
        {activeTab === "tui" && (
          <div className="space-y-2">
            <div className="bg-blue-900/50 text-blue-200 p-1.5 px-3 rounded flex flex-col sm:flex-row justify-between font-bold gap-1 text-[11px] sm:text-xs">
              <span> NUNCIO v1.0.0 │ Status: Active (IMAP Syncing) │ Mode: AppMode::FilterRules </span>
              <span>[Acc: james.maes@kof22.com]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
              <div className="col-span-12 md:col-span-5 bg-slate-900 p-3 rounded border border-yellow-500/30 space-y-1">
                <span className="text-yellow-400 font-bold block border-b border-slate-800 pb-1">NSQL Filter Rules (Priority Order [J/K])</span>
                <p className="text-cyan-300 font-bold">&gt; [P10] VIP Priority Alerts</p>
                <p className="text-slate-400">  [P50] Auto-Archive Newsletters</p>
                <p className="text-slate-400">  [P100] Spam Purge Filter</p>
              </div>
              <div className="col-span-12 md:col-span-7 bg-slate-900 p-3 rounded border border-cyan-500/30 space-y-2">
                <span className="text-cyan-400 font-bold block border-b border-slate-800 pb-1">Editor Pane [s: Syntax Toggle, t: Test Preview]</span>
                <p className="text-slate-300">Name: VIP Priority Alerts</p>
                <p className="text-purple-300 font-bold">NSQL Query:</p>
                <p className="text-emerald-300 bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto">
                  WHEN sender LIKE &apos;%@kof22.com%&apos; AND subject REGEXP &apos;(Urgent|Deadline)&apos; THEN MOVE TO &apos;vip-inbox&apos;, SET flagged = TRUE WITH STOP PROCESSING;
                </p>
                <div className="text-xs text-yellow-300 bg-slate-950 p-2 rounded">
                  ── DRY-RUN PREVIEW [t] ── Matched: true (14µs)
                </div>
              </div>
            </div>
            <div className="bg-slate-800 text-slate-300 p-1 px-3 rounded text-[11px] sm:text-xs flex flex-wrap justify-between gap-1">
              <span>[?] Help │ [f] Filter Rules │ [s] Toggle Syntax/Visual │ [t] Dry-Run │ [J/K] Move Priority │ [q] Quit</span>
            </div>
          </div>
        )}

        {/* GUI Tab Content */}
        {activeTab === "gui" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-purple-500/20 pb-3 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <div className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="text-purple-300 font-semibold ml-2">Nuncio Desktop GUI — Glassmorphic React Shell</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Tauri v2 Native</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="col-span-1 bg-slate-900/90 p-3 rounded-xl border border-white/10 space-y-2">
                <span className="text-xs font-bold text-gray-400 block uppercase">Sidebar</span>
                <div className="p-2 rounded bg-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold text-xs">Inbox (12)</div>
                <div className="p-2 rounded hover:bg-slate-800 text-slate-400 text-xs">VIP Folder</div>
                <div className="p-2 rounded hover:bg-slate-800 text-slate-400 text-xs">Filter Rules (NSQL)</div>
              </div>
              <div className="col-span-1 sm:col-span-2 bg-slate-900/90 p-4 rounded-xl border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <span className="text-sm font-bold text-white">Visual Rule Builder &amp; NSQL Syntax Editor</span>
                  <span className="text-xs text-emerald-400 font-semibold">✓ 6-Pass AST Validated</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono overflow-x-auto">
                  <span className="text-purple-400 font-bold">CREATE RULE</span> &quot;VIP Client Routing&quot;<br />
                  <span className="text-blue-400 font-bold">WHEN</span> sender LIKE &apos;%@kof22.com%&apos;<br />
                  <span className="text-blue-400 font-bold">THEN</span> MOVE TO &apos;vip-inbox&apos;, SET flagged = TRUE;
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded bg-blue-600 text-white font-semibold text-xs">Save Rule</span>
                  <span className="px-3 py-1.5 rounded bg-slate-800 text-slate-300 font-semibold text-xs">Test Dry-Run</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MCP Tab Content */}
        {activeTab === "mcp" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-emerald-400 border-b border-slate-800 pb-2 gap-2">
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4" /> Native MCP LLM Agent Stdio Interface (`nuncio-mcp`)
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Model Context Protocol</span>
            </div>
            <pre className="text-slate-300 text-xs leading-relaxed overflow-x-auto bg-slate-950 p-3 rounded-lg border border-slate-800">
{`// Claude Desktop / Antigravity MCP Tool Call Example
{
  "name": "nuncio_filter_create",
  "arguments": {
    "name": "AI Priority Triage",
    "sql": "WHEN subject REGEXP '(?i)(urgent|deadline)' THEN MOVE TO 'Priority', SET flagged = TRUE WITH STOP PROCESSING;",
    "priority": 5
  }
}`}
            </pre>
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs">
              ✓ Execution Response: <span className="font-mono text-white">{`{"status": "created", "rule_id": "rule_01J38X4902K", "ast_valid": true}`}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

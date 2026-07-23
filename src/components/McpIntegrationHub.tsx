"use client";

import React, { useState } from "react";
import { Bot, Copy, Check, Terminal, Cpu } from "lucide-react";

export function McpIntegrationHub() {
  const [copied, setCopied] = useState(false);

  const mcpConfig = `{
  "mcpServers": {
    "nuncio": {
      "command": "nuncio-mcp",
      "args": ["--stdio"],
      "env": {
        "NUNCIO_LOG_LEVEL": "info"
      }
    }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mcpConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mcp" className="py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Bot className="w-3.5 h-3.5" />
            <span>Model Context Protocol (MCP) Server</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Connect AI Agents to <span className="gradient-text">Email &amp; Calendar</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Empower Claude, Google Antigravity, Cursor, and custom LLM agents to read, triage, draft, schedule, and filter email and events safely using native Model Context Protocol tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-6 rounded-2xl border border-white/10 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Claude Desktop / Antigravity Config (`claude_desktop_config.json`)</h3>
                <span className="text-xs text-gray-400 font-mono">Executable: nuncio-mcp --stdio</span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 transition-all border border-white/10"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied Config!" : "Copy MCP JSON"}
            </button>
          </div>

          <pre className="bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 leading-relaxed overflow-x-auto">
            {mcpConfig}
          </pre>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-emerald-400 font-bold block font-mono">nuncio_mail_send</span>
              <span className="text-gray-400">Draft or send emails with Human-in-the-Loop authorization.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-cyan-400 font-bold block font-mono">nuncio_filter_create</span>
              <span className="text-gray-400">Create &amp; test NSQL automation rules programmatically.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-purple-400 font-bold block font-mono">nuncio_cal_create_event</span>
              <span className="text-gray-400">Schedule CalDAV meetings with conflict detection.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

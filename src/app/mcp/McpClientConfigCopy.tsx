"use client";

import React, { useState } from "react";
import { Terminal, Check, Copy } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export function McpClientConfigCopy() {
  const [copied, setCopied] = useState(false);

  const mcpConfig = `{
  "mcpServers": {
    "nuncio": {
      "command": "nuncio-mcp",
      "args": ["--stdio"]
    }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mcpConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Target Config Shape (`claude_desktop_config.json`)</h3>
            <span className="text-xs text-slate-400 font-mono">No `nuncio-mcp` binary exists to run this yet</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge variant="planned" label="Preview — won't connect" />
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 transition-all border border-white/10"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied Config!" : "Copy MCP JSON"}
          </button>
        </div>
      </div>

      <pre className="bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 leading-relaxed overflow-x-auto">
        {mcpConfig}
      </pre>
    </div>
  );
}

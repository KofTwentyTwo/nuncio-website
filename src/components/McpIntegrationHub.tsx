"use client";

import React, { useState } from "react";
import { Bot, Copy, Check, Terminal, ShieldCheck, ArrowRight, Database, Lock, Zap, FileCheck, Layers } from "lucide-react";
import Link from "next/link";

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

  const mcpAdvantages = [
    {
      title: "1. Unified Multi-Account Aggregation Hub",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: "Aggregate all your email accounts—unlimited IMAP, JMAP, Gmail, Google Workspace, iCloud, and custom domain accounts—into a single local SQLite storage vault.",
    },
    {
      title: "2. Controlled Gateway (Zero Uncontrolled Access)",
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      desc: "Local LLMs and AI agents NEVER get raw passwords or direct, uncontrolled access to your Gmail or IMAP accounts. All AI actions pass strictly through Nuncio's security enclave with McpAgentPolicy RBAC and automatic PII redaction.",
    },
    {
      title: "3. WORM Audits & NSQL Filtering",
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      desc: "Every single AI agent tool call, email read, draft generation, and send action is logged in an immutable Write Once Read Many (WORM) audit ledger sealed with HMAC-SHA256 hash chains.",
    },
    {
      title: "4. Microsecond Local Speed",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Instant local FTS5 trigram search (<10ms across 100,000+ messages). Local LLMs get sub-millisecond context retrieval without network latency or cloud API fees.",
    },
  ];

  return (
    <section id="mcp" className="py-20 border-t border-white/10 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-tight shadow-lg">
            <Bot className="w-3.5 h-3.5" />
            <span>Native Model Context Protocol (MCP) Server</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sane &amp; Controlled <span className="gradient-text">AI Agent Architecture</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tie all your accounts together in a single place—and control exactly how local LLMs access your data via security policies, WORM audits, and microsecond SQLite speed.
          </p>
        </div>

        {/* 4 Core Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mcpAdvantages.map((adv, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-3 hover:border-emerald-500/40 transition-colors">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 w-fit shrink-0">
                  {adv.icon}
                </div>
                <h3 className="text-base font-bold text-white min-w-0 leading-tight">{adv.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed min-h-[4.5rem]">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MCP Stdio Configuration Card */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-white whitespace-nowrap truncate">Claude Desktop / Antigravity Config (`claude_desktop_config.json`)</h3>
                <span className="text-xs text-slate-400 font-mono">Executable: nuncio-mcp --stdio</span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 transition-all border border-white/10 shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied Config!" : "Copy MCP JSON"}
            </button>
          </div>

          <pre className="bg-slate-950 p-4 sm:p-5 rounded-2xl font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 leading-relaxed overflow-x-auto">
            {mcpConfig}
          </pre>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1.5">
              <span className="text-emerald-400 font-bold block font-mono">nuncio_mail_send</span>
              <span className="text-slate-300">Draft or send emails with Human-in-the-Loop prompt authorization.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1.5">
              <span className="text-cyan-400 font-bold block font-mono">nuncio_export_data</span>
              <span className="text-slate-300">Export MBOX, EML ZIP, or JSON data streams programmatically.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1.5">
              <span className="text-purple-400 font-bold block font-mono">nuncio_audit_verify</span>
              <span className="text-slate-300">Verify HMAC-SHA256 WORM cryptographic audit chain integrity.</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Protected by McpAgentPolicy RBAC, folder whitelists &amp; automatic SSN/credit card redaction.</span>
            </div>

            <Link
              href="/mcp"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Explore Standalone MCP Hub Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

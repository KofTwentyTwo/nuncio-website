"use client";

import React, { useState } from "react";
import { Bot, Copy, Check, Terminal, ShieldCheck, ArrowRight, Lock, FileCheck, Layers } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

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
      title: "1. A Single Local Vault for Every Account",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: "The design goal: aggregate every account you connect — IMAP today, JMAP once it lands — into one local SQLite vault an agent can query, instead of handing separate credentials to separate tools.",
    },
    {
      title: "2. Controlled Gateway, Not Direct Access",
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      desc: "Local LLMs and AI agents are meant to never see raw passwords or get direct, uncontrolled access to your accounts. Every AI action would pass through Nuncio's security enclave under an RBAC policy with automatic PII redaction.",
    },
    {
      title: "3. WORM Audits for Every AI Action",
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      desc: "The plan is that every AI agent tool call, read, draft, and send lands in the same immutable, HMAC-SHA256 hash-chained audit ledger that already exists for other engine actions today.",
    },
  ];

  return (
    <section id="mcp" className="py-20 border-t border-white/10 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-tight shadow-lg">
            <Bot className="w-3.5 h-3.5" />
            <span>Planned: Model Context Protocol (MCP) Client</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sane &amp; Controlled <span className="gradient-text">AI Agent Architecture</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A governed MCP bridge is on the roadmap as a separate client over the same gRPC contract — not a
            direct line from your inbox to an LLM. It doesn&apos;t exist yet; here&apos;s the design.
          </p>
          <StatusBadge variant="planned" label="Planned client — not built yet" />
        </div>

        {/* Core Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* MCP Stdio Configuration Preview */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-white whitespace-nowrap truncate">Target config shape (not usable yet)</h3>
                <span className="text-xs text-slate-400 font-mono">nuncio-mcp doesn&apos;t exist as a binary today</span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 transition-all border border-white/10 shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied preview" : "Copy preview JSON"}
            </button>
          </div>

          <pre className="bg-slate-950 p-4 sm:p-5 rounded-2xl font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800 leading-relaxed overflow-x-auto">
            {mcpConfig}
          </pre>

          <p className="text-xs text-slate-400">
            This is what a client config would look like once the MCP bridge ships — pasting it into an MCP
            client today will not connect to anything.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Designed to run under an RBAC policy, folder whitelists &amp; automatic PII redaction — none of which exist yet.</span>
            </div>

            <Link
              href="/mcp"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Explore the MCP vision page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

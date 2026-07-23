import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Bot, Shield, Terminal, Lock, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Native Model Context Protocol (MCP) Setup & Security — Nuncio Docs",
  description: "Complete guide for integrating Claude Desktop, Antigravity, and Cursor with Nuncio MCP Server and McpAgentPolicy RBAC security.",
};

export default function McpDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="mcp">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">AI Integration • MCP Server</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Bot className="w-8 h-8 text-emerald-400 shrink-0" />
                Native Model Context Protocol (`nuncio-mcp`) Integration
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect Claude Desktop, Antigravity, ChatGPT, Cursor, and custom LLMs safely to your local email and calendar database over stdio.
              </p>
            </div>

            {/* Claude Desktop Config */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                1. Claude Desktop Configuration (`claude_desktop_config.json`)
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
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

            {/* Security Enclave Table */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                2. McpAgentPolicy AI Security Gateway Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">Multi-Account Aggregation Hub</span>
                  <p className="text-slate-300">Unify 10+ IMAP, Google Workspace, and JMAP accounts into a single stdio endpoint.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">Zero Direct Account Credentials</span>
                  <p className="text-slate-300">LLMs interact exclusively through Nuncio tools; they never touch passwords or OAuth tokens.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">WORM Audit Hash Chains</span>
                  <p className="text-slate-300">Every single MCP tool invocation is logged in an immutable HMAC-SHA256 hash-chain ledger.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">Microsecond Local Speed</span>
                  <p className="text-slate-300">Sub-10ms local SQLite FTS5 search context retrieval with zero API cloud fee latency.</p>
                </div>
              </div>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

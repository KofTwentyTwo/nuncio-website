import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Bot, Shield, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Model Context Protocol (MCP) — Planned — Nuncio Docs",
  description: "The design for a governed MCP client that lets AI agents work with your mail through capability policies and an audit trail. Not built yet — see the full design on the MCP page.",
};

export default function McpDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="mcp">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">AI Integration • Planned</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Bot className="w-8 h-8 text-emerald-400 shrink-0" />
                Model Context Protocol (MCP) Client
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                An MCP client is a planned, separate thin client over Nuncio&apos;s gRPC contract — the same one the
                CLI already uses. It does not exist yet. Nothing on this page is runnable today.
              </p>
              <StatusBadge variant="planned" label="Nothing on this page is usable yet" />
            </div>

            {/* Design principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-purple-400 text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  A Gateway, Not Direct Access
                </span>
                <p className="text-slate-300 leading-relaxed">
                  AI agents would never receive raw account credentials. Every action would pass through a policy
                  gateway that decides what a given agent is allowed to touch.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-cyan-400 text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Every Action, Audited
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Agent tool calls would land in the same hash-chained WORM audit ledger the engine already uses for
                  account and rule mutations today.
                </p>
              </div>
            </div>

            {/* Target config shape, clearly marked as non-functional */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                Target Configuration Shape
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                This is what an MCP client config would look like once it exists. It will not connect to anything
                today — there is no <code className="text-emerald-300 font-mono">nuncio-mcp</code> binary to run.
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
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

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2 text-xs">
              <p className="text-slate-300 leading-relaxed">
                For the full design — the planned tool surface, the capability-policy model, and why a gateway instead
                of direct access — see the{" "}
                <Link href="/mcp" className="text-emerald-300 hover:underline">
                  MCP page
                </Link>
                .
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

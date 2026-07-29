import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bot, ShieldCheck, Lock, Key, GitBranch, MapPin, Sparkles, Layers, FileCheck } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import { McpClientConfigCopy } from "./McpClientConfigCopy";

export const metadata = {
  title: "Model Context Protocol (MCP) — Planned AI Client for Nuncio",
  description: "Nuncio's Model Context Protocol client is a planned, governed way for AI agents to work with your mail through a policy gateway — not a shipped product yet. See the design and what's on the roadmap.",
};

export default function McpPage() {
  const coreAdvantages = [
    {
      title: "1. One Local Vault, Not Scattered Credentials",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: "The plan: aggregate every account you connect into one local SQLite vault an agent can query, instead of handing separate credentials to separate AI tools.",
    },
    {
      title: "2. A Gateway, Not Direct Access",
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      desc: "Local LLMs and AI agents are designed to never receive raw passwords or direct, uncontrolled access to your provider accounts. Every action would pass through Nuncio's security enclave under an RBAC policy.",
    },
    {
      title: "3. Every Action, Audited",
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      desc: "The goal is that every agent tool call, read, draft, and send lands in the same immutable, hash-chained WORM audit ledger that already exists for other engine actions today.",
    },
  ];

  const tools = [
    { name: "nuncio_mail_list", category: "Email", desc: "List messages with folder, account, and unread filters." },
    { name: "nuncio_mail_send", category: "Email", desc: "Draft or send email with human-in-the-loop confirmation." },
    { name: "nuncio_mail_search", category: "Email", desc: "Full-text search across synced mail." },
    { name: "nuncio_export_data", category: "Data Export", desc: "Export MBOX, EML, or JSON data programmatically." },
    { name: "nuncio_audit_list", category: "WORM Audits", desc: "Query the immutable audit log." },
    { name: "nuncio_audit_verify", category: "WORM Audits", desc: "Verify the HMAC-SHA256 hash-chain ledger." },
    { name: "nuncio_cal_list_events", category: "Calendar", desc: "Query calendar events, once calendar sync exists." },
    { name: "nuncio_cal_create_event", category: "Calendar", desc: "Create calendar events with conflict detection." },
    { name: "nuncio_filter_list", category: "NSQL Filters", desc: "Inspect NSQL filter rules and execution logs." },
    { name: "nuncio_filter_create", category: "NSQL Filters", desc: "Compile, validate, and save a new NSQL rule." },
    { name: "nuncio_filter_test", category: "NSQL Filters", desc: "Dry-run test an NSQL rule against a sample message." },
    { name: "nuncio_account_list", category: "Accounts", desc: "Inspect connected accounts and protocol status." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-tight shadow-lg">
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>Planned: Model Context Protocol (MCP) Client</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sane &amp; Controlled <span className="gradient-text">AI Agent Access</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            An MCP client is a planned, separate thin client over Nuncio&apos;s gRPC contract — the same one the
            CLI uses today. It does not exist yet. This page describes the design: aggregate your accounts,
            control exactly how agents touch them, and audit everything.
          </p>

          <StatusBadge variant="planned" label="Nothing on this page is usable yet" />
        </div>

        {/* Core Advantages Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Why a Gateway, Not Direct Access</h2>
            <p className="text-slate-400 text-sm">The design principle: never grant an AI agent uncontrolled credentials to your real accounts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreAdvantages.map((adv, idx) => (
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
        </div>

        {/* What is MCP Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              What is the Model Context Protocol (MCP)?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The <strong>Model Context Protocol (MCP)</strong> is an open standard from Anthropic that lets AI
              applications safely read data and invoke actions on local services over stdio JSON-RPC. Nuncio plans
              to expose a governed MCP surface once its client architecture is built — think of the examples below
              as the target experience, not something you can do today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block">1. Natural Language Triage</span>
                <p className="text-slate-400 text-xs leading-relaxed">Eventually: <em>&quot;Find urgent emails from today across all my accounts and summarize them.&quot;</em></p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-cyan-400 font-bold text-sm block">2. Autonomous Scheduling</span>
                <p className="text-slate-400 text-xs leading-relaxed">Eventually: <em>&quot;Schedule a sync tomorrow afternoon and create the event.&quot;</em> Depends on CalDAV, which is also planned.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-purple-400 font-bold text-sm block">3. Automated NSQL Rules</span>
                <p className="text-slate-400 text-xs leading-relaxed">Eventually: <em>&quot;Create a rule to auto-archive newsletters.&quot;</em> Rule creation works today via the CLI; wiring it to an agent is future work.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Preview Section */}
        <div id="config" className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Target Configuration Shape</h2>
            <p className="text-slate-400 text-sm">This is what an MCP client config would look like once it exists — it will not connect to anything today.</p>
          </div>

          <McpClientConfigCopy />
        </div>

        {/* Security Enclave Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Planned Security Enclave</h2>
                <p className="text-xs text-slate-400 font-medium">You would control exactly what data and permissions any connected AI agent gets. None of this is built yet.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-base font-bold text-white flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  Capability Flags &amp; Permissions
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Toggle fine-grained capabilities per agent: <code className="text-emerald-300 font-mono">read_mail</code>, <code className="text-emerald-300 font-mono">send_mail</code>, <code className="text-emerald-300 font-mono">read_calendar</code>, <code className="text-emerald-300 font-mono">write_calendar</code>, and <code className="text-emerald-300 font-mono">manage_filters</code>. Unauthorized operations would be rejected.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Sensitive Data Redaction
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Before message text reaches an LLM context window, sensitive identifiers would be masked automatically. This redaction pipeline does not exist yet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Tool Matrix */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Planned MCP Tool Surface</h2>
            <p className="text-slate-400 text-sm">The tool names an eventual MCP client would expose — none of these are callable by an AI agent today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((t, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-emerald-400">{t.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-semibold border border-white/10">{t.category}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            Follow the build on GitHub
          </a>
          <a
            href={ROADMAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            See the roadmap
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

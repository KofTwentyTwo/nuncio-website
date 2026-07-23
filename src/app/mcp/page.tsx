import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bot, Terminal, ShieldCheck, CheckCircle2, Lock, Key, Copy, ArrowRight, Sparkles, Code, Check, Layers, FileCheck, Zap } from "lucide-react";
import Link from "next/link";
import { McpClientConfigCopy } from "./McpClientConfigCopy";

export const metadata = {
  title: "AI Model Context Protocol (MCP) Integration — Nuncio Sovereign AI Hub",
  description: "Learn how Nuncio aggregates all email accounts into a sovereign local hub and securely connects AI agents (Claude, Antigravity, Cursor) via controlled policies, WORM audits, and microsecond SQLite speed.",
};

export default function McpPage() {
  const coreAdvantages = [
    {
      title: "1. Multi-Account Aggregation Hub",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: "Tie ALL your email accounts—unlimited IMAP, JMAP, Gmail, Google Workspace, iCloud, and custom domain accounts—together into a single local SQLite data vault on your disk.",
    },
    {
      title: "2. Controlled Security Gateway (Zero Direct Access)",
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      desc: "Local LLMs and AI agents NEVER get raw passwords or direct uncontrolled access to your email accounts or Gmail servers. All access passes strictly through Nuncio's security enclave with McpAgentPolicy RBAC and automatic PII redaction.",
    },
    {
      title: "3. WORM Audits & NSQL Controls",
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      desc: "Every single AI agent tool call, read query, draft generation, and send action is recorded in an immutable Write Once Read Many (WORM) audit ledger sealed with HMAC-SHA256 hash chains.",
    },
    {
      title: "4. Microsecond Local Speed",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Instant local FTS5 trigram search (<10ms across 100,000+ messages) so local LLMs get sub-millisecond context retrieval without battery drain or cloud network API fees.",
    },
  ];

  const tools = [
    { name: "nuncio_mail_list", category: "Email", desc: "List email messages with optional folder, account, and unread filters." },
    { name: "nuncio_mail_send", category: "Email", desc: "Dispatch outgoing emails with Human-in-the-Loop prompt confirmation." },
    { name: "nuncio_mail_search", category: "Email", desc: "Instant full-text FTS5 search across 100,000+ messages in under 10ms." },
    { name: "nuncio_export_data", category: "Data Export", desc: "Export MBOX, EML ZIP, or JSON data streams programmatically." },
    { name: "nuncio_audit_list", category: "WORM Audits", desc: "Query immutable Write Once Read Many (WORM) audit log records." },
    { name: "nuncio_audit_verify", category: "WORM Audits", desc: "Verify HMAC-SHA256 cryptographic hash-chain ledger integrity." },
    { name: "nuncio_cal_list_events", category: "Calendar", desc: "Query calendar events, schedules, and location details." },
    { name: "nuncio_cal_create_event", category: "Calendar", desc: "Create calendar events with start/end time conflict detection." },
    { name: "nuncio_filter_list", category: "NSQL Filters", desc: "Inspect active server-side NSQL filter rules and execution logs." },
    { name: "nuncio_filter_create", category: "NSQL Filters", desc: "Programmatically compile, validate, and save new NSQL filter rules." },
    { name: "nuncio_filter_test", category: "NSQL Filters", desc: "Dry-run test NSQL filter statements against sample messages." },
    { name: "nuncio_account_list", category: "Accounts", desc: "Inspect connected email accounts, server hostnames, and protocol status." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-tight shadow-lg">
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sovereign Native Model Context Protocol (MCP) Server</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sane &amp; Controlled <span className="gradient-text">AI Agent Access</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Tie ALL your email accounts together in a single place—unlimited IMAP, JMAP, and Gmail accounts—and strictly control how local LLMs access your data via security policies, WORM audits, and microsecond SQLite speed.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#config"
              className="apple-button-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              Copy MCP Config JSON
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Core Advantages Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Why Nuncio MCP is the Sovereign Standard for AI</h2>
            <p className="text-slate-400 text-sm">Never grant uncontrolled direct credentials or API access to raw email providers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              The <strong>Model Context Protocol (MCP)</strong> is an open standard created by Anthropic that allows AI applications (such as Claude Desktop, Antigravity, Cursor, or local LLM CLI agents) to safely read data and invoke actions on local services over standard JSON-RPC 2.0 stdio streams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block">1. Natural Language Triage</span>
                <p className="text-slate-400 text-xs leading-relaxed">Ask your AI: <em>&quot;Find all urgent emails from Alice received today across all accounts and summarize them.&quot;</em></p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-cyan-400 font-bold text-sm block">2. Autonomous Scheduling</span>
                <p className="text-slate-400 text-xs leading-relaxed">Instruct AI: <em>&quot;Schedule a 30-minute sync with Bob tomorrow afternoon and create the event.&quot;</em></p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-purple-400 font-bold text-sm block">3. Automated NSQL Rules</span>
                <p className="text-slate-400 text-xs leading-relaxed">Tell AI: <em>&quot;Create an NSQL rule to auto-archive newsletters with unsubscribe links.&quot;</em></p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div id="config" className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Connecting Claude Desktop &amp; Antigravity</h2>
            <p className="text-slate-400 text-sm">Add the following JSON snippet to your client configuration file.</p>
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
                <h2 className="text-2xl font-bold text-white">McpAgentPolicy: Granular Security Enclave</h2>
                <p className="text-xs text-slate-400 font-medium">You control exactly what data &amp; permissions any connected AI agent receives.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-base font-bold text-white flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  Capability Flags &amp; Permissions
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Toggle fine-grained capabilities per agent: <code className="text-emerald-300 font-mono">read_mail</code>, <code className="text-emerald-300 font-mono">send_mail</code>, <code className="text-emerald-300 font-mono">read_calendar</code>, <code className="text-emerald-300 font-mono">write_calendar</code>, and <code className="text-emerald-300 font-mono">manage_filters</code>. Unauthorized operations return a 403 Forbidden error.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Automatic Sensitive Data Redaction
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Before email text payloads reach the LLM context window, Nuncio&apos;s <code className="text-purple-300 font-mono">sanitize_content()</code> engine automatically redacts Credit Cards and US Social Security Numbers (<code className="text-purple-300 font-mono">[REDACTED-SSN]</code>).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Tool Matrix */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Complete MCP Tool Matrix</h2>
            <p className="text-slate-400 text-sm">Every tool available to connected AI agents over stdio streams.</p>
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
        <div className="max-w-4xl mx-auto px-4 text-center pt-6">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Nuncio v1.0.0
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

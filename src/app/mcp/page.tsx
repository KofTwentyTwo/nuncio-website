import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bot, Terminal, ShieldCheck, CheckCircle2, Lock, Key, Copy, ArrowRight, Sparkles, Code, Check } from "lucide-react";
import Link from "next/link";
import { McpClientConfigCopy } from "./McpClientConfigCopy";

export const metadata = {
  title: "AI Model Context Protocol (MCP) Integration — Nuncio AI Agent Hub",
  description: "Learn how Nuncio connects AI agents (Claude Desktop, Antigravity, ChatGPT, Cursor) directly to email and calendar via native MCP tools, backed by McpAgentPolicy RBAC and sensitive data redaction.",
};

export default function McpPage() {
  const tools = [
    { name: "nuncio_mail_list", category: "Email", desc: "List email messages with optional folder, account, and unread filters." },
    { name: "nuncio_mail_send", category: "Email", desc: "Dispatch outgoing emails with Human-in-the-Loop prompt confirmation." },
    { name: "nuncio_mail_search", category: "Email", desc: "Instant full-text FTS5 search across 100,000+ messages in under 10ms." },
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
            <span>Native Model Context Protocol (MCP) Server</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            AI Agents Connected to<br />
            <span className="gradient-text">Email &amp; Calendar.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Connect Claude Desktop, Google Antigravity, ChatGPT, Cursor, and custom LLM agents directly to your inbox and calendar via native Model Context Protocol (MCP) tools — with total user privacy and RBAC security policies.
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

        {/* What is MCP Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              What is the Model Context Protocol (MCP)?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The <strong>Model Context Protocol (MCP)</strong> is an open standard created by Anthropic that allows AI applications (such as Claude Desktop, Cursor, or AI CLI agents) to safely read data and invoke actions on local services over standard JSON-RPC 2.0 stdio streams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block">1. Natural Language Triage</span>
                <p className="text-slate-400 text-xs leading-relaxed">Ask your AI: <em>"Find all urgent emails from Alice received today and summarize them."</em></p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-cyan-400 font-bold text-sm block">2. Autonomous Scheduling</span>
                <p className="text-slate-400 text-xs leading-relaxed">Instruct AI: <em>"Schedule a 30-minute sync with Bob tomorrow afternoon and create the event."</em></p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-purple-400 font-bold text-sm block">3. Automated Filtering</span>
                <p className="text-slate-400 text-xs leading-relaxed">Tell AI: <em>"Create an NSQL rule to auto-archive newsletters with unsubscribe links."</em></p>
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
                  Before email text payloads reach the LLM context window, Nuncio's <code className="text-purple-300 font-mono">sanitize_content()</code> engine automatically redacts Credit Cards and US Social Security Numbers (<code className="text-purple-300 font-mono">[REDACTED-SSN]</code>).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Tool Matrix */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Complete MCP Tool Matrix</h2>
            <p className="text-slate-400 text-sm">Every tool available to connected AI agents over stdio.</p>
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

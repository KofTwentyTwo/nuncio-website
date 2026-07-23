import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Code, Sparkles, Terminal, Database, FileCheck, Lock, CheckCircle2, ArrowRight, Zap, Cpu, Key, Activity, Monitor, Bot } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why Nuncio Exists — The Sovereign Mail & Calendar Manifesto",
  description: "Learn why Nuncio exists: email rebuilt for today — sane AI access, first-class UI/UX across GUI, TUI, CLI & MCP, microsecond speed, local control, zero-trust security, and WORM cryptographic audits.",
};

export default function AboutPage() {
  const manifestoPillars = [
    {
      title: "1. Sane & Controlled AI / LLM Access",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      desc: "AI co-pilots should empower you, not exfiltrate your life. Nuncio's McpAgentPolicy enforces granular RBAC capability flags (read_mail, send_mail, read_calendar), folder access boundaries, and automatic SSN/credit card redaction before any payload touches an LLM context window.",
    },
    {
      title: "2. First-Class UI/UX in Every Space",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      desc: "No second-class interfaces. Enjoy equal polish across native macOS glassmorphism, Windows, Linux, Vim Ratatui Terminal TUI, POSIX scriptable CLI, and native MCP AI agent integration with 100% feature parity.",
    },
    {
      title: "3. Uncompromising Speed & Performance",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      desc: "Engineered in native Rust over single-writer SQLite WAL storage. Search 100,000+ emails in under 10 milliseconds, execute NSQL rules in microsecond time, and run with zero battery drain.",
    },
    {
      title: "4. Sovereign Control & Zero Closed Formats",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      desc: "No cloud lock-in, no proprietary sync servers, no closed formats. Your emails, accounts, rules, and calendars stay in standard local SQLite files on your disk. You own your data 100%.",
    },
    {
      title: "5. Zero-Trust Security & Encryption",
      icon: <Lock className="w-6 h-6 text-red-400" />,
      desc: "Column-level AES-256-GCM data-at-rest encryption (PayloadCipher), age X25519 attachment ciphers, ZeroizeOnDrop memory page locking, and HTML email sandboxing with tracking pixel neutralization.",
    },
    {
      title: "6. WORM Cryptographic Audits & Immutability",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      desc: "Every automated rule match, webhook dispatch, account mutation, and AI MCP tool call is recorded in an immutable Write Once Read Many (WORM) audit ledger sealed with HMAC-SHA256 hash chains.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Nuncio Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Why Nuncio <span className="gradient-text">Exists.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Email rebuilt for today — private, fast, secure, and AI-integrated without giving up control of your data, your privacy, or your flow.
          </p>
        </div>

        {/* Manifesto Core Explanation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Breaking Away From Walled Gardens</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                For over a decade, personal and enterprise communication has been fractured across paid cloud subscriptions, closed proprietary formats, locked-away data silos, and compromised user experiences depending on whether you're on a Mac, Windows PC, Linux terminal, or mobile device.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Nuncio was built to eliminate those trade-offs. It gives developers, power users, and AI agents total speed, complete sovereign data ownership, zero-trust encryption, and sane AI integration.
              </p>
            </div>

            {/* 6 Core Manifesto Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {manifestoPillars.map((p, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10">
                      {p.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-4">
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

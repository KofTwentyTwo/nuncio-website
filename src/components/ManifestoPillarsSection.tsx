"use client";

import React from "react";
import { Bot, Monitor, Zap, Database, Lock, FileCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import type { StatusVariant } from "@/lib/status";

export function ManifestoPillarsSection() {
  const manifestoPillars: Array<{
    title: string;
    icon: React.ReactNode;
    desc: string;
    status?: StatusVariant;
  }> = [
    {
      title: "1. Sane & Controlled AI Access",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      desc: "AI co-pilots should empower you, not exfiltrate your life. The plan: a policy gateway that enforces granular RBAC capability flags, folder boundaries, and automatic redaction of sensitive data before any payload touches an LLM.",
      status: "planned",
    },
    {
      title: "2. First-Class UI/UX in Every Space",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      desc: "No second-class interfaces, by design. A single frozen gRPC contract is meant to guarantee equal polish and feature parity across a native desktop app, a Vim-style terminal TUI, a scriptable POSIX CLI, and an MCP AI agent bridge — not left to each client's discipline.",
      status: "planned",
    },
    {
      title: "3. Uncompromising Speed & Performance",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      desc: "Engineered in native Rust over single-writer SQLite WAL storage, so search, filtering, and sync stay fast as your mailbox grows. We'll publish real, methodology-backed benchmarks as the engine matures — not invented numbers.",
    },
    {
      title: "4. Sovereign Control & Zero Closed Formats",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      desc: "No cloud lock-in, no proprietary sync servers, no closed formats. Your emails, accounts, rules, and calendars live in standard local SQLite files on your disk, with MBOX/EML/JSON export already working today. You own your data.",
    },
    {
      title: "5. Zero-Trust Security & Encryption",
      icon: <Lock className="w-6 h-6 text-red-400" />,
      desc: "Column-level data-at-rest encryption, hardened attachment ciphers, and HTML email sandboxing with tracking-pixel neutralization are on the security hardening milestone — real engineering targets, not shipped yet.",
      status: "planned",
    },
    {
      title: "6. WORM Cryptographic Audits",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      desc: "Every automated rule match, account mutation, and tool call is recorded in an append-only, hash-chained Write Once Read Many (WORM) audit ledger — working today, not a future promise.",
      status: "available-now",
    },
  ];

  return (
    <section className="py-20 bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Built on Sovereign Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Email Rebuilt for Today.<br />
            <span className="gradient-text">Private, Fast &amp; Secure.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Break away from paid cloud subscriptions, closed proprietary formats, locked-away data, and fragmented user experiences across platforms.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manifestoPillars.map((p, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4 hover:border-blue-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 w-full min-w-0">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 shrink-0">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-white min-w-0 flex-1 leading-tight">{p.title}</h3>
                  {p.status && <StatusBadge variant={p.status} className="shrink-0" />}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed min-h-[4rem]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Read Full Manifesto Link */}
        <div className="text-center pt-2">
          <Link
            href="/about"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Read The Full Nuncio Story &amp; Vision</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

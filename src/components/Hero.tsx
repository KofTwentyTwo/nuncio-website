"use client";

import React, { useState } from "react";
import { ShellInteractivePreview } from "./ShellInteractivePreview";
import { Download, Terminal, ShieldCheck, Zap, Copy, Check, Sparkles } from "lucide-react";

export function Hero() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const installCmd = "curl -fsSL https://nuncio.mx/install.sh | sh";

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(installCmd);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nuncio v1.0 — Free Open-Source Mail &amp; Calendar for Power Users</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          One Email &amp; Calendar App. <br className="hidden sm:inline" />
          <span className="gradient-text">Four Great Ways to Work.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 font-normal leading-relaxed">
          Take total control of your inbox and schedule. Whether you live in the terminal, keyboard-drive your email, prefer a sleek desktop app, or delegate to local AI agents — Nuncio gives you <strong className="text-white font-semibold">100% feature parity across four great interfaces</strong>.
        </p>

        {/* Quick One-Line Install Terminal String */}
        <div className="max-w-xl mx-auto bg-slate-900/90 border border-white/10 p-3 px-5 rounded-2xl flex items-center justify-between font-mono text-sm shadow-xl hover:border-blue-500/40 transition-colors">
          <div className="flex items-center gap-3 text-gray-300 overflow-x-auto">
            <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-blue-400 font-bold">$</span>
            <span className="select-all">{installCmd}</span>
          </div>
          <button
            onClick={handleCopyInstall}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all shrink-0 ml-2"
            title="Copy Install Command"
          >
            {copiedInstall ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#downloads"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl gradient-bg text-base font-bold text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Nuncio v1.0
          </a>
          <a
            href="#nsql"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-white/15 text-base font-bold text-gray-200 hover:scale-105 transition-all"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            Try NSQL Engine Demo
          </a>
        </div>

        {/* Feature Highlights Bar */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="glass-card p-4 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase">Zero Mocks</h4>
              <p className="text-xs text-gray-400">100% Real Protocol Drivers</p>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-start gap-3">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase">&lt; 3.2ms Search</h4>
              <p className="text-xs text-gray-400">SQLite WAL FTS5 Trigram</p>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-start gap-3">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase">4 Great Interfaces</h4>
              <p className="text-xs text-gray-400">100% Parity Guaranteed</p>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase">Native MCP</h4>
              <p className="text-xs text-gray-400">LLM Agent Integration</p>
            </div>
          </div>
        </div>

        {/* Interactive Shell Switcher Section */}
        <div className="pt-10">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Interactive Live Shell Demonstration</h3>
          </div>
          <ShellInteractivePreview />
        </div>
      </div>
    </section>
  );
}

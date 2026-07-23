"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Download, Github, BookOpen, Layers, Menu, X, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              NUNCIO <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono border border-blue-500/30">v1.0.0</span>
            </span>
            <span className="text-[10px] text-gray-400 block font-mono">Latin: nūntiō — &quot;I announce, I declare&quot;</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="#experiences" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            4 Experiences
          </Link>
          <Link href="#nsql" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            NSQL Rules
          </Link>
          <Link href="#mcp" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            AI Agent Hub
          </Link>
          <Link href="#docs" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-purple-400" />
            Docs &amp; Guides
          </Link>
          <Link href="#downloads" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Download className="w-4 h-4 text-amber-400" />
            Downloads
          </Link>
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KofTwentyTwo/nuncio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-sm font-medium text-gray-200 transition-all hover:scale-105 min-h-[44px]"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#downloads"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            Install Free
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800 text-gray-300 hover:text-white border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-4 pt-2 pb-6 space-y-3 font-medium text-sm">
          <Link
            href="#experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            Four Great Experiences
          </Link>
          <Link
            href="#nsql"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            NSQL Rules &amp; Webhooks
          </Link>
          <Link
            href="#mcp"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            AI Agent Hub (MCP)
          </Link>
          <Link
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Shield className="w-4 h-4 text-purple-400" />
            Documentation &amp; Guides
          </Link>
          <Link
            href="#downloads"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Download className="w-4 h-4 text-amber-400" />
            Downloads &amp; Packages
          </Link>
        </div>
      )}
    </header>
  );
}

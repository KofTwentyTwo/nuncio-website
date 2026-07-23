"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Download, Github, BookOpen, Menu, X, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              NUNCIO <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 font-mono border border-blue-500/30">v1.0</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono hidden xl:inline">Latin: nūntiō — &quot;I declare&quot;</span>
          </div>
        </Link>

        {/* Desktop Navigation (Only visible on large screens lg: 1024px+ to avoid tablet overlap) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-gray-300">
          <Link href="#experiences" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            4 Experiences
          </Link>
          <Link href="#nsql" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            NSQL Rules
          </Link>
          <Link href="#mcp" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            AI Agent Hub
          </Link>
          <Link href="#docs" className="hover:text-purple-400 transition-colors flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            Docs &amp; Guides
          </Link>
          <Link href="#downloads" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Download className="w-3.5 h-3.5 text-amber-400" />
            Downloads
          </Link>
        </nav>

        {/* Right CTA Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://github.com/KofTwentyTwo/nuncio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-xs font-medium text-gray-200 transition-all hover:scale-105 min-h-[40px]"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#downloads"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl gradient-bg text-xs font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all min-h-[40px]"
          >
            <Download className="w-4 h-4" />
            <span>Install Free</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-gray-300 hover:text-white border border-white/10 min-h-[40px] min-w-[40px] flex items-center justify-center ml-1"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 font-medium text-sm shadow-2xl">
          <Link
            href="#experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            Four Great Experiences
          </Link>
          <Link
            href="#nsql"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            NSQL Rules &amp; Webhooks
          </Link>
          <Link
            href="#mcp"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            AI Agent Hub (MCP)
          </Link>
          <Link
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Shield className="w-4 h-4 text-purple-400" />
            Documentation &amp; Guides
          </Link>
          <Link
            href="#downloads"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-900 text-gray-200"
          >
            <Download className="w-4 h-4 text-amber-400" />
            Downloads &amp; Packages
          </Link>
        </div>
      )}
    </header>
  );
}

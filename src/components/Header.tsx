"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Download, Github, BookOpen, Layers } from "lucide-react";

export function Header() {
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
            <span className="text-[10px] text-gray-400 block font-mono">Latin: nūntiō — "I announce, I declare"</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-blue-400" />
            Multi-Shell
          </Link>
          <Link href="#nsql" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            NSQL Engine
          </Link>
          <Link href="#security" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-purple-400" />
            Security & Vault
          </Link>
          <Link href="#mcp" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            MCP Agent Hub
          </Link>
          <Link href="#downloads" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Download className="w-4 h-4 text-amber-400" />
            Downloads
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KofTwentyTwo/nuncio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-sm font-medium text-gray-200 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#downloads"
            className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            Install Free
          </a>
        </div>
      </div>
    </header>
  );
}

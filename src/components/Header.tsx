"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Download, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-blue-400 transition-colors">
              Nuncio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium text-slate-300">
            <Link href="/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/interfaces" className="hover:text-white transition-colors">
              Interfaces
            </Link>
            <Link href="/nsql" className="hover:text-white transition-colors">
              NSQL Engine
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Privacy &amp; Security
            </Link>
            <Link href="/mcp" className="hover:text-white transition-colors">
              AI MCP Hub
            </Link>
            <Link href="/vs" className="hover:text-white transition-colors">
              Comparisons
            </Link>
            <Link href="/docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* CTA & Downloads */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#downloads"
              className="apple-button-primary px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download Latest Release
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-2xl bg-slate-950/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 text-sm text-slate-200">
          <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            Features
          </Link>
          <Link href="/interfaces" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            Interfaces
          </Link>
          <Link href="/nsql" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            NSQL Engine
          </Link>
          <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            Privacy &amp; Security
          </Link>
          <Link href="/mcp" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            AI MCP Hub
          </Link>
          <Link href="/vs" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            Comparisons
          </Link>
          <Link href="/docs" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            Documentation
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-white/5 hover:text-white">
            About
          </Link>
          <div className="pt-2">
            <a
              href="/#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full apple-button-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download Latest Release
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

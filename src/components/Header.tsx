"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Download, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900 tracking-tight text-base sm:text-lg group-hover:text-blue-600 transition-colors">
              Nuncio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium text-slate-600">
            <Link href="/#experiences" className="hover:text-slate-950 transition-colors">
              Interfaces
            </Link>
            <Link href="/#nsql" className="hover:text-slate-950 transition-colors">
              NSQL Engine
            </Link>
            <Link href="/#security" className="hover:text-slate-950 transition-colors">
              Privacy &amp; Security
            </Link>
            <Link href="/#mcp" className="hover:text-slate-950 transition-colors">
              AI Co-Pilot (MCP)
            </Link>
            <Link href="/vs/superhuman" className="hover:text-slate-950 transition-colors">
              Comparisons
            </Link>
            <Link href="/docs" className="hover:text-slate-950 transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="hover:text-slate-950 transition-colors">
              About
            </Link>
          </nav>

          {/* CTA & Downloads */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#downloads"
              className="apple-button-primary px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download v1.0.0
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-2xl bg-white/95 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 text-sm text-slate-700">
          <Link href="/#experiences" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            Interfaces
          </Link>
          <Link href="/#nsql" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            NSQL Engine
          </Link>
          <Link href="/#security" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            Privacy &amp; Security
          </Link>
          <Link href="/#mcp" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            AI Co-Pilot (MCP)
          </Link>
          <Link href="/vs/superhuman" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            Comparisons
          </Link>
          <Link href="/docs" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            Documentation
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100 hover:text-slate-950">
            About
          </Link>
          <div className="pt-2">
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full apple-button-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download Nuncio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 text-xs sm:text-sm py-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white tracking-tight text-lg">
                Nuncio
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Crafted with ❤️ by <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">James Maes (KofTwentyTwo)</a> for power users, developers, and autonomous AI agents worldwide.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product &amp; Features</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/features" className="hover:text-white transition-colors">Full Feature Matrix</Link></li>
              <li><Link href="/interfaces" className="hover:text-white transition-colors">Four Interfaces</Link></li>
              <li><Link href="/nsql" className="hover:text-white transition-colors">NSQL Filter Engine</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Privacy &amp; Security Hub</Link></li>
              <li><Link href="/mcp" className="hover:text-white transition-colors">AI MCP Hub</Link></li>
              <li><Link href="/#downloads" className="hover:text-white transition-colors">Downloads &amp; Releases</Link></li>
            </ul>
          </div>

          {/* Comparisons Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Comparison Guides</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/vs" className="hover:text-white font-bold text-blue-400 transition-colors">Master Comparisons Hub</Link></li>
              <li><Link href="/vs/superhuman" className="hover:text-white transition-colors">vs Superhuman</Link></li>
              <li><Link href="/vs/airmail" className="hover:text-white transition-colors">vs Airmail</Link></li>
              <li><Link href="/vs/canary-mail" className="hover:text-white transition-colors">vs Canary Mail</Link></li>
              <li><Link href="/vs/spark-mail" className="hover:text-white transition-colors">vs Spark Mail</Link></li>
              <li><Link href="/vs/hey" className="hover:text-white transition-colors">vs HEY Mail</Link></li>
            </ul>
          </div>

          {/* Developer & Community Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Open Source &amp; Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://github.com/KofTwentyTwo/nuncio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository (Main App)</a></li>
              <li><a href="https://github.com/KofTwentyTwo/nuncio-website" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository (Website)</a></li>
              <li><a href="https://github.com/KofTwentyTwo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">KofTwentyTwo GitHub Profile</a></li>
              <li><a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">James Maes Official Site (kof22.com)</a></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About &amp; Credits</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nuncio Project by <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">James Maes (KofTwentyTwo)</a>. Released under MIT / Apache-2.0.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
            <Link href="/about" className="hover:text-slate-300">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

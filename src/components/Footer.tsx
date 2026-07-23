import React from "react";
import Link from "next/link";
import { Terminal, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              NUNCIO
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              A New Way to Do Email &amp; Calendars. 100% Free Open Source with 4 Great Interfaces.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Product</h4>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/#experiences" className="hover:text-white transition-colors">4 Great Interfaces</Link></li>
              <li><Link href="/#nsql" className="hover:text-white transition-colors">NSQL Filter Engine</Link></li>
              <li><Link href="/#mcp" className="hover:text-white transition-colors">AI Agent Hub (MCP)</Link></li>
              <li><Link href="/#downloads" className="hover:text-white transition-colors">Downloads &amp; Packages</Link></li>
            </ul>
          </div>

          {/* Comparisons */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Comparisons</h4>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/vs/superhuman" className="hover:text-white transition-colors">vs Superhuman</Link></li>
              <li><Link href="/vs/hey" className="hover:text-white transition-colors">vs HEY Mail</Link></li>
              <li><Link href="/vs/thunderbird" className="hover:text-white transition-colors">vs Thunderbird</Link></li>
              <li><Link href="/vs/apple-mail" className="hover:text-white transition-colors">vs Apple Mail</Link></li>
              <li><Link href="/vs/outlook" className="hover:text-white transition-colors">vs Microsoft Outlook</Link></li>
              <li><Link href="/vs/gmail" className="hover:text-white transition-colors">vs Gmail Webmail</Link></li>
            </ul>
          </div>

          {/* Legal & About */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Resources &amp; Legal</h4>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation &amp; Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About &amp; Open Source Credits</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>&copy; 2026 Nuncio Project. Open Source Apache 2.0 / MIT License.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/KofTwentyTwo/nuncio" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

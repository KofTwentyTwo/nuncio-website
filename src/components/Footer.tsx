import React from "react";
import Link from "next/link";
import { Terminal, Github, Heart, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F2F2F7] border-t border-slate-200/80 text-slate-600 text-xs sm:text-sm py-12 transition-all">
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
            <div className="pt-1">
              <a
                href="https://kof22.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                <Globe className="w-3.5 h-3.5" />
                Visit kof22.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
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

          {/* Legal & Repositories */}
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Repositories &amp; Legal</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://github.com/KofTwentyTwo/nuncio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-gray-400" /> Nuncio Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/KofTwentyTwo/nuncio-website" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-gray-400" /> Website Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/KofTwentyTwo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-gray-400" /> KofTwentyTwo GitHub
                </a>
              </li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation &amp; Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About &amp; Credits</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-gray-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current mx-0.5 inline-block" />
            <span>by</span>
            <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-blue-400 transition-colors">
              James Maes (KofTwentyTwo)
            </a>
            <span>for power users, developers, and autonomous AI agents worldwide.</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Apache 2.0 / MIT Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

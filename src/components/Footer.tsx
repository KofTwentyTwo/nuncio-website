"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090D16] py-12 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide">NUNCIO</span>
              <span className="text-[10px] text-gray-400 block font-mono">Open Source Sovereign Suite</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <a href="https://github.com/KofTwentyTwo/nuncio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> GitHub Repository
            </a>
            <a href="https://github.com/KofTwentyTwo/nuncio/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              MIT / Apache 2.0 License
            </a>
            <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              KofTwentyTwo Org
            </a>
            <a href="https://investinginchester.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Investing in Chester
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} KofTwentyTwo Inc. Free and Open Source Software.</p>
          <p className="flex items-center gap-1 text-gray-400">
            Crafted with <Heart className="w-3 h-3 text-red-500 fill-current" /> for developers &amp; autonomous agents.
          </p>
        </div>
      </div>
    </footer>
  );
}

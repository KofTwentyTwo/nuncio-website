"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Download,
  Key,
  Monitor,
  Cpu,
  Code,
  Bot,
  Layers,
  Terminal,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import { DOCS_NAVIGATION } from "@/lib/docs-navigation";

const ICON_MAP: Record<string, React.ReactNode> = {
  Download: <Download className="w-4 h-4 text-amber-400" />,
  Key: <Key className="w-4 h-4 text-purple-400" />,
  Monitor: <Monitor className="w-4 h-4 text-cyan-400" />,
  Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
  Code: <Code className="w-4 h-4 text-emerald-400" />,
  Bot: <Bot className="w-4 h-4 text-emerald-400" />,
  Layers: <Layers className="w-4 h-4 text-purple-400" />,
  Terminal: <Terminal className="w-4 h-4 text-emerald-400" />,
  FileCheck: <FileCheck className="w-4 h-4 text-cyan-400" />,
  HelpCircle: <HelpCircle className="w-4 h-4 text-blue-400" />,
};

export function DocsTeaserSection() {
  return (
    <section id="docs" className="py-20 relative border-t border-white/10 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider shadow-lg">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Developer Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Complete <span className="gradient-text">Documentation Hub</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From installation and Google OAuth PKCE to NSQL grammar specs, HMAC webhooks, and AI MCP integration — explore all 10 technical guides in our dedicated docs portal.
          </p>
        </div>

        {/* 10 Topic Teaser Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {DOCS_NAVIGATION.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800/90 transition-all space-y-2 group flex flex-col justify-between shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/10">
                  {ICON_MAP[doc.iconName]}
                </div>
                <span className="text-[9px] font-mono text-slate-400 uppercase font-semibold">
                  {doc.category}
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {doc.title}
                </h3>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white font-mono">
                <span>Read guide</span>
                <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <Link
            href="/docs"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>Explore All 10 Documentation Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

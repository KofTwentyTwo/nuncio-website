"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Download,
  Key,
  Monitor,
  Cpu,
  Code,
  Bot,
  Terminal,
  FileCheck,
  HelpCircle,
  ChevronRight,
  Search,
  ArrowLeft,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { DOCS_NAVIGATION, DocNavNode } from "@/lib/docs-navigation";

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

interface DocsLayoutProps {
  children: React.ReactNode;
  activeSlug: string;
}

export function DocsLayout({ children, activeSlug }: DocsLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const activeDocIndex = DOCS_NAVIGATION.findIndex((d) => d.slug === activeSlug);
  const activeDoc = DOCS_NAVIGATION[activeDocIndex] || DOCS_NAVIGATION[0];

  const prevDoc = activeDocIndex > 0 ? DOCS_NAVIGATION[activeDocIndex - 1] : null;
  const nextDoc = activeDocIndex < DOCS_NAVIGATION.length - 1 ? DOCS_NAVIGATION[activeDocIndex + 1] : null;

  const filteredNav = DOCS_NAVIGATION.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 relative border-t border-white/10 bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">{activeDoc.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-bold">{activeDoc.title}</span>
          </div>

          <Link
            href="/docs"
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-white/10"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Master Docs Hub Index</span>
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Navigation Tree */}
          <aside className="lg:col-span-4 glass-panel p-4 rounded-2xl border border-white/10 space-y-4 shadow-xl">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 block mb-1 font-mono">
                Knowledge Base Index ({filteredNav.length})
              </span>
              {filteredNav.map((item) => {
                const isActive = activeSlug === item.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all min-h-[44px] ${
                      isActive
                        ? "bg-blue-600/20 border border-blue-500/40 text-blue-300 shadow-md shadow-blue-500/10"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="shrink-0">{ICON_MAP[item.iconName]}</div>
                      <div className="min-w-0">
                        <span className="block text-[9px] text-slate-400 font-normal uppercase tracking-tight">{item.category}</span>
                        <span className="block text-xs font-bold truncate">{item.title}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "rotate-90 text-blue-400" : "text-slate-600"}`} />
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* Standalone Full-Page Reader */}
          <main className="lg:col-span-8 space-y-8">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 shadow-2xl min-h-[600px]">
              {children}

              {/* Prev / Next Pagination Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10 text-xs font-mono">
                {prevDoc ? (
                  <Link
                    href={`/docs/${prevDoc.slug}`}
                    className="p-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-3 group"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-normal block">Previous Guide</span>
                      <span className="text-white font-bold block">{prevDoc.title}</span>
                    </div>
                  </Link>
                ) : <div />}

                {nextDoc ? (
                  <Link
                    href={`/docs/${nextDoc.slug}`}
                    className="p-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-between gap-3 text-right group ml-auto w-full"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-normal block">Next Guide</span>
                      <span className="text-white font-bold block">{nextDoc.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

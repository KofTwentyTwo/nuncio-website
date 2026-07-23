import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCS_NAVIGATION } from "@/lib/docs-navigation";
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
import Link from "next/link";

export const metadata = {
  title: "Documentation & Knowledge Base — Nuncio",
  description: "Complete technical manual, installation guide, NSQL filter language specification, protocol setup, and MCP LLM agent integration guide for Nuncio.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Download: <Download className="w-5 h-5 text-amber-400" />,
  Key: <Key className="w-5 h-5 text-purple-400" />,
  Monitor: <Monitor className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Code: <Code className="w-5 h-5 text-emerald-400" />,
  Bot: <Bot className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-cyan-400" />,
  HelpCircle: <HelpCircle className="w-5 h-5 text-blue-400" />,
};

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg uppercase">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Nuncio Knowledge Base &amp; Technical Manual</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Technical <span className="gradient-text">Documentation</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            In-depth standalone guides for installation, protocol setup, NSQL filter rules, AI MCP integration, security whitepapers, and automated backups.
          </p>
        </div>

        {/* 10 Standalone Documentation Cards Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCS_NAVIGATION.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-blue-500/50 hover:scale-[1.01] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-white/10">
                      {ICON_MAP[doc.iconName]}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-white/10">
                      {doc.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {doc.title}
                  </h2>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Read Full Technical Guide</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

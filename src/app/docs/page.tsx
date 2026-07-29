import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCS_NAVIGATION } from "@/lib/docs-navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
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
  AlertTriangle,
  MapPin,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import Link from "next/link";

export const metadata = {
  title: "Documentation — Nuncio (Pre-Alpha)",
  description: "Docs for the Nuncio engine: what genuinely builds and runs from source today (the daemon, CLI, sync, search, export, WORM audits) versus what's designed but not yet usable (GUI, TUI, MCP, live-firing filters, at-rest encryption, HTML sanitization). Nuncio is pre-alpha — not yet usable for real accounts.",
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
            <span>Nuncio Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Technical <span className="gradient-text">Documentation</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Guides for the engine you can build from source today, and honest design docs for what&apos;s still on
            the roadmap: NSQL filter rules, the WORM audit ledger, export &amp; recovery, and the planned MCP AI
            gateway.
          </p>

          {/* Prominent pre-alpha notice */}
          <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Pre-alpha — not yet usable for real accounts</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Nuncio has no installer and no end-user onboarding flow. Pages here that describe a developer building
              the daemon and CLI from source, running IMAP/SMTP sync, search, export, or the WORM audit ledger are
              describing real, working code. Anything about a desktop GUI, terminal TUI, MCP AI client, live-firing
              filters, at-rest encryption, or HTML sanitization is <StatusBadge variant="planned" className="mx-1 align-middle" /> —
              the design we&apos;re building toward, not something you can use today.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-400 hover:underline">
                <GithubIcon className="w-3.5 h-3.5" />
                Follow the build on GitHub
              </a>
              <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-400 hover:underline">
                <MapPin className="w-3.5 h-3.5" />
                See the roadmap
              </a>
            </div>
          </div>
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

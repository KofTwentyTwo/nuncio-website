import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Code, Sparkles, Terminal, Database, FileCheck, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Nuncio — Sovereign Mail & Calendar Rebuilt for Today",
  description: "Learn why Nuncio was created: email and calendar rebuilt for today — private, fast, secure, and AI-integrated without losing ownership of your data.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Nuncio Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Email Rebuilt for Today.<br />
            <span className="gradient-text">Private, Fast &amp; Sovereign.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            No more paid subscriptions, closed proprietary formats, locked-away data, or inconsistent experiences across machines.
          </p>
        </div>

        {/* Vision Narrative Card */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Why Nuncio Exists</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                For years, personal and professional communications have been trapped inside paid closed-source apps, opaque cloud servers, locked data formats, and fragmented user experiences across platforms.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Nuncio was built to break those walls. <strong>This is email rebuilt for today</strong> — 100% private, microsecond fast, cryptographically secure, and natively AI-integrated without ever losing control of your data, your keys, or your privacy.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-900 border border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit border border-blue-500/30">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Zero Closed Formats</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Your mail, calendar, and rule history live in a standard local SQLite database with full column-level AES-256-GCM encryption. You own your data 100%.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-900 border border-white/10">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit border border-cyan-500/30">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">AI NSQL Filters</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Declarative SQL filter rules (NSQL) executed during background sync loops before messages land in your database.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-900 border border-white/10">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/30">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Cryptographic Audit Logs</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Every automated action, rule match, webhook dispatch, and AI MCP agent operation is recorded in a tamper-evident HMAC-SHA256 audit log ledger.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-4">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Nuncio v1.0.0
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

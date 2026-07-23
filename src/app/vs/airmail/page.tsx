import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs Airmail — Free Sovereign Mail & Calendar Alternative to Airmail for Mac",
  description: "Compare Nuncio to Airmail for macOS and iOS. Why pay $29.99/year for Airmail Pro subscription when Nuncio gives you local encryption, zero tracking, Vim terminal velocity, 4 interfaces, and native AI agents 100% free?",
};

export default function VsAirmailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 tracking-tight">
              Comparison Guide
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Nuncio vs <span className="gradient-text">Airmail</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Why pay $29.99/year for proprietary Airmail Pro when Nuncio provides a 100% free open-source sovereign suite with 4 interfaces, Vim keyboard velocity, and native AI agent co-piloting?
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Side-by-Side Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4 p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30">
                <span className="text-base font-bold text-blue-300">Nuncio v1.0</span>
                <ul className="space-y-2.5 text-slate-200 font-medium">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 100% Free &amp; Open Source</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 4 Interfaces (CLI, TUI, GUI, MCP)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Local SQLite WAL Storage (Zero Cloud Tracking)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Vim Ratatui Terminal Keyboard Triage</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Native LLM Agent Co-Pilot (MCP Protocol)</li>
                </ul>
              </div>

              <div className="space-y-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400">
                <span className="text-base font-bold text-slate-300">Airmail</span>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5"><X className="w-4 h-4 text-red-400 shrink-0" /> $29.99 / year Pro subscription</li>
                  <li className="flex items-center gap-2.5"><X className="w-4 h-4 text-red-400 shrink-0" /> Proprietary closed-source code</li>
                  <li className="flex items-center gap-2.5"><X className="w-4 h-4 text-red-400 shrink-0" /> macOS / iOS GUI only</li>
                  <li className="flex items-center gap-2.5"><X className="w-4 h-4 text-red-400 shrink-0" /> No terminal TUI or POSIX CLI</li>
                  <li className="flex items-center gap-2.5"><X className="w-4 h-4 text-red-400 shrink-0" /> No Model Context Protocol (MCP) support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link
              href="/#downloads"
              className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              Get Started with Nuncio Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

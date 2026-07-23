import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs Superhuman — Free Open Source Alternative to Superhuman Mail",
  description: "Compare Nuncio to Superhuman. Why pay $360/year for closed cloud email when Nuncio gives you zero cloud tracking, local SQLite speed, 4 great interfaces, and native AI agent support 100% free?",
};

export default function VsSuperhumanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold uppercase">
              Comparison Guide
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
              Nuncio vs <span className="gradient-text">Superhuman</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Why pay $360/year for proprietary cloud email when Nuncio gives you zero-tracking local privacy, Vim keyboard velocity, desktop beauty, and AI agent integration 100% free?
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Side-by-Side Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                <span className="text-base font-bold text-blue-300">Nuncio v1.0</span>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 100% Free &amp; Open Source</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Local SQLite WAL Storage (Zero Cloud Tracking)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 4 Great Interfaces (CLI, TUI, GUI, MCP)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Vim Ratatui Terminal Keyboard Triage</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Native LLM Agent Integration (MCP)</li>
                </ul>
              </div>

              <div className="space-y-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-gray-400">
                <span className="text-base font-bold text-gray-300">Superhuman</span>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> $30 / month ($360 / year) subscription</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Closed proprietary cloud servers</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Web app / GUI only</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No terminal TUI or POSIX CLI</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No Model Context Protocol (MCP) agent support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link
              href="/#downloads"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
            >
              Get Started with Nuncio Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

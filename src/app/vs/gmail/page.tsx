import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs Gmail — Local Privacy & Sovereign Mail Control",
  description: "Compare Nuncio to Gmail webmail. Support Google Workspace OAuth2 PKCE while keeping your emails index, search, and AI processing 100% local on your machine.",
};

export default function VsGmailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold uppercase">
              Comparison Guide
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
              Nuncio vs <span className="gradient-text">Gmail Webmail</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Love your Gmail account but hate webmail browser tabs, tracking, and lack of offline access? Nuncio connects natively to Google Workspace via OAuth2 PKCE while storing all data locally in SQLite WAL.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Side-by-Side Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                <span className="text-base font-bold text-blue-300">Nuncio v1.0</span>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full Instant Offline Access (SQLite WAL)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 4 Great Interfaces (CLI, TUI, GUI, MCP)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Microsecond Local FTS5 Trigram Search</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Native Model Context Protocol (MCP) AI</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Google OAuth2 PKCE RFC 7636 Authenticated</li>
                </ul>
              </div>

              <div className="space-y-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-gray-400">
                <span className="text-base font-bold text-gray-300">Gmail Webmail</span>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Locked inside web browser tabs</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Slow network-dependent search queries</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Targeted advertising &amp; tracking pixels</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No POSIX CLI or Vim terminal TUI</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No native MCP AI agent integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/#downloads"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
            >
              Connect Gmail to Nuncio Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

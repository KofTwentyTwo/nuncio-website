import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs Apple Mail — Cross-Platform Sovereign Mail & Calendar",
  description: "Compare Nuncio to Apple Mail. Get cross-platform support across macOS, Linux, and Windows, terminal TUI, NSQL rules, and native AI integration.",
};

export default function VsAppleMailPage() {
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
              Nuncio vs <span className="gradient-text">Apple Mail</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Apple Mail is locked to Apple hardware and offers basic filtering. Nuncio is 100% cross-platform (macOS, Linux, Windows) with advanced NSQL automation and AI agent integration.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Side-by-Side Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4 p-4 rounded-xl bg-blue-950/30 border border-blue-500/30">
                <span className="text-base font-bold text-blue-300">Nuncio v1.0</span>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Cross-Platform (macOS, Linux, Windows)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 4 Great Interfaces (CLI, TUI, GUI, MCP)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Server-Side NSQL Rule Language</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Native Model Context Protocol (MCP) AI</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Cryptographic Signed Webhook Actions</li>
                </ul>
              </div>

              <div className="space-y-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-gray-400">
                <span className="text-base font-bold text-gray-300">Apple Mail</span>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Locked exclusively to Apple Ecosystem</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> Basic GUI rules with limited condition logic</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No terminal TUI or CLI support</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No native MCP AI agent integration</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-400" /> No HTTP Webhook triggers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/#downloads"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
            >
              Get Nuncio for macOS Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

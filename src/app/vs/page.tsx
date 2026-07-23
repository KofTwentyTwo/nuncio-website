import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs The Competition — Full Mail & Calendar Comparison Hub",
  description: "Compare Nuncio side-by-side against Superhuman, Airmail, Canary Mail, Spark Mail, HEY Mail, Apple Mail, Outlook 365, Thunderbird, and Gmail.",
};

export default function ComparisonsHubPage() {
  const competitors = [
    { id: "airmail", name: "Airmail", platform: "macOS / iOS", price: "$29.99 / yr", href: "/vs/airmail", desc: "Sovereign 4-interface mail suite vs proprietary Airmail Pro subscription." },
    { id: "canary", name: "Canary Mail", platform: "macOS / Win / iOS", price: "$20.00 / yr", href: "/vs/canary-mail", desc: "Local SQLite privacy & MCP agent policy vs proprietary cloud AI Mail." },
    { id: "spark", name: "Spark Mail", platform: "macOS / Win / iOS", price: "$59.99 / yr", href: "/vs/spark-mail", desc: "Native Rust performance vs Electron Spark Premium subscription." },
    { id: "superhuman", name: "Superhuman", platform: "macOS / Web", price: "$360.00 / yr", href: "/vs/superhuman", desc: "Why pay $360/yr for cloud email when Nuncio is 100% free?" },
    { id: "hey", name: "HEY Mail", platform: "Web / Mac / iOS", price: "$99.00 / yr", href: "/vs/hey", desc: "Sovereign local privacy & Vim keyboard triage vs closed HEY servers." },
    { id: "apple", name: "Apple Mail", platform: "macOS", price: "Free (Proprietary)", href: "/vs/apple-mail", desc: "4 interfaces & NSQL server-side rule engine vs Apple Mail." },
    { id: "outlook", name: "Outlook 365", platform: "Windows / Mac", price: "$6.99+ / mo", href: "/vs/outlook", desc: "Microsecond SQLite speed & zero telemetry vs Outlook telemetry." },
    { id: "thunderbird", name: "Thunderbird", platform: "Linux / Win / Mac", price: "Free Open Source", href: "/vs/thunderbird", desc: "Modern Rust architecture & AI MCP protocol vs legacy Thunderbird." },
    { id: "gmail", name: "Gmail", platform: "Web", price: "Free (Ad-Tracked)", href: "/vs/gmail", desc: "100% zero-tracking privacy vs Gmail data mining & trackers." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Master Comparison Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Nuncio vs <span className="gradient-text">The Competition.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Compare Nuncio side-by-side against every popular email and calendar application across macOS, Windows, Linux, and Web.
          </p>
        </div>

        {/* 9 Competitor Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Select a Detailed Comparison Guide</h2>
            <p className="text-slate-400 text-sm">Click any client below for a comprehensive side-by-side breakdown.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="glass-card p-6 border border-white/10 rounded-2xl bg-slate-900/60 hover:border-blue-500/50 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                      {c.platform}
                    </span>
                    <span className="text-xs font-bold text-blue-400">{c.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Nuncio vs {c.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{c.desc}</p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:gap-2.5 transition-all">
                  <span>Read Full Side-by-Side Comparison</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-6">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Nuncio v1.0.0 Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

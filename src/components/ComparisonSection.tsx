"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ComparisonSection() {
  const competitorCards = [
    { name: "Airmail", platform: "macOS / iOS", price: "$29.99 / yr", href: "/vs/airmail", desc: "Compare Nuncio to Airmail for Mac and iOS." },
    { name: "Canary Mail", platform: "macOS / iOS / Win", price: "$20.00 / yr", href: "/vs/canary-mail", desc: "Compare Nuncio to Canary Mail AI email." },
    { name: "Spark Mail", platform: "macOS / Win / iOS", price: "$59.99 / yr", href: "/vs/spark-mail", desc: "Compare Nuncio to Spark Premium Desktop." },
    { name: "Superhuman", platform: "macOS / Web", price: "$360.00 / yr", href: "/vs/superhuman", desc: "Why pay $360/yr when Nuncio is 100% free?" },
    { name: "HEY Mail", platform: "Web / iOS / Mac", price: "$99.00 / yr", href: "/vs/hey", desc: "Sovereign local privacy vs closed HEY servers." },
    { name: "Apple Mail", platform: "macOS", price: "Free (Proprietary)", href: "/vs/apple-mail", desc: "4 interfaces & NSQL filtering vs Apple Mail." },
    { name: "Outlook 365", platform: "Windows / Mac", price: "$6.99+ / mo", href: "/vs/outlook", desc: "Microsecond SQLite speed vs Outlook telemetry." },
    { name: "Mozilla Thunderbird", platform: "Linux / Win / Mac", price: "Free Open Source", href: "/vs/thunderbird", desc: "Modern Rust architecture vs legacy Thunderbird." },
    { name: "Gmail", platform: "Web", price: "Free (Ad-Tracked)", href: "/vs/gmail", desc: "100% zero-tracking privacy vs Gmail data mining." },
  ];

  return (
    <section id="compare" className="py-20 bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Comprehensive Comparison Guides</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for those who <span className="gradient-text">demand more.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how Nuncio outperforms traditional desktop clients and expensive cloud subscriptions across Mac, Windows, and Linux.
          </p>
        </div>

        {/* Competitor Landing Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitorCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="glass-card p-6 border border-white/10 rounded-2xl bg-slate-900/60 hover:border-blue-500/50 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
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
                <span>Read Full Comparison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

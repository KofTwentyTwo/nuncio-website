"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowRight, ShieldCheck, Zap, Terminal, Database, Lock, Bot, Download, FileCheck, Layers } from "lucide-react";
import Link from "next/link";

export interface ComparisonFeatureRow {
  feature: string;
  nuncioValue: string | boolean;
  competitorValue: string | boolean;
  description: string;
}

export interface ComparisonPageProps {
  competitorName: string;
  competitorSlug: string;
  tagline: string;
  nuncioPrice: string;
  competitorPrice: string;
  heroHeadline: string;
  whySwitchParagraph: string;
  comparisonRows: ComparisonFeatureRow[];
  differentiators: {
    title: string;
    icon: React.ReactNode;
    desc: string;
  }[];
}

export function ComparisonPageTemplate({
  competitorName,
  competitorSlug,
  tagline,
  nuncioPrice,
  competitorPrice,
  heroHeadline,
  whySwitchParagraph,
  comparisonRows,
  differentiators,
}: ComparisonPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Official Comparison Guide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Nuncio vs <span className="gradient-text">{competitorName}</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            {heroHeadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono pt-2">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold whitespace-nowrap shrink-0">
              Nuncio: {nuncioPrice}
            </span>
            <span className="text-slate-500 shrink-0">vs</span>
            <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold whitespace-nowrap shrink-0">
              {competitorName}: {competitorPrice}
            </span>
          </div>
        </div>

        {/* Core Differentiator Cards Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-3 hover:border-blue-500/40 transition-colors">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 w-fit shrink-0">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-bold text-white min-w-0 leading-tight">{diff.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed min-h-[4rem]">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Deep Dive: Why Users Are Switching */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-2xl font-bold text-white">Why Power Users &amp; Developers Are Choosing Nuncio</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {whySwitchParagraph}
            </p>
          </div>
        </div>

        {/* Side-by-Side Detailed Comparison Table */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Detailed Capability Matrix</h2>
                <p className="text-slate-400 text-xs">Direct technical breakdown comparing Nuncio v1.0 against {competitorName}.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="p-3 pl-4">Capability / Dimension</th>
                    <th className="p-3 text-blue-400 font-bold bg-blue-500/5">Nuncio v1.0</th>
                    <th className="p-3 text-slate-300">{competitorName}</th>
                    <th className="p-3 pr-4 hidden md:table-cell">Technical Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 pl-4 font-semibold text-white">{row.feature}</td>
                      <td className="p-3 font-bold bg-blue-500/5">
                        {typeof row.nuncioValue === "boolean" ? (
                          row.nuncioValue ? (
                            <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                              <Check className="w-4 h-4" /> Yes
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-red-400 font-bold">
                              <X className="w-4 h-4" /> No
                            </span>
                          )
                        ) : (
                          <span className="text-blue-300 font-bold">{row.nuncioValue}</span>
                        )}
                      </td>
                      <td className="p-3">
                        {typeof row.competitorValue === "boolean" ? (
                          row.competitorValue ? (
                            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                              <Check className="w-4 h-4" /> Yes
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-red-400 font-semibold">
                              <X className="w-4 h-4" /> No
                            </span>
                          )
                        ) : (
                          <span className="text-slate-300">{row.competitorValue}</span>
                        )}
                      </td>
                      <td className="p-3 pr-4 text-slate-400 hidden md:table-cell">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Download CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience Sovereign Communication Today</h2>
            <p className="text-slate-400 text-sm">No credit card required. 100% Free and Open Source under MIT / Apache-2.0.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#downloads"
              className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Nuncio v1.0.0
            </a>
            <Link
              href="/features"
              className="apple-button-secondary px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              View Full Feature Matrix
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

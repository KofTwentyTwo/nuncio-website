"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatusBadge } from "@/components/StatusBadge";
import { ROADMAP_URL, GITHUB_URL, type StatusVariant } from "@/lib/status";
import { Check, X, ArrowRight, Bell, MapPin, Layers } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import Link from "next/link";

export interface ComparisonFeatureRow {
  feature: string;
  nuncioValue: string | boolean;
  competitorValue: string | boolean;
  description: string;
  /**
   * What Nuncio's side of this row actually is today. Defaults to
   * "available-now" when omitted, so every row that describes a roadmap
   * item (GUI/TUI/MCP, at-rest encryption, filters firing, etc.) must set
   * this explicitly rather than rendering as a false "Yes" — see
   * CONTENT-POLICY.md guardrail #2.
   */
  nuncioStatus?: StatusVariant;
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
    /** Optional status badge shown on the card when the claim is aspirational. */
    status?: StatusVariant;
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
            <span>Design comparison — architecture and roadmap, not a shipped product</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Nuncio vs <span className="gradient-text">{competitorName}</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            {heroHeadline}
          </p>

          <p className="text-slate-500 text-xs max-w-2xl mx-auto">
            Nuncio is pre-alpha. Rows below marked <StatusBadge variant="planned" className="mx-1 align-middle" /> are
            architecture we are actively building, not something you can use yet — see{" "}
            <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              the roadmap
            </a>{" "}
            for status.
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
          <p className="text-slate-500 text-[11px]">
            {competitorName} pricing is approximate — pricing as of 2026; check the vendor&apos;s site for current rates.
          </p>
        </div>

        {/* Core Differentiator Cards Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-3 hover:border-blue-500/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 w-fit shrink-0">
                      {diff.icon}
                    </div>
                    {diff.status && <StatusBadge variant={diff.status} />}
                  </div>
                  <h3 className="text-base font-bold text-white min-w-0 leading-tight">{diff.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed min-h-[4rem]">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Deep Dive: Why the Design Differs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-2xl font-bold text-white">Why We&apos;re Building It This Way</h2>
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
                <h2 className="text-xl font-bold text-white">Design &amp; Architecture Matrix</h2>
                <p className="text-slate-400 text-xs">Nuncio&apos;s target design against {competitorName} today — planned items are labeled, not claimed as shipped.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="p-3 pl-4">Capability / Dimension</th>
                    <th className="p-3 text-blue-400 font-bold bg-blue-500/5">Nuncio</th>
                    <th className="p-3 text-slate-300">{competitorName}</th>
                    <th className="p-3 pr-4 hidden md:table-cell">Technical Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, idx) => {
                    const status = row.nuncioStatus ?? "available-now";
                    const isAvailable = status === "available-now" || status === "shipped";

                    return (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 pl-4 font-semibold text-white">{row.feature}</td>
                        <td className="p-3 font-bold bg-blue-500/5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {typeof row.nuncioValue === "boolean" ? (
                              row.nuncioValue ? (
                                isAvailable ? (
                                  <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                                    <Check className="w-4 h-4" /> Yes
                                  </span>
                                ) : (
                                  <StatusBadge variant={status} />
                                )
                              ) : (
                                <span className="inline-flex items-center gap-1 text-red-400 font-bold">
                                  <X className="w-4 h-4" /> No
                                </span>
                              )
                            ) : (
                              <span className="text-blue-300 font-bold">{row.nuncioValue}</span>
                            )}
                            {!isAvailable && typeof row.nuncioValue !== "boolean" && (
                              <StatusBadge variant={status} />
                            )}
                          </div>
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Watch It Get Built, Don&apos;t Just Wait For It</h2>
            <p className="text-slate-400 text-sm">
              Nuncio isn&apos;t installable by end users yet. It will be free and open source under MIT / Apache-2.0 — no
              account, no subscription, no lock-in vs {competitorName}&apos;s {competitorPrice}.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#downloads"
              className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Notify me at launch
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              Follow the build on GitHub
            </a>
            <a
              href={ROADMAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              See the roadmap
            </a>
          </div>

          <div>
            <Link
              href="/features"
              className="text-xs font-semibold text-blue-400 hover:underline inline-flex items-center gap-1.5"
            >
              View the full feature matrix
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

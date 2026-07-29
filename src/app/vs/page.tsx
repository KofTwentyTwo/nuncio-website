import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatusBadge } from "@/components/StatusBadge";
import { ROADMAP_URL, GITHUB_URL } from "@/lib/status";
import { Layers, ArrowRight, Bell, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import Link from "next/link";

export const metadata = {
  title: "Nuncio vs The Field — Design Comparisons, Not a Feature Race",
  description: "How Nuncio's local-first architecture and one-contract-many-clients design compare to Superhuman, Airmail, Canary Mail, Spark Mail, HEY Mail, Apple Mail, Outlook, Thunderbird, and Gmail. Nuncio is pre-alpha — these are positioning guides, not a head-to-head with a shipped product.",
};

export default function ComparisonsHubPage() {
  const competitors = [
    { id: "airmail", name: "Airmail", platform: "macOS / iOS", price: "$29.99 / yr", href: "/vs/airmail", desc: "A local-first, cross-platform design vs a macOS-only Pro subscription." },
    { id: "canary", name: "Canary Mail", platform: "macOS / Win / iOS", price: "$36-$100 / yr", href: "/vs/canary-mail", desc: "A governed, local AI-agent policy vs proprietary cloud AI mail." },
    { id: "spark", name: "Spark Mail", platform: "macOS / Win / iOS", price: "$120-$240 / yr", href: "/vs/spark-mail", desc: "A daemon that talks to your mail server directly vs Spark's proxy-server architecture." },
    { id: "superhuman", name: "Superhuman", platform: "macOS / Web", price: "≈$300+ / yr", href: "/vs/superhuman", desc: "A free, open, local-first alternative we're building to paid cloud email." },
    { id: "hey", name: "HEY Mail", platform: "Web / Mac / iOS", price: "$99.00 / yr", href: "/vs/hey", desc: "Bring your own address and rules engine vs HEY's closed $99/yr platform." },
    { id: "apple", name: "Apple Mail", platform: "macOS", price: "Free (Proprietary)", href: "/vs/apple-mail", desc: "One gRPC contract across future clients vs Apple Mail's single-platform reach." },
    { id: "outlook", name: "Outlook 365", platform: "Windows / Mac", price: "≈$9.99 / mo", href: "/vs/outlook", desc: "A minimal, memory-safe Rust daemon vs Outlook's telemetry and subscription model." },
    { id: "thunderbird", name: "Thunderbird", platform: "Linux / Win / Mac", price: "Free Open Source", href: "/vs/thunderbird", desc: "A from-scratch memory-safe Rust engine vs Thunderbird's decades-old C++ core." },
    { id: "gmail", name: "Gmail", platform: "Web", price: "Free (Ad-Tracked)", href: "/vs/gmail", desc: "Local data ownership vs Gmail's cloud-hosted, ad-supported model." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Positioning Guides, Not a Feature Race</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Nuncio vs <span className="gradient-text">The Field.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Nuncio is pre-alpha — there is no app to install yet. These pages compare the local-first,
            one-contract-many-clients architecture we&apos;re building against today&apos;s popular mail clients, so you can
            judge the design before the build catches up to it.
          </p>

          <StatusBadge variant="planned" label="Comparisons describe the target design, not a shipped app" />
        </div>

        {/* 9 Competitor Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Pick a Comparison</h2>
            <p className="text-slate-400 text-sm">Each guide contrasts Nuncio&apos;s architecture with a specific client&apos;s design and pricing.</p>
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
                  <span>Read the comparison</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs">
            Competitor prices are approximate, current as of when each page was written, and change without notice —
            pricing as of 2026; check the vendor&apos;s site for what they charge today.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-6 flex flex-wrap items-center justify-center gap-4">
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
      </main>
      <Footer />
    </div>
  );
}

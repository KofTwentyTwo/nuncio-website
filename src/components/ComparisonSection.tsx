"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Sparkles, Shield, ArrowRight, DollarSign } from "lucide-react";

export function ComparisonSection() {
  const competitors = [
    { name: "Superhuman", price: "$30 / month", href: "/vs/superhuman" },
    { name: "HEY Mail", price: "$99 / year", href: "/vs/hey" },
    { name: "Thunderbird", price: "Free (Legacy)", href: "/vs/thunderbird" },
    { name: "Apple Mail", price: "Free (macOS)", href: "/vs/apple-mail" },
    { name: "Outlook 365", price: "$6.99+ / mo", href: "/vs/outlook" },
  ];

  const features = [
    {
      feature: "Price & Licensing",
      nuncio: "100% Free Open Source",
      superhuman: "$360 / year",
      hey: "$99 / year",
      thunderbird: "Free Open Source",
      apple: "Free (Proprietary)",
      outlook: "Subscription",
    },
    {
      feature: "4 Great Interfaces (CLI, TUI, GUI, MCP)",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: false,
      apple: false,
      outlook: false,
    },
    {
      feature: "Native AI Agent Integration (MCP Protocol)",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: false,
      apple: false,
      outlook: false,
    },
    {
      feature: "Vim Terminal Keyboard Triage (Ratatui TUI)",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: false,
      apple: false,
      outlook: false,
    },
    {
      feature: "Server-Side NSQL Filter Engine",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: false,
      apple: false,
      outlook: false,
    },
    {
      feature: "Local SQLite WAL Storage & Zero Cloud Tracking",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: true,
      apple: true,
      outlook: false,
    },
    {
      feature: "Cryptographic HMAC Signed Webhooks",
      nuncio: true,
      superhuman: false,
      hey: false,
      thunderbird: false,
      apple: false,
      outlook: false,
    },
  ];

  return (
    <section className="py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-medium tracking-tight">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Competitive Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Built for those who demand more.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how Nuncio compares against traditional email clients and expensive subscriptions.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900/90 border-b border-white/10 text-gray-300 font-bold">
                  <th className="p-4 sm:p-5 min-w-[200px]">Core Capabilities</th>
                  <th className="p-4 sm:p-5 text-blue-400 bg-blue-950/40 border-x border-blue-500/20 min-w-[150px]">
                    Nuncio v1.0
                  </th>
                  {competitors.map((c) => (
                    <th key={c.name} className="p-4 sm:p-5 text-gray-400 font-semibold min-w-[130px]">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {features.map((f, i) => (
                  <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">{f.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-emerald-400 bg-blue-950/20 border-x border-blue-500/20">
                      {typeof f.nuncio === "boolean" ? (
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Yes</span>
                        </div>
                      ) : (
                        f.nuncio
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      {typeof f.superhuman === "boolean" ? (
                        f.superhuman ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : (
                        f.superhuman
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      {typeof f.hey === "boolean" ? (
                        f.hey ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : (
                        f.hey
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      {typeof f.thunderbird === "boolean" ? (
                        f.thunderbird ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : (
                        f.thunderbird
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      {typeof f.apple === "boolean" ? (
                        f.apple ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : (
                        f.apple
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-400">
                      {typeof f.outlook === "boolean" ? (
                        f.outlook ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />
                      ) : (
                        f.outlook
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dedicated Landing Page Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {competitors.map((comp) => (
            <Link
              key={comp.name}
              href={comp.href}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all hover:scale-[1.02] flex items-center justify-between group"
            >
              <div>
                <span className="text-xs text-blue-400 font-mono">Comparison Guide</span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                  Nuncio vs {comp.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{comp.price}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

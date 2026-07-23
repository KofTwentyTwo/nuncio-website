"use client";

import React from "react";
import { Download, ArrowRight, ShieldCheck, Sparkles, Monitor } from "lucide-react";
import { ShellInteractivePreview } from "./ShellInteractivePreview";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Apple Product Headline Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Subtle Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] border border-black/10 text-slate-700 text-xs font-medium tracking-tight shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Nuncio 1.0 — Free Open Source Sovereign Suite</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            Email and Calendar.<br />
            <span className="apple-blue-text">Reimagined.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Four extraordinary ways to work. Powered by a single high-speed native engine that runs 100% locally on your machine.
          </p>

          {/* Apple Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#downloads"
              className="apple-button-primary px-6 py-3 text-sm font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Nuncio Free
            </a>
            <a
              href="#experiences"
              className="apple-button-secondary px-6 py-3 text-sm font-medium flex items-center gap-2"
            >
              Explore the 4 Interfaces
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Apple Trust Feature Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Local Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Zero Telemetry / No Tracking
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-purple-600" />
              macOS, Linux &amp; Windows
            </span>
          </div>
        </div>

        {/* Featured Desktop GUI & Interactive Preview Container */}
        <div className="pt-4">
          <ShellInteractivePreview />
        </div>
      </div>
    </section>
  );
}

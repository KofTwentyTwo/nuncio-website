"use client";

import React from "react";
import { Download, ArrowRight, ShieldCheck, Sparkles, Monitor, Code } from "lucide-react";
import { ShellInteractivePreview } from "./ShellInteractivePreview";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Product Headline Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Nuncio 1.0 — 100% Free and 100% Open Source</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Email and Calendar.<br />
            <span className="gradient-text">Reimagined.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Four extraordinary ways to work. 100% Free and 100% Open Source mail and calendar suite running locally on your machine.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#downloads"
              className="apple-button-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Nuncio v1.0.0
            </a>
            <a
              href="#experiences"
              className="apple-button-secondary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              Explore the 4 Interfaces
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Feature Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Local Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <Code className="w-4 h-4 text-cyan-400" />
              100% Free &amp; Open Source
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Zero Telemetry / No Tracking
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-purple-400" />
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

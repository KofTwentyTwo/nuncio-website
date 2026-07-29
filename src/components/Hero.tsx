"use client";

import React from "react";
import { Bell, ArrowRight, ShieldCheck, Sparkles, Monitor, Code, FileCheck } from "lucide-react";
import { ShellInteractivePreview } from "./ShellInteractivePreview";
import { GithubIcon } from "./GithubIcon";
import { AvailableNow, StatusBadge } from "./StatusBadge";
import { ROADMAP_URL, GITHUB_URL } from "@/lib/status";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Product Headline Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Nuncio — Sovereign, Fast &amp; 100% Open Source. Under active construction.</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Email Rebuilt for Today.<br />
            <span className="gradient-text">Private, Fast &amp; AI-Integrated.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            No paid subscriptions, closed formats, or locked-away data. We&apos;re building four extraordinary interfaces, an AI-driven NSQL filter engine, and cryptographic audit logs on a single sovereign core — in the open, from day one.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#downloads"
              className="apple-button-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Notify me at launch
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              Follow the build on GitHub
            </a>
            <a
              href={ROADMAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              See the roadmap
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Feature Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Local AES-256 encryption at rest
              <StatusBadge variant="planned" />
            </span>
            <span className="flex items-center gap-1.5">
              <Code className="w-4 h-4 text-cyan-400" />
              100% Free &amp; Open Source
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-purple-400" />
              HMAC Cryptographic WORM Audit Logs
              <AvailableNow />
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-blue-400" />
              Native apps for macOS, Linux &amp; Windows
              <StatusBadge variant="planned" />
            </span>
          </div>
        </div>

        {/* Interactive product-preview widget */}
        <div className="pt-4">
          <ShellInteractivePreview />
        </div>
      </div>
    </section>
  );
}

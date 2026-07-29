"use client";

import React, { useState } from "react";
import { Bell, Check, Copy, ArrowRight, Terminal, MapPin } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";

export function DownloadsSection() {
  const [copiedBuild, setCopiedBuild] = useState(false);

  const buildCmd = "git clone https://github.com/KofTwentyTwo/nuncio.git && cargo build --workspace";

  const handleCopyBuild = () => {
    navigator.clipboard.writeText(buildCmd);
    setCopiedBuild(true);
    setTimeout(() => setCopiedBuild(false), 2000);
  };

  return (
    <section id="downloads" className="py-20 border-t border-white/10 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Bell className="w-3.5 h-3.5" />
            <span>Nuncio is pre-alpha — there is no installer yet</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Be there for <span className="gradient-text">launch day</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            There&apos;s no packaged app to download today. Follow the build in the open on GitHub, watch the
            roadmap for milestones, or build it yourself from source right now.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Follow the build */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800/60 text-slate-200 flex items-center justify-center mx-auto border border-white/10">
                <GithubIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Follow the build</h3>
              <p className="text-xs text-gray-300">
                Every commit, PR, and milestone happens in public. Star the repo to watch progress.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl gradient-bg font-bold text-white text-xs shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              Follow the build on GitHub
            </a>
          </div>

          {/* Roadmap */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800/60 text-slate-200 flex items-center justify-center mx-auto border border-white/10">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">See the roadmap</h3>
              <p className="text-xs text-gray-300">
                See exactly what&apos;s shipped, what&apos;s in progress, and what&apos;s planned before v1.
              </p>
            </div>
            <a
              href={ROADMAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 font-bold text-white text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              See the roadmap
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Notify me at launch */}
        <div className="max-w-xl mx-auto space-y-4">
          <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
            Notify me at launch
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl gradient-bg font-bold text-white text-xs shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              Watch on GitHub for releases
            </a>
            <a
              href={ROADMAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 font-bold text-white text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              See the roadmap
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-center text-[11px] text-slate-500">
            No email list exists to sign up for. On GitHub, set Watch → Custom → Releases on the repo and
            you&apos;ll get notified the moment there&apos;s a build worth installing.
          </p>
        </div>

        {/* Build from source today */}
        <div className="max-w-3xl mx-auto space-y-3">
          <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            Developer? You can build it from source right now
          </h4>
          <div className="bg-slate-900/90 border border-white/10 p-3 px-4 rounded-xl flex items-center justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center gap-3 text-gray-300 overflow-x-auto">
              <span className="text-amber-400 font-bold">$</span>
              <span>{buildCmd}</span>
            </div>
            <button
              onClick={handleCopyBuild}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all shrink-0 ml-2"
            >
              {copiedBuild ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <p className="text-center text-[11px] text-slate-500">
            Clones the daemon (<code>nunciod</code>) and reference CLI (<code>nuncio-cli</code>) — no packaged
            installer, no GUI, no TUI yet.
          </p>
        </div>
      </div>
    </section>
  );
}

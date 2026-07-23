"use client";

import React, { useState } from "react";
import { Download, Terminal, Check, Copy, Laptop, Command } from "lucide-react";

export function DownloadsSection() {
  const [copiedBrew, setCopiedBrew] = useState(false);
  const [copiedCargo, setCopiedCargo] = useState(false);

  const brewCmd = "brew install koftwentytwo/tap/nuncio";
  const cargoCmd = "cargo install nuncio-cli nuncio-tui nuncio-mcp";

  const handleCopyBrew = () => {
    navigator.clipboard.writeText(brewCmd);
    setCopiedBrew(true);
    setTimeout(() => setCopiedBrew(false), 2000);
  };

  const handleCopyCargo = () => {
    navigator.clipboard.writeText(cargoCmd);
    setCopiedCargo(true);
    setTimeout(() => setCopiedCargo(false), 2000);
  };

  return (
    <section id="downloads" className="py-20 border-t border-white/10 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Download className="w-3.5 h-3.5" />
            <span>Install &amp; Download Nuncio (Latest Release)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Available for <span className="gradient-text">macOS, Windows &amp; Linux</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Free and open-source under MIT &amp; Apache-2.0 licenses. Choose your preferred installer or package manager below.
          </p>
        </div>

        {/* GUI Installers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* macOS */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
                <Command className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">macOS Universal</h3>
              <p className="text-xs text-gray-300">Supports Apple Silicon (M1/M2/M3/M4) &amp; Intel x64.</p>
            </div>
            <a
              href="https://github.com/KofTwentyTwo/nuncio/releases/latest"
              className="w-full py-3 rounded-xl gradient-bg font-bold text-white text-xs shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download macOS Release (.DMG)
            </a>
          </div>

          {/* Windows */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/30">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Windows 10 / 11</h3>
              <p className="text-xs text-gray-300">Native WiX Installer (.msi) with Windows Keyring support.</p>
            </div>
            <a
              href="https://github.com/KofTwentyTwo/nuncio/releases/latest"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 font-bold text-white text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Windows Release (.MSI)
            </a>
          </div>

          {/* Linux */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/30">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Linux Standalone</h3>
              <p className="text-xs text-gray-300">Universal AppImage &amp; Tarball for Ubuntu, Fedora, Arch.</p>
            </div>
            <a
              href="https://github.com/KofTwentyTwo/nuncio/releases/latest"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 font-bold text-white text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-purple-400" />
              Download Linux Release (.AppImage)
            </a>
          </div>
        </div>

        {/* Package Manager Options */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Package Manager Commands</h4>
          
          {/* Homebrew */}
          <div className="bg-slate-900/90 border border-white/10 p-3 px-4 rounded-xl flex items-center justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center gap-3 text-gray-300 overflow-x-auto">
              <span className="text-amber-400 font-bold">$</span>
              <span>{brewCmd}</span>
            </div>
            <button
              onClick={handleCopyBrew}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all shrink-0 ml-2"
            >
              {copiedBrew ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Cargo */}
          <div className="bg-slate-900/90 border border-white/10 p-3 px-4 rounded-xl flex items-center justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center gap-3 text-gray-300 overflow-x-auto">
              <span className="text-amber-400 font-bold">$</span>
              <span>{cargoCmd}</span>
            </div>
            <button
              onClick={handleCopyCargo}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-all shrink-0 ml-2"
            >
              {copiedCargo ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

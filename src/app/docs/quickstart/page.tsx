import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Download, Terminal, Check, Copy, Sparkles, Shield, Monitor, Layers } from "lucide-react";

export const metadata = {
  title: "Quickstart & Installation Guide — Nuncio Docs",
  description: "Comprehensive step-by-step guide to installing Nuncio across macOS, Windows, Linux, Homebrew, and Cargo Rust binaries.",
};

export default function QuickstartDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="quickstart">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Getting Started • Step 1</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Download className="w-8 h-8 text-amber-400 shrink-0" />
                Quickstart &amp; Multi-Platform Installation
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio is 100% free, sovereign, and open-source under MIT &amp; Apache-2.0 licenses. Choose your target platform below for instant setup.
              </p>
            </div>

            {/* Homebrew section */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                Option 1: macOS &amp; Linux via Homebrew Tap
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The fastest way to install Nuncio CLI, TUI, MCP, and daemon binaries on macOS and Linux is using our official Homebrew tap:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Add tap and install all Nuncio workspace binaries
brew tap koftwentytwo/tap
brew install nuncio`}
              </pre>
            </div>

            {/* Cargo section */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Option 2: Cargo Rust Crates (Cross-Platform)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you have the Rust toolchain installed, build and install directly from crates.io with native CPU optimizations:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`cargo install nuncio-cli nuncio-tui nuncio-mcp nunciod`}
              </pre>
            </div>

            {/* Standalone Desktop Package Installers */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-purple-400" />
                Option 3: Pre-Packaged Desktop GUI Installers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">macOS Universal</span>
                  <p className="text-slate-400">Apple Silicon (M1-M4) &amp; Intel x64 `.dmg` disk image.</p>
                  <a href="https://github.com/KofTwentyTwo/nuncio/releases/latest" className="text-blue-400 font-bold hover:underline inline-block pt-1">Download .DMG →</a>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">Windows 10 / 11</span>
                  <p className="text-slate-400">WiX `.msi` installer with Windows DPAPI Keyring integration.</p>
                  <a href="https://github.com/KofTwentyTwo/nuncio/releases/latest" className="text-cyan-400 font-bold hover:underline inline-block pt-1">Download .MSI →</a>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">Linux Standalone</span>
                  <p className="text-slate-400">Universal `.AppImage` &amp; Tarball for Ubuntu, Fedora, Arch.</p>
                  <a href="https://github.com/KofTwentyTwo/nuncio/releases/latest" className="text-purple-400 font-bold hover:underline inline-block pt-1">Download .AppImage →</a>
                </div>
              </div>
            </div>

            {/* Hybrid Daemon Topology */}
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-3">
              <span className="text-blue-300 font-bold text-sm block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Daemon Auto-Spawning &amp; IPC IPC Architecture (`nunciod`)
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Nuncio operates on a zero-configuration hybrid daemon architecture. Launching any presentation interface (`nuncio`, `nuncio-tui`, `nuncio-gui`, `nuncio-mcp`) automatically auto-spawns `nunciod` in the background. All presentation shells share a single-writer SQLite WAL database instance with zero race conditions.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

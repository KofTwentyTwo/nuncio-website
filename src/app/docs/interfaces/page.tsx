import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Monitor, Terminal, Code, Bot, Keyboard, Sparkles } from "lucide-react";

export const metadata = {
  title: "Four Presentation Shells & Vim Keybindings Reference — Nuncio Docs",
  description: "Complete guide and Vim keybinding reference table for Nuncio Desktop GUI, Vim Ratatui Terminal TUI, POSIX CLI, and Native MCP AI Server.",
};

export default function InterfacesDocPage() {
  const vimKeybindings = [
    { key: "j / k", action: "Move message focus cursor down / up" },
    { key: "h / l", action: "Switch pane focus between Folder Tree and Message Preview" },
    { key: "g i", action: "Jump focus directly to Inbox" },
    { key: "e", action: "Archive focused email chord" },
    { key: "s", action: "Toggle Star / Flag status" },
    { key: "# / d", action: "Move email to Trash" },
    { key: "f", action: "Open NSQL Filter Rules Modal" },
    { key: "a", action: "Open Account Switcher Modal" },
    { key: "/", action: "Focus FTS5 Trigram Full-Text Search Bar" },
    { key: "o", action: "Open raw HTML email in system browser" },
    { key: "u", action: "Check for background auto-updates" },
    { key: "q", action: "Quit TUI (daemon stays running in background)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="interfaces">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">User Interfaces • Reference</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Monitor className="w-8 h-8 text-cyan-400 shrink-0" />
                Four Presentation Shells &amp; Keyboard Motion Table
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio delivers 100% feature parity across all 4 presentation interfaces, synchronized in microsecond time over local length-prefixed IPC socket streams.
              </p>
            </div>

            {/* Vim Keybinding Reference */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-cyan-400" />
                Vim Ratatui TUI (`nuncio-tui`) Motion Reference Table
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {vimKeybindings.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/10 flex justify-between items-center">
                    <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">{item.key}</span>
                    <span className="text-slate-300 text-right">{item.action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Four Shell Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-blue-400 text-sm block">1. Tauri v2 Desktop GUI</span>
                <p className="text-slate-300 leading-relaxed">
                  Glassmorphic dark/light split-panes, live NSQL rule editor, WYSIWYG rich text composer, and native OS desktop notifications.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-cyan-400 text-sm block">2. Vim Ratatui Terminal TUI</span>
                <p className="text-slate-300 leading-relaxed">
                  Sub-millisecond keyboard velocity, Kitty/iTerm2 inline image rendering, HTML-to-ANSI formatting, and single-key triage.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-purple-400 text-sm block">3. POSIX Scriptable CLI</span>
                <p className="text-slate-400 leading-relaxed">
                  Scriptable subcommand suite (`nuncio mail list`, `nuncio mail export`, `nuncio filter apply`) with deterministic `--json` piping.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="font-bold text-emerald-400 text-sm block">4. Native MCP AI Server</span>
                <p className="text-slate-300 leading-relaxed">
                  Stdio stream protocol connecting Claude Desktop, Antigravity, and Cursor with McpAgentPolicy RBAC safety enclaves.
                </p>
              </div>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

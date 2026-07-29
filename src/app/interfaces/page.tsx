import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Code, Terminal, Bot, Sparkles, CheckCircle2, ArrowRight, GitBranch, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import type { StatusVariant } from "@/lib/status";

export const metadata = {
  title: "Four Interfaces — Nuncio Desktop GUI, Terminal TUI, CLI & MCP AI Client",
  description: "The vision for Nuncio's four interfaces over one gRPC contract: a Desktop GUI, a keyboard-driven Terminal TUI, the POSIX CLI (available now), and an MCP AI client. See what's built today versus planned.",
};

interface Interface {
  id: string;
  title: string;
  status: StatusVariant;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  description: string;
  highlights: string[];
  sampleCommand: string;
}

export default function InterfacesPage() {
  const experiences: Interface[] = [
    {
      id: "gui",
      title: "1. The Desktop Workspace",
      status: "planned",
      subtitle: "Native visual elegance for everyday productivity",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/40 bg-purple-500/10 hover:border-purple-500/70 shadow-lg shadow-purple-500/10",
      description:
        "A native desktop app, planned as a thin client over the same gRPC API every other interface uses: a clean inbox, sandboxed HTML viewing, visual drag-and-drop rule creation, and interactive calendar planning.",
      highlights: [
        "Sandboxed HTML email rendering with tracking-pixel neutralization",
        "Visual drag-and-drop rule builder, account switcher, and interactive calendar",
        "Native performance targeting minimal memory & battery footprint",
        "A separate client repo consuming Nuncio's frozen gRPC contract",
      ],
      sampleCommand: "Nuncio Desktop — planned for macOS, Windows, Linux",
    },
    {
      id: "tui",
      title: "2. The Vim-Fueled Terminal TUI",
      status: "planned",
      subtitle: "Keyboard-driven navigation for distraction-free triage",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      description:
        "A Ratatui terminal client on the roadmap for people who refuse to touch the mouse: Vim keybindings, single-key chords, and split views, all driven by the same engine as everything else.",
      highlights: [
        "Vim motions (j/k/h/l/g i/e/s) & single-key archive/delete chords",
        "Interactive NSQL rule editor & dry-run condition tester built-in",
        "Full split-pane layout with unread badges and live log streaming",
        "Runs in any terminal tab or SSH session, no GUI required",
      ],
      sampleCommand: "nuncio-tui — planned",
    },
    {
      id: "cli",
      title: "3. The Lightning POSIX CLI",
      status: "available-now",
      subtitle: "Unmatched command-line speed & automation",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      description:
        "The in-repo reference client and E2E driver for the engine. Build it from source today to sync IMAP/SMTP accounts, search, and drive the daemon over gRPC directly from your shell.",
      highlights: [
        "Pipeable JSON outputs for jq & shell scripts (--json)",
        "Talks to the headless background sync daemon (nunciod) over gRPC",
        "Local SQLite FTS5 full-text search over your synced mail",
        "Multi-account IMAP sync and SMTP send, tested against mock servers",
      ],
      sampleCommand: "cargo run -p nuncio-cli -- mail search --query 'urgent'",
    },
    {
      id: "mcp",
      title: "4. The Native LLM Agent Co-Pilot (MCP)",
      status: "planned",
      subtitle: "AI agents working alongside you, under a governed gateway",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      description:
        "A planned MCP bridge exposing Nuncio's mail, calendar, and rule tools to LLM agents over stdio — never handing agents raw provider credentials, always through a policy gateway.",
      highlights: [
        "Ask an agent to summarize long threads or draft replies",
        "Schedule meetings & check availability via natural language",
        "Designed around RBAC capability flags & account/folder filters",
        "Every AI tool call recorded in the WORM audit ledger",
      ],
      sampleCommand: "nuncio-mcp --stdio — planned",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Design goal: one contract, no second-class clients</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Four Great Interfaces.<br />
            <span className="gradient-text">One Engine, No Drift.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Every interface is designed against a single versioned gRPC contract so none of them can drift out of
            sync with the others. Today the CLI is the only one that exists — build it from source now. The
            desktop GUI, terminal TUI, and MCP bridge are planned thin clients over that same contract.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`glass-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 ${exp.accentColor}`}
              >
                {/* Top Block: Header + Description */}
                <div className="space-y-4">
                  {/* Header Bar */}
                  <div className="flex items-start sm:items-center justify-between gap-3 w-full min-h-[3.5rem]">
                    <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 shadow-sm shrink-0">
                        {exp.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base sm:text-lg font-bold text-white leading-tight">{exp.title}</h2>
                        <p className="text-xs font-medium text-slate-400 leading-normal mt-0.5">{exp.subtitle}</p>
                      </div>
                    </div>
                    <StatusBadge variant={exp.status} className="shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed min-h-[4.25rem]">{exp.description}</p>
                </div>

                {/* Middle Block: User Benefits Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 flex-1 flex flex-col justify-start min-h-[9.5rem]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {exp.status === "available-now" ? "What works today:" : "The vision:"}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-200 font-medium">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Block: Footer Command Pill */}
                <div className="pt-4 mt-auto">
                  <div className="px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
                    <span className="truncate whitespace-nowrap">{exp.sampleCommand}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            Follow the build on GitHub
          </a>
          <a
            href={ROADMAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
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

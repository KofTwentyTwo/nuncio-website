import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Code, Terminal, Bot, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Keyboard, Activity } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Four Interfaces — Nuncio Desktop GUI, Vim TUI, POSIX CLI & MCP AI Server",
  description: "Explore Nuncio's 4 distinct user interfaces: Glassmorphic Desktop GUI, Vim Ratatui Terminal TUI, Scriptable POSIX CLI, and Native Model Context Protocol (MCP) AI Server.",
};

export default function InterfacesPage() {
  const experiences = [
    {
      id: "gui",
      title: "1. The Glassmorphic Desktop GUI (Featured)",
      badgeText: "Most Popular",
      subtitle: "Native Desktop Visual Elegance & Micro-Interactions",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/40 bg-purple-500/10 hover:border-purple-500/70 shadow-lg shadow-purple-500/10",
      badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold",
      description:
        "The primary desktop application built with Tauri v2 and React. Offers rich dark mode glassmorphism, responsive split panes, HTML sandboxed email viewing, visual drag-and-drop rule creation, and interactive calendar planning.",
      highlights: [
        "Tauri v2 native performance with minimal memory & CPU footprint",
        "Sandboxed HTML email rendering with strict tracking protection",
        "Visual drag-and-drop rule builder, account switcher, and interactive calendar",
        "Customizable glassmorphic themes with instant light/dark toggle",
      ],
      sampleCommand: "Nuncio.app / Nuncio.exe (Tauri v2 Native Desktop)",
    },
    {
      id: "tui",
      title: "2. The Vim-Fueled Terminal TUI",
      badgeText: "Power Users",
      subtitle: "Keyboard-Driven Navigation for Distraction-Free Flow",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-semibold",
      description:
        "A blazing-fast Ratatui terminal application built for power users who refuse to touch the mouse. Triage hundreds of emails per minute using Vim keybindings, single-key chords, and instant split views.",
      highlights: [
        "Vim motions (j/k/h/l/g i/e/s) & single-key archive/delete chords",
        "Interactive NSQL rule editor & dry-run condition tester built-in",
        "Full split-pane layout with unread badges and live log streaming",
        "Zero-latency rendering (<16ms frame rate target)",
      ],
      sampleCommand: "nuncio-tui (press 'f' for rules, 'a' for accounts)",
    },
    {
      id: "cli",
      title: "3. The Lightning POSIX CLI",
      badgeText: "Automations",
      subtitle: "Unmatched Command-Line Speed & Automation",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      badgeBg: "bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold",
      description:
        "Designed for developers, sysadmins, and shell enthusiasts who want zero-friction scriptability. Query inboxes, search calendars, and trigger automations directly from your shell with deterministic JSON outputs.",
      highlights: [
        "Pipeable JSON outputs for jq & shell scripts (--json)",
        "Headless background sync daemon (nunciod)",
        "Instant search across 100,000+ messages in under 10 milliseconds",
        "Complete CLI subcommands for accounts, mail, calendar, and rules",
      ],
      sampleCommand: "nuncio mail search --query 'urgent' --json",
    },
    {
      id: "mcp",
      title: "4. The Native LLM Agent Co-Pilot (MCP)",
      badgeText: "AI Assistant",
      subtitle: "AI Agents Working Directly Alongside You",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-bold",
      description:
        "Exposes Nuncio's local database and actions to LLM agents (Claude Desktop, Antigravity CLI, Cursor, ChatGPT) via Anthropic's Model Context Protocol (MCP) over standard stdio JSON-RPC streams.",
      highlights: [
        "Ask AI agents to summarize long threads or draft replies automatically",
        "Schedule calendar meetings & check availability via natural language",
        "McpAgentPolicy enforcing RBAC capability flags & account/folder filters",
        "Automatic sensitive data redaction masking SSNs and credit cards",
      ],
      sampleCommand: "nuncio-mcp --stdio",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>100% Multi-Interface Parity Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Four Great Interfaces.<br />
            <span className="gradient-text">Zero Compromises.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Choose the exact interface that fits your flow. Every capability is 100% synchronized in real time through the background daemon IPC server.
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
                    <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap shrink-0 ${exp.badgeBg}`}>
                      {exp.badgeText}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed min-h-[4.25rem]">{exp.description}</p>
                </div>

                {/* Middle Block: User Benefits Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 flex-1 flex flex-col justify-start min-h-[9.5rem]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Features:</span>
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

        <div className="max-w-4xl mx-auto px-4 text-center pt-6">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Nuncio for Your Platform
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

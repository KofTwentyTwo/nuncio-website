"use client";

import React from "react";
import { Terminal, Code, Monitor, Bot, Zap, Keyboard, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export function FourExperiencesSection() {
  const experiences = [
    {
      id: "gui",
      title: "1. The Glassmorphic Desktop GUI (Featured)",
      subtitle: "Native Desktop Visual Elegance & Micro-Interactions",
      icon: <Monitor className="w-6 h-6 text-purple-600" />,
      accentColor: "border-purple-200 bg-white hover:border-purple-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200 font-bold",
      description:
        "Our flagship primary interface. A premium native desktop app crafted with dark mode glassmorphism, responsive split panes, rich email inspectors, and interactive calendars — backed by native Rust performance.",
      highlights: [
        "Tauri v2 native performance with minimal memory & CPU footprint",
        "Sandboxed HTML email rendering with strict tracking protection",
        "Visual drag-and-drop rule builder, account switcher, and interactive calendar",
      ],
      sampleCommand: "Nuncio.app / Nuncio.exe (Tauri v2 Native Desktop)",
    },
    {
      id: "tui",
      title: "2. The Vim-Fueled Terminal TUI",
      subtitle: "Keyboard-Driven Navigation for Distraction-Free Flow",
      icon: <Code className="w-6 h-6 text-cyan-600" />,
      accentColor: "border-cyan-200 bg-white hover:border-cyan-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200 font-semibold",
      description:
        "A blazing-fast Ratatui terminal application built for power users who refuse to touch the mouse. Triage hundreds of emails per minute using Vim keybindings, single-key chords, and instant split views.",
      highlights: [
        "Vim motions (`j`/`k`/`h`/`l`/`g i`/`e`/`s`) & single-key triage",
        "Interactive NSQL rule editor & dry-run tester built-in",
        "Full split-pane layout with unread badges and live logs",
      ],
      sampleCommand: "nuncio-tui (press 'f' for rules, 'a' for accounts)",
    },
    {
      id: "cli",
      title: "3. The Lightning POSIX CLI",
      subtitle: "Unmatched Command-Line Speed & Automation",
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
      accentColor: "border-blue-200 bg-white hover:border-blue-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200 font-semibold",
      description:
        "Designed for developers, sysadmins, and shell enthusiasts who want zero-friction scriptability. Query inboxes, search calendars, and trigger automations directly from your shell with deterministic JSON outputs.",
      highlights: [
        "Pipeable JSON outputs for jq & shell scripts (`--json`)",
        "Headless background sync daemon (`nunciod`)",
        "Instant search across 100,000+ messages in microsecond time",
      ],
      sampleCommand: "nuncio mail search --query 'urgent' --json",
    },
    {
      id: "mcp",
      title: "4. The Native LLM Agent Co-Pilot (MCP)",
      subtitle: "AI Agents Working Directly Alongside You",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      badgeBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      description:
        "Built natively on the Model Context Protocol (MCP). Connect Claude Desktop, Google Antigravity, or Cursor IDE to let AI agents autonomously summarize threads, schedule calendar events, and execute triage.",
      highlights: [
        "Native MCP tools (`nuncio_mail_send`, `nuncio_cal_create_event`)",
        "Human-in-the-Loop (HITL) prompt interception safety controls",
        "Zero cloud data sharing — AI operates against local database",
      ],
      sampleCommand: "nuncio-mcp (Stdio MCP Server Protocol)",
    },
  ];

  return (
    <section id="experiences" className="py-20 relative bg-[#090D16] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Four Exceptional Experiences
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Sovereign Suite. Four Extraordinary Ways to Master Mail &amp; Calendar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Work exactly how you want. Choose the presentation experience that fits your workflow — with 100% feature parity across every shell.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-2xl glass-panel border transition-all hover:scale-[1.02] flex flex-col justify-between ${exp.accentColor}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10">{exp.icon}</div>
                    <div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono border font-semibold ${exp.badgeBg}`}>
                        {exp.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{exp.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Key Capabilities:</span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="truncate max-w-[280px]">{exp.sampleCommand}</span>
                <a href="#downloads" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold">
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

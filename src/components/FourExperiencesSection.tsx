"use client";

import React from "react";
import { Terminal, Code, Monitor, Bot, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import type { StatusVariant } from "@/lib/status";

export function FourExperiencesSection() {
  const experiences: Array<{
    id: string;
    title: string;
    status: StatusVariant;
    subtitle: string;
    icon: React.ReactNode;
    accentColor: string;
    description: string;
    userBenefits: string[];
    sampleCommand: string;
  }> = [
    {
      id: "gui",
      title: "1. The Desktop Workspace",
      status: "planned",
      subtitle: "Beautiful visual elegance for everyday productivity",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/40 bg-purple-500/10 hover:border-purple-500/70 shadow-lg shadow-purple-500/10",
      description:
        "A native desktop app, planned as a thin client over the same gRPC API every other interface uses, designed for seamless daily flow: a clean inbox, visual calendar scheduling, and drag-and-drop filter creation.",
      userBenefits: [
        "Sandboxed HTML email inspector with tracking-pixel neutralization",
        "Unified inbox across all your personal, work, and custom domain accounts",
        "Visual drag-and-drop rule builder and interactive calendar planner",
        "Native performance targeting minimal RAM and battery usage",
      ],
      sampleCommand: "Nuncio Desktop App — planned for macOS, Windows, Linux",
    },
    {
      id: "tui",
      title: "2. The Vim Keyboard Terminal",
      status: "planned",
      subtitle: "Keyboard velocity for triage without touching the mouse",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      description:
        "A Ratatui-based terminal client on the roadmap for developers and power users who want maximum speed: Vim motions, single-key triage chords, and split-view previews, all driven by the same engine.",
      userBenefits: [
        "Vim navigation (`j`/`k`/`h`/`l`/`g i`) & single-key archive/delete chords",
        "Instant split-pane previewer for text & HTML email content",
        "Interactive NSQL rule editor & dry-run condition tester built in",
        "Runs directly in any terminal tab or SSH session",
      ],
      sampleCommand: "nuncio-tui — planned",
    },
    {
      id: "cli",
      title: "3. The Developer Command Shell",
      status: "available-now",
      subtitle: "Instant inbox queries & automation right from your shell",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      description:
        "The in-repo reference client and E2E driver for the engine. Build it from source today to search messages, sync IMAP/SMTP accounts, and drive the daemon over its gRPC API directly from your shell.",
      userBenefits: [
        "Pipeable JSON outputs for shell scripts & custom automations (`--json`)",
        "Local SQLite FTS5 full-text search over your synced mail",
        "Talks to the headless background sync daemon (`nunciod`) over gRPC",
        "Multi-account IMAP sync and SMTP send, tested against mock servers",
      ],
      sampleCommand: "cargo run -p nuncio-cli -- mail search --query 'urgent'",
    },
    {
      id: "mcp",
      title: "4. The AI Executive Assistant",
      status: "planned",
      subtitle: "AI co-pilots working alongside you with granular privacy",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      description:
        "A governed MCP bridge, planned as a separate client, that lets local LLMs and AI agents (Claude, Cursor, and others) talk to Nuncio through a policy gateway — never handed raw IMAP or provider credentials.",
      userBenefits: [
        "Aggregate multiple accounts into a single local vault the agent can query",
        "Controlled AI gateway: no direct, uncontrolled access to raw providers",
        "Every AI tool call recorded in the WORM audit ledger",
        "Built on the same frozen gRPC contract as every other client",
      ],
      sampleCommand: "nuncio-mcp --stdio — planned",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Four Interfaces, One Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Engine. <span className="gradient-text">Four Ways to Work.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A sleek desktop window, lightning terminal keybindings, Unix shell scripts, and AI co-piloting — all
            built on one gRPC contract. The reference CLI is real today; the rest are on the roadmap.
          </p>
        </div>

        {/* 4 User Experiences Bento Grid */}
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
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{exp.title}</h3>
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
                  {exp.userBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Block: Footer Command Pill (Anchored to bottom) */}
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
    </section>
  );
}

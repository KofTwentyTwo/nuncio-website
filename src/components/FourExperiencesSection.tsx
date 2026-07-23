"use client";

import React from "react";
import { Terminal, Code, Monitor, Bot, Zap, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function FourExperiencesSection() {
  const experiences = [
    {
      id: "gui",
      title: "1. The Desktop Workspace (Featured GUI)",
      badgeText: "Most Popular",
      subtitle: "Beautiful Visual Elegance for Everyday Productivity",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/40 bg-purple-500/10 hover:border-purple-500/70 shadow-lg shadow-purple-500/10",
      badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold",
      description:
        "The primary desktop application designed for seamless daily flow. Enjoy a clean, distraction-free inbox with rich email previewing, visual calendar scheduling, and drag-and-drop filter creation.",
      userBenefits: [
        "Sandboxed HTML email inspector with automatic tracking pixel neutralization",
        "Unified inbox for all your personal, work, and custom domain accounts",
        "Visual drag-and-drop rule builder and interactive calendar planner",
        "Blazing-fast native performance with minimal RAM and battery usage",
      ],
      sampleCommand: "Nuncio Desktop App (macOS, Windows, Linux)",
    },
    {
      id: "tui",
      title: "2. The Vim Keyboard Terminal (Ratatui TUI)",
      badgeText: "Power Users",
      subtitle: "Keyboard Velocity for Triage Without Touching the Mouse",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-semibold",
      description:
        "Built for developers and power users who demand maximum speed. Process hundreds of inbox messages per minute using intuitive Vim motions, single-key triage chords, and split-view previews.",
      userBenefits: [
        "Vim navigation (`j`/`k`/`h`/`l`/`g i`) & single-key archive/delete chords",
        "Instant split-pane previewer for text & HTML email content",
        "Interactive NSQL rule editor & dry-run condition tester built-in",
        "Runs directly in any terminal tab or SSH session",
      ],
      sampleCommand: "nuncio-tui (press 'f' for rules, 'a' for accounts)",
    },
    {
      id: "cli",
      title: "3. The Developer Command Shell (POSIX CLI)",
      badgeText: "Automations",
      subtitle: "Instant Inbox Queries & Automation Right From Your Shell",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      badgeBg: "bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold",
      description:
        "Designed for developers, sysadmins, and shell enthusiasts who want effortless scriptability. Search messages, query calendar availability, and trigger custom webhooks directly from command scripts.",
      userBenefits: [
        "Pipeable JSON outputs for shell scripts & custom automations (`--json`)",
        "Instant search across 100,000+ messages in under 10 milliseconds",
        "Headless background sync daemon (`nunciod`) keeps mail updated silently",
        "Simple single-command email dispatching & account management",
      ],
      sampleCommand: "nuncio mail search --query 'urgent' --json",
    },
    {
      id: "mcp",
      title: "4. The AI Executive Assistant (MCP Agent)",
      badgeText: "AI Assistant",
      subtitle: "AI Co-Pilots Working Alongside You with Granular Privacy",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-bold",
      description:
        "Aggregate ALL your email accounts into one local hub. Connect local LLMs and AI agents (Claude, Antigravity, Cursor) through Nuncio's security gateway—never granting uncontrolled direct credentials to Gmail or IMAP. Controlled via WORM audits, RBAC policies, and microsecond SQLite speed.",
      userBenefits: [
        "Aggregate unlimited IMAP, JMAP & Gmail accounts into a single local vault",
        "Controlled AI Gateway: Zero uncontrolled direct access to raw email providers",
        "Immutable HMAC-SHA256 WORM audit ledger logs every AI tool call & email read",
        "Sub-10ms local FTS5 search delivers microsecond speed without cloud fees",
      ],
      sampleCommand: "nuncio-mcp --stdio (Native Model Context Protocol Server)",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Four Extraordinary User Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Engine. <span className="gradient-text">Four Ways to Work.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you prefer a sleek desktop window, lightning terminal keybindings, Unix shell scripts, or AI co-piloting — Nuncio fits your exact daily workflow.
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
                  <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap shrink-0 ${exp.badgeBg}`}>
                    {exp.badgeText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed min-h-[4.25rem]">{exp.description}</p>
              </div>

              {/* Middle Block: User Benefits Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 flex-1 flex flex-col justify-start min-h-[9.5rem]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key User Features:</span>
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

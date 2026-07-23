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
      icon: <Monitor className="w-6 h-6 text-purple-600" />,
      accentColor: "border-purple-200 bg-white hover:border-purple-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-purple-100 text-purple-800 border-purple-200 font-bold",
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
      icon: <Code className="w-6 h-6 text-cyan-600" />,
      accentColor: "border-cyan-200 bg-white hover:border-cyan-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-cyan-100 text-cyan-800 border-cyan-200 font-semibold",
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
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
      accentColor: "border-blue-200 bg-white hover:border-blue-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-blue-100 text-blue-800 border-blue-200 font-semibold",
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
      icon: <Bot className="w-6 h-6 text-emerald-600" />,
      accentColor: "border-emerald-200 bg-white hover:border-emerald-300 shadow-sm hover:shadow-xl",
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200 font-bold",
      description:
        "Empower AI agents (Claude Desktop, Antigravity, ChatGPT) to assist you with mail triage, calendar scheduling, and draft generation — backed by fine-grained security policies that protect your privacy.",
      userBenefits: [
        "Ask AI agents to summarize long email threads or draft replies automatically",
        "Schedule calendar meetings & check availability via natural language",
        "Granular security enclave: control exactly what data & folders AI agents can see",
        "Automatic sensitive data redaction: protects SSNs and credit cards before AI inspection",
      ],
      sampleCommand: "nuncio-mcp (Native Model Context Protocol Server)",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-tight shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Four Extraordinary User Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            One Engine. Four Ways to Work.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you prefer a sleek desktop window, lightning terminal keybindings, Unix shell scripts, or AI co-piloting — Nuncio fits your exact daily workflow.
          </p>
        </div>

        {/* 4 User Experiences Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`apple-card p-6 sm:p-8 space-y-6 ${exp.accentColor}`}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-xs font-medium text-slate-500">{exp.subtitle}</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${exp.badgeBg}`}>
                  {exp.badgeText}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>

              {/* User Benefits Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Key User Features:</span>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {exp.userBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Pill */}
              <div className="pt-2">
                <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
                  <span className="truncate">{exp.sampleCommand}</span>
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

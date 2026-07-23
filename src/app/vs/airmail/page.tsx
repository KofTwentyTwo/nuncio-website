import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Airmail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Airmail. Why settle for macOS-only locked client apps when Nuncio offers cross-platform parity across macOS, Windows, Linux, Terminal TUI, POSIX CLI, and AI MCP agents?",
  alternates: { canonical: "https://nuncio.mx/vs/airmail" },
  openGraph: {
    title: "Nuncio vs Airmail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Airmail. Cross-platform parity across macOS, Windows, Linux, TUI, CLI, and AI MCP agents 100% free.",
    url: "https://nuncio.mx/vs/airmail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Airmail",
    description: "Compare Nuncio vs Airmail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsAirmailPage() {
  const differentiators = [
    {
      title: "100% Cross-Platform",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio runs on macOS, Windows, Linux, and any terminal. Airmail is strictly locked to the Apple ecosystem.",
    },
    {
      title: "Zero Subscription Fees",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio is 100% free open source under MIT / Apache-2.0. Airmail requires Airmail Pro annual subscriptions for core features.",
    },
    {
      title: "Vim Ratatui Terminal TUI",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Triage thousands of messages directly inside your SSH session or terminal multiplexer with Vim chords (j/k/h/l, g i, e, s).",
    },
    {
      title: "NSQL Engine & WORM Audits",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Automate email triage with SQL rule statements and verify integrity with HMAC-SHA256 WORM cryptographic audit logs.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing Model", nuncioValue: "100% Free & Open Source", competitorValue: "$9.99/yr Pro Subscription", description: "Zero hidden costs or forced upgrades" },
    { feature: "OS Availability", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS & iOS Only", description: "Native binaries across all major operating systems" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Ratatui Vim terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration for shell scripts" },
    { feature: "AI Model Context Protocol (MCP)", nuncioValue: true, competitorValue: false, description: "Expose email tools to Claude & AI agents" },
    { feature: "WORM Audit Trail", nuncioValue: true, competitorValue: false, description: "Immutable cryptographic ledger" },
    { feature: "Local Data Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Standard macOS Keychain", description: "PayloadCipher encryption on disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "Basic EML Export", description: "Export entire accounts or NSQL result sets" },
    { feature: "Database Self-Healing", nuncioValue: true, competitorValue: false, description: "Automatic SQLite corruption recovery" },
    { feature: "HTML Email Sandboxing", nuncioValue: "Strict CSP + iframe", competitorValue: "Basic WebKit Render", description: "Neutralizes tracking pixels & remote scripts" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Airmail"
      competitorSlug="airmail"
      tagline="Why settle for macOS-only locked client apps when Nuncio offers cross-platform parity across macOS, Windows, Linux, Terminal TUI, POSIX CLI, and AI MCP agents?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="$9.99 / Year Pro Subscription"
      heroHeadline="Why settle for macOS-only locked client apps when Nuncio offers cross-platform parity across macOS, Windows, Linux, Terminal TUI, POSIX CLI, and AI MCP agents 100% free?"
      whySwitchParagraph="Airmail offers a clean macOS interface, but locks power users into Apple platforms and requires a Pro subscription for multi-account syncing. Nuncio provides equal visual polish across macOS, Windows, and Linux while adding a Vim Ratatui Terminal TUI, POSIX CLI, and native MCP AI agent integration."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Apple Mail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Apple Mail. Upgrade from basic legacy Apple Mail to Nuncio's NSQL filter engine, sub-10ms SQLite FTS5 search, Vim Terminal TUI, POSIX CLI, and native AI MCP support.",
  alternates: { canonical: "https://nuncio.mx/vs/apple-mail" },
  openGraph: {
    title: "Nuncio vs Apple Mail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Apple Mail. Sub-10ms SQLite search, Vim Terminal TUI, POSIX CLI, and native AI MCP support 100% free.",
    url: "https://nuncio.mx/vs/apple-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Apple Mail",
    description: "Compare Nuncio vs Apple Mail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsAppleMailPage() {
  const differentiators = [
    {
      title: "100% Cross-Platform",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Run Nuncio on macOS, Windows, and Linux. Apple Mail is strictly locked to Apple platforms.",
    },
    {
      title: "Sub-10ms FTS5 Search",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Instant search across 100,000+ messages using SQLite FTS5 trigram indexing instead of slow Spotlight indexing.",
    },
    {
      title: "Vim Ratatui Terminal TUI",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Triage emails inside your terminal session with single-key Vim chords. Apple Mail offers no terminal interface.",
    },
    {
      title: "NSQL Automation Engine",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Define powerful declarative SQL automation rules with full webhook, forwarding, and dry-run preview capabilities.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "OS Availability", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS & iOS Only", description: "Native binaries across desktop & server platforms" },
    { feature: "Full-Text Search Engine", nuncioValue: "Sub-10ms SQLite FTS5 Trigram", competitorValue: "macOS Spotlight Index", description: "Instant local search results" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "Native AI MCP Integration", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools & policies" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit log ledger" },
    { feature: "Automation Rule Engine", nuncioValue: "NSQL Declarative Rules", competitorValue: "Basic Mail Rules", description: "Full SQL syntax parser (WHEN/THEN rules)" },
    { feature: "Data-at-Rest Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Unencrypted Local SQLite", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "MBOX Only", description: "Export entire accounts or NSQL query results" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Apple Mail"
      competitorSlug="apple-mail"
      tagline="Upgrade from basic legacy Apple Mail to Nuncio's NSQL filter engine, sub-10ms SQLite FTS5 search, Vim Terminal TUI, POSIX CLI, and native AI MCP support."
      nuncioPrice="100% Free & Open Source"
      competitorPrice="Included with macOS (Apple Locked)"
      heroHeadline="Upgrade from basic legacy Apple Mail to Nuncio's NSQL filter engine, sub-10ms SQLite FTS5 search, Vim Terminal TUI, POSIX CLI, and native AI MCP support 100% free."
      whySwitchParagraph="Apple Mail is a decent default client for macOS, but lacks modern automation, power-user keyboard velocity, cross-platform support for Windows or Linux, and AI capabilities. Nuncio delivers native macOS glassmorphic beauty while extending full parity to terminal environments and AI agents."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

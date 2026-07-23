import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Mozilla Thunderbird — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Mozilla Thunderbird. Why rely on legacy single-threaded C++ code when Nuncio gives you memory-safe Rust performance, modern glassmorphic GUI, Vim Terminal TUI, POSIX CLI, and native AI MCP support?",
  alternates: { canonical: "https://nuncio.mx/vs/thunderbird" },
  openGraph: {
    title: "Nuncio vs Mozilla Thunderbird — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Mozilla Thunderbird. Memory-safe Rust performance, modern glassmorphic GUI, Vim TUI, POSIX CLI, and AI MCP support 100% free.",
    url: "https://nuncio.mx/vs/thunderbird",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Mozilla Thunderbird",
    description: "Compare Nuncio vs Mozilla Thunderbird. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsThunderbirdPage() {
  const differentiators = [
    {
      title: "Memory-Safe Rust Engine",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio is written from the ground up in memory-safe Rust. Thunderbird relies on decades-old C++/Gecko layout engines.",
    },
    {
      title: "4 Unified Interfaces",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Work across desktop GUI, Vim Ratatui Terminal TUI, POSIX CLI, and Model Context Protocol (MCP) AI agents with 100% feature parity.",
    },
    {
      title: "NSQL Automation Engine",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Write declarative SQL automation statements (WHEN/THEN) with dry-run preview evaluation instead of basic message filters.",
    },
    {
      title: "WORM Cryptographic Audits",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Record every automated match, webhook, and AI agent action in an immutable HMAC-SHA256 WORM audit log ledger.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Core Architecture", nuncioValue: "Memory-Safe Rust Workspace", competitorValue: "Legacy C++ / Gecko WebEngine", description: "Modern memory-safe architecture" },
    { feature: "Modern Glassmorphic GUI", nuncioValue: true, competitorValue: "Legacy XUL / HTML", description: "State-of-the-art visual aesthetic" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "Native AI MCP Integration", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools & policies" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit log ledger" },
    { feature: "Full-Text Search Latency", nuncioValue: "<10ms (SQLite FTS5)", competitorValue: "~150ms (Gloda Index)", description: "Instant offline trigram index" },
    { feature: "Data-at-Rest Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Unencrypted MBOX/SQLite", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "MBOX Export Only", description: "Export entire accounts or NSQL query results" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Mozilla Thunderbird"
      competitorSlug="thunderbird"
      tagline="Why rely on legacy single-threaded C++ code when Nuncio gives you memory-safe Rust performance, modern glassmorphic GUI, Vim Terminal TUI, POSIX CLI, and native AI MCP support?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="100% Free & Open Source"
      heroHeadline="Why rely on legacy single-threaded C++ code when Nuncio gives you memory-safe Rust performance, modern glassmorphic GUI, Vim Terminal TUI, POSIX CLI, and native AI MCP support 100% free?"
      whySwitchParagraph="Thunderbird is a pioneer of open-source email, but struggles under decades of legacy C++/Gecko codebase complexity and lacks modern multi-interface support. Nuncio carries the open-source banner into the modern era—built in memory-safe Rust with multi-shell parity for desktop, terminal, CLI, and AI agents."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

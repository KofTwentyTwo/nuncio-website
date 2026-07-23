import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Superhuman — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Superhuman. Why pay $360/year for closed cloud email when Nuncio gives you local SQLite WAL speed, 4 unified interfaces, Vim keyboard velocity, and native AI MCP agent integration 100% free?",
  alternates: { canonical: "https://nuncio.mx/vs/superhuman" },
  openGraph: {
    title: "Nuncio vs Superhuman — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Superhuman. Why pay $360/year for closed cloud email when Nuncio gives you local SQLite WAL speed, 4 unified interfaces, and AI MCP integration 100% free?",
    url: "https://nuncio.mx/vs/superhuman",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Superhuman",
    description: "Compare Nuncio vs Superhuman. 100% Free & Open Source alternative with local SQLite speed.",
    images: ["/og-image.png"],
  },
};

export default function VsSuperhumanPage() {
  const differentiators = [
    {
      title: "$0 Forever vs $360/Year",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio is 100% free and open source under MIT / Apache-2.0. Superhuman forces a $30/month recurring subscription.",
    },
    {
      title: "Local SQLite vs Closed Cloud",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Your emails and search indices stay in local SQLite WAL files on your disk. Superhuman stores your metadata on proprietary cloud servers.",
    },
    {
      title: "4 Unified Interfaces",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Work seamlessly across macOS GUI, Windows, Linux, Vim Ratatui Terminal TUI, POSIX CLI, and Model Context Protocol (MCP).",
    },
    {
      title: "Native AI MCP Integration",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Connect Anthropic Claude, Cursor, and custom AI agents securely using McpAgentPolicy capability controls and automatic PII redaction.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing & Subscription", nuncioValue: "100% Free & Open Source", competitorValue: "$30/mo ($360/year)", description: "Zero subscription fees forever" },
    { feature: "Data Storage Location", nuncioValue: "100% Local SQLite WAL", competitorValue: "Proprietary Cloud Servers", description: "Sovereign data ownership on local disk" },
    { feature: "Terminal TUI (Vim Chords)", nuncioValue: true, competitorValue: false, description: "Vim motions (j/k/h/l, g i, e, s) in terminal" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "nuncio mail list --json & pipeline integration" },
    { feature: "Native AI Agent Support (MCP)", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools & policies" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 hash-chained execution logs" },
    { feature: "Server-Side Automation (NSQL)", nuncioValue: true, competitorValue: "Basic Rules", description: "Full SQL syntax parser (WHEN/THEN rules)" },
    { feature: "Full-Text Search Latency", nuncioValue: "<10ms (FTS5 Trigram)", competitorValue: "~250ms (Cloud API)", description: "Instant offline trigram index" },
    { feature: "Data-at-Rest Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Server-Side TLS Only", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "Limited", description: "Export entire accounts or NSQL queries" },
    { feature: "Tracking Pixel Neutralization", nuncioValue: true, competitorValue: false, description: "Automatic 1x1 image blocking" },
    { feature: "Cross-Platform Support", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Web, iOS", description: "Native binaries across all desktop & server OS" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Superhuman"
      competitorSlug="superhuman"
      tagline="Why pay $360/year for closed cloud email when Nuncio gives you local SQLite speed, 4 unified interfaces, and native AI MCP integration 100% free?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="$360 / Year Subscription"
      heroHeadline="Why pay $360/year for closed cloud email when Nuncio gives you local SQLite WAL speed, 4 unified interfaces, Vim keyboard velocity, and native AI MCP agent integration 100% free?"
      whySwitchParagraph="Superhuman popularized keyboard shortcuts for email, but locked users into a $30/month subscription model and centralized cloud servers. Nuncio takes the high-velocity keyboard workflow further by making it 100% local, blazing fast with SQLite WAL storage, and extensible across GUI, Vim Terminal TUI, POSIX CLI, and Model Context Protocol (MCP) AI agents."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

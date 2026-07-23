import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Microsoft Outlook — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Microsoft Outlook. Why put up with slow bloated electron builds, ads, and telemetry when Nuncio gives you lightweight native Rust speed, 4 unified interfaces, and zero data tracking?",
  alternates: { canonical: "https://nuncio.mx/vs/outlook" },
  openGraph: {
    title: "Nuncio vs Microsoft Outlook — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Microsoft Outlook. Lightweight native Rust speed, 4 unified interfaces, and zero telemetry 100% free.",
    url: "https://nuncio.mx/vs/outlook",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Microsoft Outlook",
    description: "Compare Nuncio vs Microsoft Outlook. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsOutlookPage() {
  const differentiators = [
    {
      title: "Lightweight Native Rust Speed",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio uses native Rust and Tauri v2 requiring under 80MB RAM. The new Outlook is an Electron web view using over 1GB RAM.",
    },
    {
      title: "Zero Telemetry & Ads",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio contains zero ad network trackers or diagnostic telemetry. New Outlook displays sponsored ads directly inside your inbox.",
    },
    {
      title: "Vim Terminal TUI & POSIX CLI",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Work with single-key velocity inside terminal multiplexers or SSH sessions. Outlook offers zero command-line support.",
    },
    {
      title: "NSQL Engine & WORM Audits",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Define declarative SQL automation rules and verify execution history in immutable HMAC-SHA256 WORM audit logs.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Memory Usage", nuncioValue: "< 80 MB RAM (Native Rust)", competitorValue: "> 1.2 GB RAM (Electron Web)", description: "Nuncio uses 15x less memory" },
    { feature: "Inbox Ads & Telemetry", nuncioValue: "Zero Ads / Zero Telemetry", competitorValue: "Display Ads in Free Version", description: "100% private open-source client" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "Native AI MCP Integration", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools & policies" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit log ledger" },
    { feature: "NSQL Automation Engine", nuncioValue: true, competitorValue: "Basic Rules", description: "Full SQL syntax parser (WHEN/THEN rules)" },
    { feature: "Data-at-Rest Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Unencrypted Local Cache", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "PST Export Only", description: "Export entire accounts or NSQL query results" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Microsoft Outlook"
      competitorSlug="outlook"
      tagline="Why put up with slow bloated electron builds, ads, and telemetry when Nuncio gives you lightweight native Rust speed, 4 unified interfaces, and zero data tracking?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="Microsoft 360 Subscription / Ad-Supported"
      heroHeadline="Why put up with slow bloated electron builds, ads, and telemetry when Nuncio gives you lightweight native Rust speed, 4 unified interfaces, and zero data tracking 100% free?"
      whySwitchParagraph="Microsoft's transition to the web-based 'New Outlook' replaced native desktop performance with bloated web views, intrusive inbox ads, and mandatory cloud syncing. Nuncio provides a high-performance native alternative that starts in under 100 milliseconds and runs across macOS, Windows, Linux, and terminal environments."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

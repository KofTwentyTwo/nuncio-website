import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Spark Mail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Spark Mail. Why trust proprietary cloud servers with your email credentials when Nuncio gives you local SQLite storage, zero subscription fees, and 4 unified interfaces?",
  alternates: { canonical: "https://nuncio.mx/vs/spark-mail" },
  openGraph: {
    title: "Nuncio vs Spark Mail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Spark Mail. Local SQLite storage, zero subscription fees, and 4 unified interfaces 100% free.",
    url: "https://nuncio.mx/vs/spark-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Spark Mail",
    description: "Compare Nuncio vs Spark Mail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsSparkMailPage() {
  const differentiators = [
    {
      title: "100% Local Storage",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio stores all accounts and messages directly on your disk in SQLite WAL format. Spark routes push notifications through central servers.",
    },
    {
      title: "Zero Subscription Fees",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio is 100% free and open source. Spark Premium requires a $59.99/year subscription for advanced team and priority inbox features.",
    },
    {
      title: "Vim Terminal TUI & POSIX CLI",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Work with single-key velocity in any Linux or macOS terminal. Spark offers no command-line or terminal interface.",
    },
    {
      title: "Sane AI & WORM Audits",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Connect AI agents via Model Context Protocol with RBAC policies and inspect every mutation in WORM cryptographic audit logs.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing Model", nuncioValue: "100% Free & Open Source", competitorValue: "$59.99/year Premium", description: "No paid tiers or feature paywalls" },
    { feature: "Push Notification Architecture", nuncioValue: "Direct Local IMAP/JMAP Daemon", competitorValue: "Central Spark Proxy Servers", description: "Nuncio connects directly from your machine" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line automation" },
    { feature: "Native AI MCP Integration", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit ledger" },
    { feature: "NSQL Automation Engine", nuncioValue: true, competitorValue: "Basic Smart Inbox", description: "Full SQL syntax rule statements" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "PDF / Print Only", description: "Export entire accounts or queries" },
    { feature: "Cross-Platform Support", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Windows, iOS, Android", description: "Native binaries across all desktop platforms" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Spark Mail"
      competitorSlug="spark-mail"
      tagline="Why trust proprietary cloud servers with your email credentials when Nuncio gives you local SQLite storage, zero subscription fees, and 4 unified interfaces?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="$59.99 / Year Premium"
      heroHeadline="Why trust proprietary cloud servers with your email credentials when Nuncio gives you local SQLite storage, zero subscription fees, and 4 unified interfaces 100% free?"
      whySwitchParagraph="Spark Mail relies on central proxy servers to handle push notifications and cloud sync, creating a potential vector for credentials and email metadata. Nuncio's hybrid daemon (nunciod) runs locally on your computer—connecting directly to IMAP/JMAP servers with zero middleman proxies."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

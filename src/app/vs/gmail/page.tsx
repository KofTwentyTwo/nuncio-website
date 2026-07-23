import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Web Gmail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Gmail Web. Take back ownership of your inbox with zero cloud tracking, local SQLite speed, offline search, 4 unified interfaces, and WORM cryptographic audit logs.",
  alternates: { canonical: "https://nuncio.mx/vs/gmail" },
  openGraph: {
    title: "Nuncio vs Web Gmail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Web Gmail. Zero cloud tracking, local SQLite speed, offline search, 4 unified interfaces, and WORM audit logs 100% free.",
    url: "https://nuncio.mx/vs/gmail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Gmail",
    description: "Compare Nuncio vs Web Gmail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsGmailPage() {
  const differentiators = [
    {
      title: "100% Offline Independence",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Search, compose, filter, and organize emails offline without an active internet connection. Gmail web breaks without connectivity.",
    },
    {
      title: "Zero Ad Targeting or Mining",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio never scans your emails for ad targeting, smart recommendations, or tracking pixels. Your data stays in encrypted local SQLite files.",
    },
    {
      title: "Vim Terminal TUI & POSIX CLI",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Triage messages with single-key velocity inside terminal multiplexers or SSH sessions. Gmail offers no native terminal interface.",
    },
    {
      title: "Sane AI & WORM Audits",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Connect AI agents via Model Context Protocol with RBAC policies and inspect every mutation in WORM cryptographic audit logs.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Data Ownership", nuncioValue: "100% Sovereign Local Disk", competitorValue: "Google Cloud Servers", description: "You own your data files" },
    { feature: "Offline Search Capability", nuncioValue: "100% Instant Offline Search", competitorValue: "Requires Active Internet", description: "Sub-10ms SQLite FTS5 trigram search" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal client" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "Native AI MCP Integration", nuncioValue: true, competitorValue: false, description: "Model Context Protocol tools & policies" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit log ledger" },
    { feature: "NSQL Automation Engine", nuncioValue: true, competitorValue: "Basic Gmail Filters", description: "Full SQL syntax rule statements" },
    { feature: "Data-at-Rest Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "Google Cloud Managed", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "Google Takeout (Slow)", description: "Instant local export anytime" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Web Gmail"
      competitorSlug="gmail"
      tagline="Take back ownership of your inbox with zero cloud tracking, local SQLite speed, offline search, 4 unified interfaces, and WORM cryptographic audit logs."
      nuncioPrice="100% Free & Open Source"
      competitorPrice="Ad-Supported / Google One Subscription"
      heroHeadline="Take back ownership of your inbox with zero cloud tracking, local SQLite speed, offline search, 4 unified interfaces, and WORM cryptographic audit logs 100% free."
      whySwitchParagraph="Web Gmail is convenient, but exposes your communications to web trackers, network outages, and browser tab bloat. Nuncio connects to Gmail via secure SASL XOAUTH2 and OAuth 2.0 PKCE while storing your messages locally in SQLite WAL format for instant offline search, Vim keyboard triage, and AI agent integration."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

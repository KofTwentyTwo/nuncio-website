import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Canary Mail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs Canary Mail. Why rely on proprietary cloud AI servers for your sensitive emails when Nuncio provides local AI capability controls, zero cloud tracking, and WORM cryptographic audits?",
  alternates: { canonical: "https://nuncio.mx/vs/canary-mail" },
  openGraph: {
    title: "Nuncio vs Canary Mail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs Canary Mail. Local AI capability controls, zero cloud tracking, and WORM cryptographic audits 100% free.",
    url: "https://nuncio.mx/vs/canary-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Canary Mail",
    description: "Compare Nuncio vs Canary Mail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsCanaryMailPage() {
  const differentiators = [
    {
      title: "Sane AI vs Cloud AI Exposure",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio uses McpAgentPolicy to enforce fine-grained capability flags and automatic PII redaction. Canary Mail routes email data through proprietary cloud AI endpoints.",
    },
    {
      title: "WORM Cryptographic Audits",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Every automated rule, webhook, and AI tool call is recorded in an immutable Write Once Read Many (WORM) audit log ledger sealed with HMAC-SHA256.",
    },
    {
      title: "100% Open Source (MIT)",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Inspect 100% of the codebase on GitHub. Canary Mail is a closed proprietary commercial product with a monthly subscription.",
    },
    {
      title: "4 Unified Interfaces",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Work across desktop GUI, Vim Ratatui Terminal TUI, POSIX CLI, and Model Context Protocol (MCP) with 100% feature parity.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "License & Transparency", nuncioValue: "100% Open Source (MIT)", competitorValue: "Closed Proprietary", description: "Audit every line of source code on GitHub" },
    { feature: "AI Model Privacy Controls", nuncioValue: "McpAgentPolicy + Local Redaction", competitorValue: "Cloud AI Processing", description: "Prevents LLMs from exfiltrating sensitive PII" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable cryptographic event log" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal client" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "NSQL Server-Side Engine", nuncioValue: true, competitorValue: "Standard Filters", description: "SQL rule parser and condition matcher" },
    { feature: "Local Data Encryption", nuncioValue: "AES-256-GCM Column Level", competitorValue: "PGP / Local Database", description: "PayloadCipher encryption on local disk" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "Limited", description: "Export entire accounts or NSQL queries" },
    { feature: "Cross-Platform Support", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Windows, iOS, Android", description: "Native binaries across desktop & server environments" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Canary Mail"
      competitorSlug="canary-mail"
      tagline="Why rely on proprietary cloud AI servers for your sensitive emails when Nuncio provides local AI capability controls, zero cloud tracking, and WORM cryptographic audits?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="$20/yr - $60/yr Subscription"
      heroHeadline="Why rely on proprietary cloud AI servers for your sensitive emails when Nuncio provides local AI capability controls, zero cloud tracking, and WORM cryptographic audits 100% free?"
      whySwitchParagraph="Canary Mail added AI features, but routes message contexts to proprietary cloud AI APIs without user-configurable capability policies. Nuncio introduces McpAgentPolicy—giving you granular control over exactly which folders, permissions, and redacted fields an AI model can touch, backed by immutable WORM audit logs."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

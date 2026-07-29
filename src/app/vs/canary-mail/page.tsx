import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Canary Mail — A Governed AI Gateway vs Cloud AI Mail",
  description: "How Nuncio's planned local, policy-governed AI agent access compares to Canary Mail's proprietary cloud AI features. Nuncio is pre-alpha; this describes the design we're building, not a shipped product.",
  alternates: { canonical: "https://nuncio.mx/vs/canary-mail" },
  openGraph: {
    title: "Nuncio vs Canary Mail — A Governed AI Gateway vs Cloud AI Mail",
    description: "A local-first, auditable design for AI agent access to mail, compared against Canary Mail's cloud AI processing.",
    url: "https://nuncio.mx/vs/canary-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Canary Mail",
    description: "A governed, local AI-agent design compared against Canary Mail's cloud AI features.",
    images: ["/og-image.png"],
  },
};

export default function VsCanaryMailPage() {
  const differentiators = [
    {
      title: "A Gateway, Not Cloud AI",
      icon: <Bot className="w-5 h-5 text-yellow-400" />,
      desc: "The plan: an MCP client that lets AI agents work with your mail through a governed local gateway, never by routing your messages to a third-party AI service.",
      status: "planned" as const,
    },
    {
      title: "WORM Audit Ledger, Today",
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      desc: "Every account and rule mutation is already recorded in an immutable, hash-chained audit log you can inspect and verify yourself.",
    },
    {
      title: "Open Source, Fully Inspectable",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Every line of the engine is public on GitHub under MIT / Apache-2.0. Canary Mail is closed-source and commercially licensed.",
    },
    {
      title: "Local-First Storage",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      desc: "Mail lives in local SQLite, owned by a daemon you run yourself — not synced through a vendor's servers to power AI features.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "License & Transparency", nuncioValue: "Open source (MIT/Apache-2.0)", competitorValue: "Closed proprietary", description: "Audit every line of the engine on GitHub" },
    { feature: "AI Agent Access Model", nuncioValue: "Local gateway, policy-governed", competitorValue: "Cloud AI processing", description: "Agents would never receive raw account credentials", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Hash-chained, immutable event log — real today" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "NSQL Server-Side Rules", nuncioValue: "Author & dry-run test today", competitorValue: "Basic smart filters", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "PGP / local database", description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "Limited export", description: "Standard, open formats — real today" },
    { feature: "Cross-Platform (engine + CLI)", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Windows, iOS, Android", description: "The daemon and CLI already build on all three desktop OSes" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Canary Mail"
      competitorSlug="canary-mail"
      tagline="A local, policy-governed AI gateway we're building, compared against Canary Mail's proprietary cloud AI mail."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="$36-$100 / Year (Growth/Pro+)"
      heroHeadline="Canary Mail routes AI features through proprietary cloud endpoints. We're building Nuncio around a different idea: an MCP gateway that lets AI agents touch your mail only through capability policies and an audit trail you control locally."
      whySwitchParagraph="Canary Mail's AI features send message context to cloud AI APIs with no user-configurable capability policy. Nuncio's design keeps that decision local: an MCP client (on the roadmap) would broker every agent action through the same daemon that already owns your mail, with fine-grained capability flags and an immutable WORM audit trail. The audit ledger, local SQLite storage, and open-source engine are real today; the MCP gateway itself is the next milestone, not a shipped feature."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

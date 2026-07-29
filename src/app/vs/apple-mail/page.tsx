import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Apple Mail — Cross-Platform Engine vs an Apple-Only Client",
  description: "How Nuncio's cross-platform daemon and NSQL rule engine compare to Apple Mail's macOS/iOS-only reach. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/apple-mail" },
  openGraph: {
    title: "Nuncio vs Apple Mail — Cross-Platform Engine vs an Apple-Only Client",
    description: "A local-first engine that runs on macOS, Windows, and Linux, with an open NSQL rule language, compared to Apple Mail.",
    url: "https://nuncio.mx/vs/apple-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Apple Mail",
    description: "A cross-platform, open-source engine compared to Apple Mail's Apple-only reach.",
    images: ["/og-image.png"],
  },
};

export default function VsAppleMailPage() {
  const differentiators = [
    {
      title: "Cross-Platform Engine",
      icon: <Layers className="w-5 h-5 text-yellow-400" />,
      desc: "The daemon and reference CLI build and run on macOS, Windows, and Linux today. Apple Mail is strictly locked to Apple hardware.",
    },
    {
      title: "Offline SQLite Search",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "SQLite FTS5 indexes your synced mail locally, with no dependency on macOS Spotlight or any external index.",
    },
    {
      title: "An Open NSQL Rule Language",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Author and dry-run test declarative SQL-style filter rules today, with webhook dispatch and forwarding on the roadmap for live mail.",
    },
    {
      title: "A Governed AI Gateway",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "An MCP client is planned to let AI agents work with your mail through capability policies and an audit trail, not through Apple Mail's absence of any AI surface.",
      status: "planned" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "OS Availability (engine + CLI)", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS & iOS only", description: "Build and run the daemon and CLI on all three desktop OSes" },
    { feature: "Full-Text Search Engine", nuncioValue: "SQLite FTS5, fully offline", competitorValue: "macOS Spotlight index", description: "No dependency on a system-wide index" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "Automation Rule Engine", nuncioValue: "NSQL, author & dry-run test today", competitorValue: "Basic mail rules", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "Unencrypted local SQLite", description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "MBOX only", description: "Open, standard formats — real today" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Apple Mail"
      competitorSlug="apple-mail"
      tagline="A cross-platform, open-source engine we're building against Apple Mail's Apple-only reach."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="Included with macOS (Apple-locked)"
      heroHeadline="Apple Mail is a solid default for macOS and iOS, but it stops at the edge of Apple's ecosystem and has no automation language or AI surface. We're building Nuncio's engine to run anywhere and expose a real, inspectable rule language."
      whySwitchParagraph="Apple Mail is a fine default client, but it doesn't run on Windows or Linux, and its rules are a closed, basic list. Nuncio's engine (nunciod) and reference CLI already build and run cross-platform, with local FTS5 search, portable export, and a WORM audit ledger real today. The NSQL rule language can be authored and dry-run tested now; getting it to fire on live synced mail, and building the terminal and AI-agent clients, are the next milestones — not features you can use yet."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

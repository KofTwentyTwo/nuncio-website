import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Superhuman — A Free, Local-First Alternative to $360/yr Cloud Email",
  description: "How Nuncio's local-first, open-source design compares to Superhuman's $360/yr closed cloud subscription. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/superhuman" },
  openGraph: {
    title: "Nuncio vs Superhuman — A Free, Local-First Alternative to $360/yr Cloud Email",
    description: "A local SQLite store, an open NSQL rule language, and a WORM audit ledger, compared against Superhuman's closed cloud subscription.",
    url: "https://nuncio.mx/vs/superhuman",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Superhuman",
    description: "A free, local-first, open-source design compared against Superhuman's $360/yr closed cloud subscription.",
    images: ["/og-image.png"],
  },
};

export default function VsSuperhumanPage() {
  const differentiators = [
    {
      title: "Free & Open, Not $360/Year",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio is MIT / Apache-2.0 with no subscription planned. Superhuman charges $30/month for its closed cloud client.",
    },
    {
      title: "Local SQLite, Not Closed Cloud",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Synced mail and the search index live in local SQLite WAL files on your disk, owned by a daemon you run — not on Superhuman's servers.",
    },
    {
      title: "One Contract, Future Clients",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      desc: "A desktop GUI, terminal TUI, and MCP client are planned as thin clients over the same gRPC API the reference CLI already uses.",
      status: "planned" as const,
    },
    {
      title: "A Governed AI Gateway",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "The plan: let AI agents work with your mail through capability policies and an audit trail, not a black-box cloud AI feature.",
      status: "planned" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing & Subscription", nuncioValue: "Free & open source (in development)", competitorValue: "$30/mo ($360/yr)", description: "No subscription tier planned" },
    { feature: "Data Storage Location", nuncioValue: "Local SQLite WAL, daemon you run", competitorValue: "Proprietary cloud servers", description: "Local data ownership" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Real gRPC client today, JSON output for pipelines" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "NSQL Automation Engine", nuncioValue: "Author & dry-run test today", competitorValue: "Basic rules", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "Local Full-Text Search", nuncioValue: "SQLite FTS5, fully offline", competitorValue: "Cloud-side search API", description: "No network round trip for search" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "Server-side TLS only", description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "Limited export", description: "Open, standard formats — real today" },
    { feature: "Cross-Platform (engine + CLI)", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Web, iOS", description: "Build and run the daemon on all three desktop OSes" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Superhuman"
      competitorSlug="superhuman"
      tagline="A free, open, local-first alternative we're building to Superhuman's $360/yr closed cloud email."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="$360 / Year Subscription"
      heroHeadline="Superhuman popularized fast keyboard-driven email, wrapped inside a $30/month closed cloud client. We're building Nuncio as a free, open, local-first alternative: the same keyboard-first ambition, running on a daemon you own."
      whySwitchParagraph="Superhuman's keyboard-driven speed is real, but it's delivered through a closed client on top of centralized cloud servers, for $360 a year. Nuncio's architecture takes a different path: one daemon (nunciod) that owns your mail state in local SQLite, speaking a single versioned gRPC contract that a future terminal client, desktop GUI, and AI-agent gateway would all consume identically. The daemon, IMAP/SMTP sync, local FTS5 search, export, and the WORM audit ledger are real and buildable from source today; the additional clients and live NSQL rule-firing are what's ahead."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Mozilla Thunderbird — A New Rust Engine vs a Legacy C++ Core",
  description: "How Nuncio's ground-up, memory-safe Rust engine and one-contract-many-clients design compare to Thunderbird's decades-old C++/Gecko core. Nuncio is pre-alpha; this is a design comparison, not a claim it beats a mature open-source project today.",
  alternates: { canonical: "https://nuncio.mx/vs/thunderbird" },
  openGraph: {
    title: "Nuncio vs Mozilla Thunderbird — A New Rust Engine vs a Legacy C++ Core",
    description: "A ground-up, memory-safe Rust engine and a single gRPC contract for future clients, compared against Thunderbird's C++/Gecko core.",
    url: "https://nuncio.mx/vs/thunderbird",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Mozilla Thunderbird",
    description: "A new, memory-safe Rust engine compared against Thunderbird's decades-old C++ core.",
    images: ["/og-image.png"],
  },
};

export default function VsThunderbirdPage() {
  const differentiators = [
    {
      title: "A Ground-Up Rust Engine",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio's engine is written from scratch in Rust, with unsafe code forbidden by the build's lint gate. Thunderbird carries forward a C++/Gecko codebase with decades of history.",
    },
    {
      title: "One Contract, Many Future Clients",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: "A desktop GUI and terminal TUI are planned as thin clients over the same gRPC API the reference CLI already uses — feature parity by contract, not by separately maintained codebases.",
      status: "planned" as const,
    },
    {
      title: "A Declarative Rule Language",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      desc: "NSQL lets you author and dry-run test SQL-style filter statements today, aiming past Thunderbird's traditional message-filter dialog.",
    },
    {
      title: "A WORM Audit Ledger",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Every account and rule mutation is already recorded in an immutable, hash-chained log — a capability Thunderbird doesn't offer.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Core Architecture", nuncioValue: "Memory-safe Rust workspace", competitorValue: "C++ / Gecko engine", description: "Built from scratch, not a legacy inheritance" },
    { feature: "License & Transparency", nuncioValue: "Open source (MIT/Apache-2.0)", competitorValue: "Open source (MPL 2.0)", description: "Both projects are fully open source" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: true, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Desktop GUI Client", nuncioValue: true, competitorValue: true, description: "Planned thin client over the frozen gRPC API", nuncioStatus: "planned" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "Full-Text Search", nuncioValue: "SQLite FTS5, fully offline", competitorValue: "Gloda index", description: "Local search with no network dependency" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: false, description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "MBOX export only", description: "Open, standard formats — real today" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Mozilla Thunderbird"
      competitorSlug="thunderbird"
      tagline="A new, memory-safe Rust engine we're building, positioned against Thunderbird's mature but decades-old C++/Gecko core."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="Free & Open Source"
      heroHeadline="Thunderbird earned its place as the open-source email standard-bearer, carrying a C++/Gecko codebase forward for over two decades. We're building Nuncio as a ground-up, memory-safe Rust engine with a single gRPC contract meant to keep every future client in lockstep."
      whySwitchParagraph="Thunderbird's longevity is a real asset, and this isn't a claim that a pre-alpha project already beats it. It's a bet on a different foundation: Rust instead of C++/Gecko, and one versioned gRPC contract that a desktop GUI, a terminal client, and an AI-agent gateway would all consume identically, instead of separate codebases drifting out of parity. The engine, CLI, IMAP/SMTP sync, FTS5 search, export, and WORM audit ledger are real and buildable from source today; the additional clients and live NSQL rule-firing are what's ahead."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Microsoft Outlook — A Minimal Rust Daemon vs a Subscription Web App",
  description: "How Nuncio's minimal, memory-safe Rust daemon compares to Outlook's telemetry and subscription model. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/outlook" },
  openGraph: {
    title: "Nuncio vs Microsoft Outlook — A Minimal Rust Daemon vs a Subscription Web App",
    description: "A memory-safe Rust engine with zero ad trackers, compared against Outlook's telemetry and Microsoft 365 subscription.",
    url: "https://nuncio.mx/vs/outlook",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Microsoft Outlook",
    description: "A minimal, open-source Rust engine compared to Outlook's telemetry and subscription model.",
    images: ["/og-image.png"],
  },
};

export default function VsOutlookPage() {
  const differentiators = [
    {
      title: "Memory-Safe Rust Core",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      desc: "The engine is written in Rust with unsafe code forbidden by the workspace lint gate — a different foundation than the new Outlook's web-view shell.",
    },
    {
      title: "No Ads, No Telemetry",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio's engine contains no ad network, no diagnostic telemetry pipeline, and no sponsored placements in your inbox.",
    },
    {
      title: "A Scriptable CLI, Today",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "nuncio-cli is a real, scriptable gRPC client you can build and run right now. Outlook has no command-line surface at all.",
    },
    {
      title: "An Open Rule Language",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "NSQL rules can be authored and dry-run tested today as SQL-style statements — with live rule firing on synced mail on the roadmap.",
      status: "in-progress" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing Model", nuncioValue: "Free & open source (in development)", competitorValue: "Microsoft 365 subscription (from ~$6.99/mo)", description: "No subscription tier planned" },
    { feature: "Ads & Telemetry", nuncioValue: "None in the engine", competitorValue: "Ads in free tier; telemetry in paid tiers", description: "Inspect the engine's source to verify" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Real gRPC client today, JSON output for pipelines" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "NSQL Automation Engine", nuncioValue: "Author & dry-run test today", competitorValue: "Basic rules", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "Unencrypted local cache", description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "PST export only", description: "Open, standard formats — real today" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Microsoft Outlook"
      competitorSlug="outlook"
      tagline="A minimal, memory-safe Rust daemon we're building, compared against Outlook's telemetry and subscription model."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="Microsoft 365 Subscription / Ad-Supported"
      heroHeadline="The new Outlook is a web view wrapped in a subscription, with ads in the free tier and telemetry throughout. We're building Nuncio as a minimal, memory-safe Rust daemon with no ad network and no telemetry pipeline, full stop."
      whySwitchParagraph="Microsoft's transition to the web-based 'New Outlook' brought inbox ads and mandatory account telemetry along with cloud sync. Nuncio's design starts from a different place: a Rust daemon (nunciod) with unsafe code forbidden by the build's own lint gate, no ad network, and no diagnostic pipeline. The daemon, IMAP/SMTP sync, WORM audit ledger, and export already build and run from source today; live-firing NSQL rules and at-rest encryption are the next milestones."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

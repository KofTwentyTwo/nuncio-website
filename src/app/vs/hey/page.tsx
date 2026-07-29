import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs HEY Mail — Bring Your Own Address vs a Closed Platform",
  description: "How Nuncio's protocol-agnostic, local-first design compares to HEY Mail's closed platform and required custom address. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/hey" },
  openGraph: {
    title: "Nuncio vs HEY Mail — Bring Your Own Address vs a Closed Platform",
    description: "Use any IMAP/SMTP address you already have, with an open NSQL rule language, compared against HEY's closed platform.",
    url: "https://nuncio.mx/vs/hey",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs HEY Mail",
    description: "A local-first, open design that works with any address you already have, compared to HEY's closed platform.",
    images: ["/og-image.png"],
  },
};

export default function VsHeyPage() {
  const differentiators = [
    {
      title: "Bring Your Own Address",
      icon: <Database className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio syncs any standard IMAP/SMTP account you already have. HEY requires a $99/year subscription tied to a HEY-issued address.",
    },
    {
      title: "Local Data, Not a Closed Cloud",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      desc: "Your mail lives in local SQLite, owned by a daemon you run. HEY's screening and workflow features run entirely inside HEY's own servers.",
    },
    {
      title: "An Open Rule Language",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "NSQL rules can be authored and dry-run tested today as SQL-style statements, instead of a closed drag-and-drop screener.",
    },
    {
      title: "One Contract, Future Clients",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "A desktop GUI, terminal TUI, and MCP client are planned as thin clients over the same gRPC API the CLI already uses.",
      status: "planned" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing & Lock-In", nuncioValue: "Free & open source (in development)", competitorValue: "$99/yr subscription", description: "No forced platform-specific address" },
    { feature: "Protocol Support", nuncioValue: "IMAP, SMTP (JMAP/CalDAV planned)", competitorValue: "HEY platform only", description: "Bring any standard provider" },
    { feature: "Local Data Ownership", nuncioValue: "Local SQLite, daemon you run", competitorValue: "HEY cloud servers", description: "Your data lives on your disk" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "MBOX export only", description: "Open formats — real today" },
    { feature: "Database Self-Healing", nuncioValue: true, competitorValue: false, description: "Automatic isolation and salvage of a corrupted local database" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="HEY Mail"
      competitorSlug="hey"
      tagline="A protocol-agnostic, local-first design we're building, compared against HEY's closed platform and required custom address."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="$99 / Year Subscription"
      heroHeadline="HEY reinvented email triage, but only for addresses on its own platform, behind a $99/year subscription. We're building Nuncio to bring the same kind of opinionated screening and rules to any address you already have."
      whySwitchParagraph="HEY's screening and workflow ideas are compelling, but they only work inside HEY's own cloud and require a HEY-issued address. Nuncio's design keeps your existing IMAP/SMTP accounts and puts the rule engine (NSQL) and the mail store on a daemon you run locally. The daemon, IMAP/SMTP sync, WORM audit ledger, export, and the local database's self-healing recovery are real and buildable from source today; NSQL rules firing on live mail and the additional client interfaces are the next milestones."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

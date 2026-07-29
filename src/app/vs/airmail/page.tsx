import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Airmail — Local-First Design vs a macOS-Only Client",
  description: "How Nuncio's local-first daemon and one-contract-many-clients architecture compare to Airmail's macOS-only Pro subscription. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/airmail" },
  openGraph: {
    title: "Nuncio vs Airmail — Local-First Design vs a macOS-Only Client",
    description: "Cross-platform daemon architecture, an open NSQL rule language, and a WORM audit ledger — compared against Airmail's Pro subscription model.",
    url: "https://nuncio.mx/vs/airmail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Airmail",
    description: "A local-first, open-source design compared to Airmail's macOS-only Pro subscription.",
    images: ["/og-image.png"],
  },
};

export default function VsAirmailPage() {
  const differentiators = [
    {
      title: "Cross-Platform by Design",
      icon: <Layers className="w-5 h-5 text-yellow-400" />,
      desc: "The engine (nunciod) and reference CLI already build and run on macOS, Windows, and Linux. Airmail is strictly Apple-ecosystem.",
    },
    {
      title: "Free & Open Source, Always",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio is MIT / Apache-2.0 with no planned subscription tier. Airmail requires an Airmail Pro annual subscription for core multi-account features.",
    },
    {
      title: "One Contract, Many Future Clients",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "A terminal TUI and desktop GUI are on the roadmap, both as thin clients over the same gRPC API the CLI already uses — not separate codebases to keep in sync.",
      status: "planned" as const,
    },
    {
      title: "NSQL Rules & a WORM Ledger",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: "Write and dry-run test declarative SQL-style filter rules today, and inspect every account/rule mutation in an immutable hash-chained audit log.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing Model", nuncioValue: "Free & open source (in development)", competitorValue: "$9.99/yr Pro subscription", description: "No planned subscription tier for Nuncio" },
    { feature: "OS Availability (engine + CLI)", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS & iOS only", description: "Build the daemon and CLI from source on any of the three today" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "`cargo build --workspace` and run nunciod + nuncio-cli locally" },
    { feature: "Multi-Account IMAP/SMTP Sync", nuncioValue: true, competitorValue: true, description: "Real fetch -> store -> read -> send, tested against mock servers" },
    { feature: "Local Full-Text Search", nuncioValue: "SQLite FTS5, fully offline", competitorValue: "Local index", description: "No cloud round trip for search" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "Basic EML export", description: "No vendor lock-in on your mail data" },
    { feature: "WORM Audit Trail", nuncioValue: true, competitorValue: false, description: "Immutable, hash-chained log of account and rule changes" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Keyboard-driven terminal client over the frozen gRPC API", nuncioStatus: "planned" },
    { feature: "Desktop GUI Interface", nuncioValue: true, competitorValue: true, description: "Native desktop client consuming the same API contract", nuncioStatus: "planned" },
    { feature: "Server-Side Rule Engine (NSQL)", nuncioValue: "Create & dry-run test today", competitorValue: "Basic mail rules", description: "Rules can be authored and tested now; firing on live synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "OS Keychain only", description: "Encrypting message bodies at rest is a security-hardening milestone", nuncioStatus: "planned" },
    { feature: "HTML Email Sandboxing", nuncioValue: true, competitorValue: "Standard WebKit render", description: "Sandboxed iframe rendering with scripts disabled", nuncioStatus: "planned" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Airmail"
      competitorSlug="airmail"
      tagline="A local-first, cross-platform architecture we're building against Airmail's macOS-only Pro subscription."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="$9.99 / Year Pro Subscription"
      heroHeadline="Airmail is a polished macOS-only client behind a Pro paywall. We're building Nuncio as a free, open, local-first alternative that runs the same engine on macOS, Windows, and Linux from day one."
      whySwitchParagraph="Airmail's clean interface is locked to Apple hardware, and multi-account syncing sits behind a recurring Pro subscription. Nuncio starts from a different premise: one daemon (nunciod) that owns your mail state locally and speaks a single versioned gRPC contract, so a terminal client, a desktop GUI, and the reference CLI can all be thin, interchangeable clients instead of three separate apps to maintain. The daemon, IMAP/SMTP sync, full-text search, export, and the WORM audit ledger are real and buildable from source today; the additional clients and the NSQL engine's live rule-firing are the next milestones."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

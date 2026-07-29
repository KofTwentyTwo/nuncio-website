import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Gmail — Local Data Ownership vs a Cloud-Hosted Inbox",
  description: "How Nuncio's local-first, daemon-owned mail store compares to Gmail's cloud-hosted, ad-supported model. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/gmail" },
  openGraph: {
    title: "Nuncio vs Gmail — Local Data Ownership vs a Cloud-Hosted Inbox",
    description: "Mail synced into a local SQLite store you own, compared against Gmail's cloud-hosted, ad-supported model.",
    url: "https://nuncio.mx/vs/gmail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Gmail",
    description: "A local-first, open-source design compared against Gmail's cloud-hosted, ad-supported model.",
    images: ["/og-image.png"],
  },
};

export default function VsGmailPage() {
  const differentiators = [
    {
      title: "Local Data, Not Cloud-Hosted",
      icon: <Database className="w-5 h-5 text-yellow-400" />,
      desc: "Synced mail lives in a local SQLite store owned by a daemon you run, instead of a copy that only exists on Google's servers.",
    },
    {
      title: "No Ad Model, Full Stop",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio's engine has no advertising business model and nothing scanning your mail for ad targeting. Inspect the source to verify it.",
    },
    {
      title: "Offline-Capable Search",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "SQLite FTS5 indexes synced mail locally, so search keeps working without an active connection to Google's servers.",
    },
    {
      title: "A Governed AI Gateway",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "An MCP client is planned to let AI agents work with your mail through capability policies and an audit trail, instead of Gmail's built-in AI features operating inside Google's own cloud.",
      status: "planned" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Data Ownership", nuncioValue: "Local SQLite, daemon you run", competitorValue: "Google cloud servers", description: "Synced mail lives on your disk" },
    { feature: "Business Model", nuncioValue: "Free & open source, no ads", competitorValue: "Ad-supported / Google One", description: "Inspect the source; there's no ad pipeline to find" },
    { feature: "Offline Search Capability", nuncioValue: "SQLite FTS5, works offline", competitorValue: "Requires an active connection", description: "Search your local mail store without internet" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "NSQL Automation Engine", nuncioValue: "Author & dry-run test today", competitorValue: "Basic Gmail filters", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "At-Rest Body Encryption", nuncioValue: true, competitorValue: "Google-managed at rest", description: "Security-hardening milestone, not yet built", nuncioStatus: "planned" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "Google Takeout", description: "Open, standard formats — real today" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Web Gmail"
      competitorSlug="gmail"
      tagline="A local-first, ad-free mail store we're building, compared against Gmail's cloud-hosted, ad-supported model."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="Ad-Supported / Google One Subscription"
      heroHeadline="Gmail is convenient because Google hosts everything and pays for it with ads and data collection. We're building Nuncio as a free, open, local-first alternative: your mail synced to a store you own, with no ad model behind it."
      whySwitchParagraph="Gmail's convenience comes from running entirely on Google's infrastructure, funded by an ad-supported business model. Nuncio's design keeps synced mail in local SQLite, owned by a daemon you run, with full-text search that keeps working offline. IMAP/SMTP sync to Gmail (and any standard provider), local search, export, and the WORM audit ledger are real and buildable from source today; the AI-agent gateway, at-rest encryption, and live-firing NSQL rules are the next milestones."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

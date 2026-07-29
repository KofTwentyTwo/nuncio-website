import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Database, Bot, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs Spark Mail — Direct-to-Server Sync vs Proxy Servers",
  description: "How Nuncio's daemon connects directly to your mail server compares to Spark Mail's proxy-server sync and Premium subscription. Nuncio is pre-alpha; this is a design comparison, not a claim it's ready to switch to today.",
  alternates: { canonical: "https://nuncio.mx/vs/spark-mail" },
  openGraph: {
    title: "Nuncio vs Spark Mail — Direct-to-Server Sync vs Proxy Servers",
    description: "A local daemon that talks directly to IMAP/SMTP, compared against Spark's central proxy architecture and Premium subscription.",
    url: "https://nuncio.mx/vs/spark-mail",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs Spark Mail",
    description: "A local-first, open-source design compared to Spark Mail's proxy-server architecture and Premium subscription.",
    images: ["/og-image.png"],
  },
};

export default function VsSparkMailPage() {
  const differentiators = [
    {
      title: "Direct to Your Mail Server",
      icon: <Database className="w-5 h-5 text-yellow-400" />,
      desc: "The nunciod daemon connects straight to your IMAP/SMTP server from your own machine — no middleman proxy relaying your mail metadata.",
    },
    {
      title: "No Subscription Tier",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      desc: "Nuncio is MIT / Apache-2.0 with no plan to gate features behind a subscription. Spark Premium is $59.99/year for team and priority-inbox features.",
    },
    {
      title: "A Scriptable CLI, Today",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "The reference nuncio-cli is a real, scriptable client over the daemon's gRPC API right now. Spark has no command-line interface at all.",
    },
    {
      title: "A Governed AI Gateway",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "An MCP client is on the roadmap, designed to broker AI agent access to your mail through capability policies and an audit trail.",
      status: "planned" as const,
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing Model", nuncioValue: "Free & open source (in development)", competitorValue: "$59.99/yr Premium", description: "No paid tier planned" },
    { feature: "Sync Architecture", nuncioValue: "Direct local daemon to IMAP/SMTP", competitorValue: "Central Spark proxy servers", description: "Nuncio connects from your machine, not a vendor's cloud" },
    { feature: "Build & Run From Source", nuncioValue: true, competitorValue: false, description: "cargo build --workspace + run the daemon and CLI locally" },
    { feature: "Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Real gRPC client today, JSON output for pipelines" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Planned keyboard-driven terminal client", nuncioStatus: "planned" },
    { feature: "AI Agent Access (MCP)", nuncioValue: true, competitorValue: false, description: "Planned governed gateway for AI agents", nuncioStatus: "planned" },
    { feature: "WORM Audit Ledger", nuncioValue: true, competitorValue: false, description: "Immutable hash-chained log — real today" },
    { feature: "NSQL Automation Engine", nuncioValue: "Author & dry-run test today", competitorValue: "Basic smart inbox", description: "Live rule firing on synced mail is still ahead", nuncioStatus: "in-progress" },
    { feature: "Portable Export (MBOX/EML/JSON)", nuncioValue: true, competitorValue: "PDF / print only", description: "Open, standard formats — real today" },
    { feature: "Cross-Platform (engine + CLI)", nuncioValue: "macOS, Windows, Linux", competitorValue: "macOS, Windows, iOS, Android", description: "Build and run the daemon on all three desktop OSes" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="Spark Mail"
      competitorSlug="spark-mail"
      tagline="A daemon that talks directly to your mail server, compared against Spark's proxy-server sync and Premium subscription."
      nuncioPrice="Free & open source (in development)"
      competitorPrice="$59.99 / Year Premium"
      heroHeadline="Spark Mail routes push notifications and sync through its own proxy servers, then paywalls team and priority-inbox features. We're building Nuncio's daemon to talk to your IMAP/SMTP server directly, with no subscription tier and no relay in between."
      whySwitchParagraph="Spark's central proxy servers sit between you and your mail provider, and its Premium plan gates advanced workflow features behind a yearly fee. Nuncio's architecture puts a single daemon (nunciod) on your own machine, talking directly to your provider and owning your mail state in local SQLite. That daemon, its IMAP/SMTP sync, full-text search, export, and WORM audit ledger already build and run from source; the terminal client and governed AI gateway are the next milestones, not shipped today."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

import React from "react";
import { ComparisonPageTemplate, ComparisonFeatureRow } from "@/components/ComparisonPageTemplate";
import { Metadata } from "next";
import { ShieldCheck, Zap, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuncio vs HEY Mail — Sovereign Open Source Alternative",
  description: "Compare Nuncio vs HEY Mail. Why pay $99/year for a closed email lock-in when Nuncio gives you NSQL rules, local data ownership, 4 unified interfaces, and WORM cryptographic audits?",
  alternates: { canonical: "https://nuncio.mx/vs/hey" },
  openGraph: {
    title: "Nuncio vs HEY Mail — Sovereign Open Source Alternative",
    description: "Compare Nuncio vs HEY Mail. NSQL rules, local data ownership, 4 unified interfaces, and WORM audits 100% free.",
    url: "https://nuncio.mx/vs/hey",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio vs HEY Mail",
    description: "Compare Nuncio vs HEY Mail. 100% Free & Open Source alternative.",
    images: ["/og-image.png"],
  },
};

export default function VsHeyPage() {
  const differentiators = [
    {
      title: "$0 vs $99/Year Lock-In",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Nuncio works with all your existing IMAP, JMAP, Gmail, and iCloud accounts for free. HEY forces a $99/year custom email subscription.",
    },
    {
      title: "Local SQLite vs Proprietary Cloud",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Your data stays on your machine in standard SQLite format. HEY locks your emails inside their custom cloud infrastructure.",
    },
    {
      title: "NSQL Server-Side Engine",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      desc: "Write declarative SQL automation rules (WHEN/THEN) instead of basic drag-and-drop screening.",
    },
    {
      title: "4 Unified Interfaces",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      desc: "Enjoy equal parity across desktop GUI, Vim Ratatui Terminal TUI, POSIX CLI, and Model Context Protocol (MCP) AI agents.",
    },
  ];

  const comparisonRows: ComparisonFeatureRow[] = [
    { feature: "Pricing & Lock-In", nuncioValue: "100% Free & Open Source", competitorValue: "$99/year Subscription", description: "Zero subscription fees or proprietary domain lock-in" },
    { feature: "Protocol Support", nuncioValue: "IMAP, JMAP, Gmail, SMTP, CalDAV", competitorValue: "HEY Cloud Only", description: "Use any standard email provider" },
    { feature: "Local Data Ownership", nuncioValue: "100% Local SQLite WAL", competitorValue: "HEY Cloud Servers", description: "Your data stays on your disk" },
    { feature: "Terminal TUI Interface", nuncioValue: true, competitorValue: false, description: "Vim Ratatui terminal UI" },
    { feature: "POSIX Scriptable CLI", nuncioValue: true, competitorValue: false, description: "Command-line integration" },
    { feature: "AI Model Context Protocol (MCP)", nuncioValue: true, competitorValue: false, description: "Native AI agent tools and policy enforcement" },
    { feature: "WORM Cryptographic Audits", nuncioValue: true, competitorValue: false, description: "HMAC-SHA256 audit ledger" },
    { feature: "Universal Portable Export", nuncioValue: "MBOX, ZIP, JSON, JSONL", competitorValue: "MBOX Export Only", description: "Export entire accounts or NSQL queries" },
    { feature: "Database Self-Healing", nuncioValue: true, competitorValue: false, description: "Automatic recovery from corrupted states" },
  ];

  return (
    <ComparisonPageTemplate
      competitorName="HEY Mail"
      competitorSlug="hey"
      tagline="Why pay $99/year for a closed email lock-in when Nuncio gives you NSQL rules, local data ownership, 4 unified interfaces, and WORM cryptographic audits?"
      nuncioPrice="100% Free & Open Source"
      competitorPrice="$99 / Year Subscription"
      heroHeadline="Why pay $99/year for a closed email lock-in when Nuncio gives you NSQL rules, local data ownership, 4 unified interfaces, and WORM cryptographic audits 100% free?"
      whySwitchParagraph="HEY introduced opinionated email workflows, but forces users into a $99/year cloud subscription and custom email addresses. Nuncio brings powerful workflow screening and NSQL automation to all your existing email addresses while keeping 100% of your data locally encrypted on your disk."
      comparisonRows={comparisonRows}
      differentiators={differentiators}
    />
  );
}

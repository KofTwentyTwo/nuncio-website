import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Database,
  FileCheck,
  Lock,
  Monitor,
  Bot,
  Layers,
  Heart,
  Globe,
  GitBranch,
  MapPin,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import type { StatusVariant } from "@/lib/status";

export const metadata = {
  title: "Why Nuncio Exists — Manifesto & Open-Source Credits",
  description: "Why Nuncio exists: local-first mail rebuilt for today, honestly staged as pre-alpha. What's real now, what's vision, and the open-source projects it's built on.",
};

interface CreditItem {
  name: string;
  repoUrl: string;
  role: string;
}

interface CreditCategory {
  category: string;
  icon: React.ReactNode;
  crates: CreditItem[];
}

interface ManifestoPillar {
  title: string;
  status: StatusVariant;
  icon: React.ReactNode;
  desc: string;
}

export default function AboutPage() {
  const manifestoPillars: ManifestoPillar[] = [
    {
      title: "1. Sane & Controlled AI / LLM Access",
      status: "planned",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      desc: "AI co-pilots should empower you, not exfiltrate your life. The plan is an RBAC gateway with capability flags, folder boundaries, and PII redaction before any payload reaches an LLM — none of it built yet.",
    },
    {
      title: "2. First-Class UX in Every Interface",
      status: "planned",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      desc: "No second-class interfaces, by design: a desktop GUI, a keyboard-driven terminal TUI, a scriptable CLI, and an MCP AI bridge, all clients of one frozen gRPC contract. Only the CLI exists today.",
    },
    {
      title: "3. A Fast, Native Engine",
      status: "in-progress",
      icon: <Layers className="w-6 h-6 text-yellow-400" />,
      desc: "Built in Rust over single-writer SQLite WAL storage for real local performance, not a race against a specific number — see the feature matrix for what's measured versus aspirational.",
    },
    {
      title: "4. Sovereign Control & Zero Closed Formats",
      status: "in-progress",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      desc: "No cloud lock-in, no proprietary sync servers. Your synced mail, accounts, and rules live in a local SQLite file you can export to standard MBOX, EML, or JSON at any time — that export path works today.",
    },
    {
      title: "5. Zero-Trust Security & Encryption",
      status: "planned",
      icon: <Lock className="w-6 h-6 text-red-400" />,
      desc: "Column-level encryption at rest, memory zeroing, and HTML sandboxing are the target. Today, credentials go through the OS keyring; message bodies are not yet encrypted at rest.",
    },
    {
      title: "6. WORM Cryptographic Audits & Immutability",
      status: "available-now",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      desc: "Real today: rule matches, webhook dispatches, and account mutations are recorded in an immutable, HMAC-SHA256 hash-chained audit ledger.",
    },
  ];

  const thirdPartyCredits: CreditCategory[] = [
    {
      category: "Rust Core Systems & Data Storage",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      crates: [
        { name: "sqlx", repoUrl: "https://github.com/launchbadge/sqlx", role: "Async, pure-Rust SQL engine powering type-safe SQLite operations and migrations." },
        { name: "sqlparser-rs", repoUrl: "https://github.com/apache/datafusion-sqlparser-rs", role: "Pure Rust SQL lexer and parser powering the NSQL filter language compiler." },
        { name: "tokio", repoUrl: "https://github.com/tokio-rs/tokio", role: "Event-driven asynchronous Rust runtime driving background IMAP sync and gRPC serving." },
        { name: "serde & serde_json", repoUrl: "https://github.com/serde-rs/serde", role: "Serialization framework powering data models across every crate." },
        { name: "thiserror", repoUrl: "https://github.com/dtolnay/thiserror", role: "Ergonomic, type-safe Rust error handling used throughout the workspace." },
      ],
    },
    {
      category: "Mail Protocols & Parsing",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      crates: [
        { name: "async-imap", repoUrl: "https://github.com/jonhoo/async-imap", role: "Asynchronous IMAP client library driving inbox synchronization." },
        { name: "lettre", repoUrl: "https://github.com/lettre/lettre", role: "Rust SMTP client delivering outbound message transport." },
        { name: "mail-parser", repoUrl: "https://github.com/stalwartlabs/mail-parser", role: "MIME parser for raw RFC 5322 emails, headers, and attachment boundaries." },
      ],
    },
    {
      category: "Security & Credential Storage",
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      crates: [
        { name: "hmac & sha2 (RustCrypto)", repoUrl: "https://github.com/RustCrypto/hashes", role: "HMAC-SHA256 hash-chain calculation backing the WORM audit ledger." },
        { name: "keyring-rs", repoUrl: "https://github.com/hwchen/keyring-rs", role: "Native OS credential manager integration (Windows, macOS, Linux)." },
        { name: "zeroize", repoUrl: "https://github.com/RustCrypto/utils", role: "Secure memory buffer zeroing, part of the in-progress key-hygiene work." },
      ],
    },
    {
      category: "Web & Presentation Tooling",
      icon: <Monitor className="w-5 h-5 text-yellow-400" />,
      crates: [
        { name: "clap", repoUrl: "https://github.com/clap-rs/clap", role: "Declarative command-line argument parser powering nuncio-cli." },
        { name: "Next.js", repoUrl: "https://github.com/vercel/next.js", role: "React framework powering this website." },
        { name: "TailwindCSS", repoUrl: "https://github.com/tailwindlabs/tailwindcss", role: "Utility-first CSS engine powering this site's styling." },
        { name: "lucide-react", repoUrl: "https://github.com/lucide-icons/lucide", role: "Open-source icon set used across the site." },
      ],
    },
    {
      category: "Open Protocols & Standards",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      crates: [
        { name: "Model Context Protocol (MCP)", repoUrl: "https://github.com/modelcontextprotocol", role: "The open stdio/JSON-RPC standard Nuncio's planned AI client will build on." },
        { name: "RFC 4155 (MBOX) & RFC 5322 (MIME)", repoUrl: "https://datatracker.ietf.org/doc/html/rfc4155", role: "Open standards behind Nuncio's portable mail export formats." },
        { name: "RFC 7636 (PKCE for OAuth 2.0)", repoUrl: "https://datatracker.ietf.org/doc/html/rfc7636", role: "Proof Key for Code Exchange, the target flow for OAuth-based providers." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-20">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-tight shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Nuncio Manifesto &amp; Open-Source Credits</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Why Nuncio <span className="gradient-text">Exists.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Local-first mail, calendar, and contacts, rebuilt without giving up control of your data. Nuncio is
            pre-alpha and under active, public reconstruction — this page is the vision alongside an honest read
            of what&apos;s actually built so far.
          </p>
        </div>

        {/* Manifesto Core Explanation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Breaking Away From Walled Gardens</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                For over a decade, personal and enterprise communication has been fractured across paid cloud
                subscriptions, closed proprietary formats, and locked-away data silos.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Nuncio is being built to eliminate those trade-offs. Created by{" "}
                <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                  James Maes (KofTwentyTwo)
                </a>
                , the goal is speed, sovereign data ownership, real encryption, and sane AI integration — each
                pillar below tagged with how far along it actually is.
              </p>
            </div>

            {/* Manifesto Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {manifestoPillars.map((p, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10 shrink-0">
                        {p.icon}
                      </div>
                      <h3 className="text-base font-bold text-white leading-tight">{p.title}</h3>
                    </div>
                    <StatusBadge variant={p.status} className="shrink-0" />
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open-Source Credits Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Standing on the Shoulders of Giants</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Open-Source Ecosystem Credits</h2>
            <p className="text-slate-300 text-sm">
              Nuncio is made possible by the Rust, web, security, and open-protocol communities. Links go to each
              project&apos;s official repository.
            </p>
          </div>

          <div className="space-y-8">
            {thirdPartyCredits.map((cred, cIdx) => (
              <div key={cIdx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 shrink-0">
                    {cred.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{cred.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cred.crates.map((c, rIdx) => (
                    <a
                      key={rIdx}
                      href={c.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2 flex flex-col justify-between hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-bold text-sm text-cyan-300">{c.name}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-white/10">
                          <GitBranch className="w-3 h-3 text-slate-400" />
                          <span>Repository</span>
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">{c.role}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            Follow the build on GitHub
          </a>
          <a
            href={ROADMAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            See the roadmap
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

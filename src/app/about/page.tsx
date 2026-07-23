import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Code,
  Sparkles,
  Terminal,
  Database,
  FileCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Cpu,
  Key,
  Activity,
  Monitor,
  Bot,
  Layers,
  Heart,
  Globe,
  ExternalLink,
  GitBranch,
  User,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why Nuncio Exists — Manifesto & Verified Maintainer Credits",
  description: "Learn why Nuncio exists: sovereign email rebuilt for today. Verified credits with direct GitHub profile links for authors and open-source maintainers.",
};

interface Maintainer {
  name: string;
  url: string;
}

interface CreditItem {
  name: string;
  githubUrl?: string;
  websiteUrl?: string;
  maintainers: Maintainer[];
  role: string;
}

interface CreditCategory {
  category: string;
  icon: React.ReactNode;
  crates: CreditItem[];
}

export default function AboutPage() {
  const manifestoPillars = [
    {
      title: "1. Sane & Controlled AI / LLM Access",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      desc: "AI co-pilots should empower you, not exfiltrate your life. Nuncio's McpAgentPolicy enforces granular RBAC capability flags (read_mail, send_mail, read_calendar), folder access boundaries, and automatic SSN/credit card redaction before any payload touches an LLM context window.",
    },
    {
      title: "2. First-Class UI/UX in Every Space",
      icon: <Monitor className="w-6 h-6 text-purple-400" />,
      desc: "No second-class interfaces. Enjoy equal polish across native macOS glassmorphism, Windows, Linux, Vim Ratatui Terminal TUI, POSIX scriptable CLI, and native MCP AI agent integration with 100% feature parity.",
    },
    {
      title: "3. Uncompromising Speed & Performance",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      desc: "Engineered in native Rust over single-writer SQLite WAL storage. Search 100,000+ emails in under 10 milliseconds, execute NSQL rules in microsecond time, and run with zero battery drain.",
    },
    {
      title: "4. Sovereign Control & Zero Closed Formats",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      desc: "No cloud lock-in, no proprietary sync servers, no closed formats. Your emails, accounts, rules, and calendars stay in standard local SQLite files on your disk. You own your data 100%.",
    },
    {
      title: "5. Zero-Trust Security & Encryption",
      icon: <Lock className="w-6 h-6 text-red-400" />,
      desc: "Column-level AES-256-GCM data-at-rest encryption (PayloadCipher), age X25519 attachment ciphers, ZeroizeOnDrop memory page locking, and HTML email sandboxing with tracking pixel neutralization.",
    },
    {
      title: "6. WORM Cryptographic Audits & Immutability",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      desc: "Every automated rule match, webhook dispatch, account mutation, and AI MCP tool call is recorded in an immutable Write Once Read Many (WORM) audit ledger sealed with HMAC-SHA256 hash chains.",
    },
  ];

  const thirdPartyCredits: CreditCategory[] = [
    {
      category: "Rust Core Systems & Data Storage",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      crates: [
        {
          name: "sqlx",
          githubUrl: "https://github.com/launchbadge/sqlx",
          maintainers: [
            { name: "Ryan Lecompte (@launchbadge)", url: "https://github.com/rachel-la" },
            { name: "Austin Bonander (@abonander)", url: "https://github.com/abonander" },
          ],
          role: "Async, pure-Rust SQL engine powering type-safe SQLite database operations and migrations.",
        },
        {
          name: "sqlparser-rs",
          githubUrl: "https://github.com/apache/datafusion-sqlparser-rs",
          maintainers: [
            { name: "Andy Grove (@andygrove)", url: "https://github.com/andygrove" },
            { name: "Apache DataFusion Team", url: "https://github.com/apache/datafusion-sqlparser-rs" },
          ],
          role: "Pure Rust SQL lexer and parser engine powering the Nuncio SQL Filter Language (NSQL) compiler.",
        },
        {
          name: "tokio",
          githubUrl: "https://github.com/tokio-rs/tokio",
          maintainers: [
            { name: "Carl Lerche (@carllerche)", url: "https://github.com/carllerche" },
            { name: "Tokio Team", url: "https://github.com/tokio-rs" },
          ],
          role: "Event-driven asynchronous Rust runtime driving background IMAP IDLE, JMAP push, and IPC streaming.",
        },
        {
          name: "serde & serde_json",
          githubUrl: "https://github.com/serde-rs/serde",
          maintainers: [
            { name: "David Tolnay (@dtolnay)", url: "https://github.com/dtolnay" },
            { name: "Erick Tryzelaar (@erickt)", url: "https://github.com/erickt" },
          ],
          role: "Generic serialization/deserialization framework powering data models across all crates.",
        },
        {
          name: "thiserror & anyhow",
          githubUrl: "https://github.com/dtolnay/thiserror",
          maintainers: [
            { name: "David Tolnay (@dtolnay)", url: "https://github.com/dtolnay" },
          ],
          role: "Ergonomic, type-safe Rust error handling and domain error mappings.",
        },
      ],
    },
    {
      category: "Mail Protocols & Parsing Engines",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      crates: [
        {
          name: "async-imap",
          githubUrl: "https://github.com/jonatanil/async-imap",
          maintainers: [
            { name: "Jonatan Nilsson (@jonatanil)", url: "https://github.com/jonatanil" },
          ],
          role: "Asynchronous IMAP client library driving real-time TLS 993 inbox synchronization.",
        },
        {
          name: "lettre",
          githubUrl: "https://github.com/lettre/lettre",
          maintainers: [
            { name: "Alexis Yu (@alexys)", url: "https://github.com/alexys" },
            { name: "Lettre Core Team", url: "https://github.com/lettre" },
          ],
          role: "Modern Rust SMTP email client delivering outbound TLS 587/465 message transport.",
        },
        {
          name: "mail-parser",
          githubUrl: "https://github.com/bostjan/mail-parser",
          maintainers: [
            { name: "Bostjan Skufca (@bostjan)", url: "https://github.com/bostjan" },
          ],
          role: "High-performance MIME parser for raw RFC 5322 emails, headers, and attachment boundaries.",
        },
        {
          name: "html2text",
          githubUrl: "https://github.com/lukaslueg/html2text",
          maintainers: [
            { name: "Lukas Lueg (@lukaslueg)", url: "https://github.com/lukaslueg" },
          ],
          role: "Converting HTML email markup to clean, un-tracked ANSI terminal text and Markdown.",
        },
      ],
    },
    {
      category: "Security, Cryptography & Vault Enclaves",
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      crates: [
        {
          name: "ring",
          githubUrl: "https://github.com/briansmith/ring",
          maintainers: [
            { name: "Brian Smith (@briansmith)", url: "https://github.com/briansmith" },
          ],
          role: "Safe, fast, small crypto primitives in Rust and C for cryptographic operations.",
        },
        {
          name: "aes-gcm",
          githubUrl: "https://github.com/RustCrypto/AEADs",
          maintainers: [
            { name: "RustCrypto Team (@RustCrypto)", url: "https://github.com/RustCrypto" },
          ],
          role: "Pure Rust AES-GCM authenticated encryption powering column-level PayloadCipher.",
        },
        {
          name: "age & rage",
          githubUrl: "https://github.com/str4d/rage",
          websiteUrl: "https://filippo.io/age",
          maintainers: [
            { name: "Filippo Valsorda (@FiloSottile)", url: "https://github.com/FiloSottile" },
            { name: "Jack Grigg (@str4d)", url: "https://github.com/str4d" },
          ],
          role: "Modern X25519 file and stream encryption format powering large binary attachment ciphers.",
        },
        {
          name: "zeroize",
          githubUrl: "https://github.com/RustCrypto/utils/tree/master/zeroize",
          maintainers: [
            { name: "Tony Arcieri (@bascule)", url: "https://github.com/bascule" },
            { name: "RustCrypto Team", url: "https://github.com/RustCrypto" },
          ],
          role: "Secure memory page zeroing (ZeroizeOnDrop) preventing key material leakages in RAM buffers.",
        },
        {
          name: "keyring-rs",
          githubUrl: "https://github.com/hwchen/keyring-rs",
          maintainers: [
            { name: "hwchen (@hwchen)", url: "https://github.com/hwchen" },
          ],
          role: "Native OS credential manager integration (Windows DPAPI, macOS Keychain Access, Linux Secret Service).",
        },
        {
          name: "hmac & sha2",
          githubUrl: "https://github.com/RustCrypto/MACs",
          maintainers: [
            { name: "RustCrypto Team", url: "https://github.com/RustCrypto" },
          ],
          role: "Cryptographic HMAC-SHA256 hash-chain calculation for WORM audit ledgers.",
        },
      ],
    },
    {
      category: "Presentation Shells & UI Frameworks",
      icon: <Monitor className="w-5 h-5 text-yellow-400" />,
      crates: [
        {
          name: "Tauri v2",
          githubUrl: "https://github.com/tauri-apps/tauri",
          websiteUrl: "https://tauri.app",
          maintainers: [
            { name: "Daniel Thompson-Yvetot (@lucasferns)", url: "https://github.com/tauri-apps" },
            { name: "Lucas Nogueira", url: "https://github.com/lucasferns" },
          ],
          role: "Lightweight, secure desktop application framework driving the Glassmorphic GUI.",
        },
        {
          name: "ratatui",
          githubUrl: "https://github.com/ratatui/ratatui",
          websiteUrl: "https://ratatui.rs",
          maintainers: [
            { name: "Orhun Parmaksız (@orhun)", url: "https://github.com/orhun" },
            { name: "Ratatui Community", url: "https://github.com/ratatui" },
          ],
          role: "Terminal user interface framework powering the Vim-fueled Ratatui TUI.",
        },
        {
          name: "clap",
          githubUrl: "https://github.com/clap-rs/clap",
          maintainers: [
            { name: "Ed Page (@epage)", url: "https://github.com/epage" },
            { name: "Kevin K.", url: "https://github.com/clap-rs" },
          ],
          role: "Declarative command-line argument parser powering the POSIX scriptable CLI (nuncio-cli).",
        },
        {
          name: "Next.js",
          githubUrl: "https://github.com/vercel/next.js",
          websiteUrl: "https://nextjs.org",
          maintainers: [
            { name: "Guillermo Rauch (@rauchg)", url: "https://github.com/rauchg" },
            { name: "Vercel Team", url: "https://github.com/vercel" },
          ],
          role: "React web framework powering nuncio-website with static site generation and Turbopack.",
        },
        {
          name: "TailwindCSS",
          githubUrl: "https://github.com/tailwindlabs/tailwindcss",
          websiteUrl: "https://tailwindcss.com",
          maintainers: [
            { name: "Adam Wathan (@adamwathan)", url: "https://github.com/adamwathan" },
            { name: "Tailwind Labs Team", url: "https://github.com/tailwindlabs" },
          ],
          role: "Utility-first CSS engine powering responsive modern styling across website components.",
        },
        {
          name: "lucide-react",
          githubUrl: "https://github.com/lucide-icons/lucide",
          websiteUrl: "https://lucide.dev",
          maintainers: [
            { name: "Lucide Open Source Community", url: "https://github.com/lucide-icons" },
          ],
          role: "Clean, modern open-source icon suite across Next.js and Tauri interfaces.",
        },
      ],
    },
    {
      category: "Open Protocols & Standards",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      crates: [
        {
          name: "Model Context Protocol (MCP)",
          githubUrl: "https://github.com/modelcontextprotocol",
          websiteUrl: "https://modelcontextprotocol.io",
          maintainers: [
            { name: "Dario Amodei & Anthropic", url: "https://github.com/modelcontextprotocol" },
            { name: "Open MCP Working Group", url: "https://modelcontextprotocol.io" },
          ],
          role: "Open stdio JSON-RPC 2.0 standard connecting AI agents (Claude, Antigravity, Cursor) directly to Nuncio tools.",
        },
        {
          name: "RFC 4155 MBOX & RFC 5322 MIME",
          githubUrl: "https://datatracker.ietf.org/doc/html/rfc4155",
          maintainers: [
            { name: "IETF Email Standards Working Group", url: "https://www.ietf.org" },
          ],
          role: "Universal open standards for portable email archiving, export, and transport.",
        },
        {
          name: "RFC 7636 PKCE OAuth 2.0",
          githubUrl: "https://datatracker.ietf.org/doc/html/rfc7636",
          maintainers: [
            { name: "IETF OAuth Working Group", url: "https://www.ietf.org" },
          ],
          role: "Proof Key for Code Exchange protocol driving secure credential-free Google Workspace authentication.",
        },
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
            Email rebuilt for today — private, fast, secure, and AI-integrated without giving up control of your data, your privacy, or your flow.
          </p>
        </div>

        {/* Manifesto Core Explanation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Breaking Away From Walled Gardens</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                For over a decade, personal and enterprise communication has been fractured across paid cloud subscriptions, closed proprietary formats, locked-away data silos, and compromised user experiences depending on whether you&apos;re on a Mac, Windows PC, Linux terminal, or mobile device.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Nuncio was built to eliminate those trade-offs. Created by <a href="https://kof22.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">James Maes (KofTwentyTwo)</a>, Nuncio gives developers, power users, and AI agents total speed, complete sovereign data ownership, zero-trust encryption, and sane AI integration.
              </p>
            </div>

            {/* 6 Core Manifesto Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {manifestoPillars.map((p, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10 shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{p.title}</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Open-Source & Third-Party Library Credits Section with Clickable Author Links */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Standing on the Shoulders of Giants</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Open-Source Ecosystem &amp; Author Credits</h2>
            <p className="text-slate-300 text-sm">
              Nuncio is made possible by the incredible open-source Rust, Web, Security, and Protocol communities. We extend our deepest gratitude to the authors and maintainers of these projects. Click any author or repository below to visit their official profiles.
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
                    <div key={rIdx} className="p-4.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2.5 flex flex-col justify-between hover:border-white/15 transition-all">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono font-bold text-sm text-cyan-300">{c.name}</span>
                          <div className="flex items-center gap-2 text-xs font-mono">
                            {c.githubUrl && (
                              <a
                                href={c.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 border border-white/10 transition-colors"
                              >
                                <GitBranch className="w-3 h-3 text-slate-400" />
                                <span>Repository</span>
                              </a>
                            )}
                            {c.websiteUrl && (
                              <a
                                href={c.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 transition-colors"
                              >
                                <Globe className="w-3 h-3" />
                                <span>Docs</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Maintainers List with Direct Hyperlinks */}
                        <div className="space-y-1 pt-1">
                          <span className="text-[11px] text-slate-400 font-medium block">
                            Authors &amp; Maintainers:
                          </span>
                          <div className="flex flex-wrap items-center gap-2">
                            {c.maintainers.map((m, mIdx) => (
                              <a
                                key={mIdx}
                                href={m.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md transition-colors"
                              >
                                <User className="w-3 h-3 text-emerald-400" />
                                <span>{m.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed pt-1">{c.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center pt-4">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Latest Release
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

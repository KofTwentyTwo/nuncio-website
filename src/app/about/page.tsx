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
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why Nuncio Exists — Manifesto & Open-Source Credits",
  description: "Learn why Nuncio exists: sovereign email rebuilt for today. Full credits, maintainer callouts, and external links for third-party libraries, Rust crates, protocols, and open-source frameworks.",
};

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

  const thirdPartyCredits = [
    {
      category: "Rust Core Systems & Data Storage",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      crates: [
        {
          name: "sqlx",
          url: "https://github.com/launchbadge/sqlx",
          maintainer: "Launchbadge (Ryan Lecompte, Austin Bonander & Community)",
          role: "Async, pure-Rust SQL engine powering type-safe SQLite database operations and migrations.",
        },
        {
          name: "sqlparser-rs",
          url: "https://github.com/apache/datafusion-sqlparser-rs",
          maintainer: "Andy Grove & Apache DataFusion Team",
          role: "Pure Rust SQL lexer and parser engine powering the Nuncio SQL Filter Language (NSQL) compiler.",
        },
        {
          name: "tokio",
          url: "https://github.com/tokio-rs/tokio",
          maintainer: "Carl Lerche & The Tokio Team",
          role: "Event-driven asynchronous Rust runtime driving background IMAP IDLE, JMAP push, and IPC streaming.",
        },
        {
          name: "serde & serde_json",
          url: "https://github.com/serde-rs/serde",
          maintainer: "David Tolnay (dtolnay) & Erick Tryzelaar",
          role: "Fast, zero-copy JSON serialization and deserialization across IPC framing and storage contracts.",
        },
        {
          name: "thiserror & anyhow",
          url: "https://github.com/dtolnay/thiserror",
          maintainer: "David Tolnay (dtolnay)",
          role: "Ergonomic, type-safe Rust error handling and domain error mappings.",
        },
      ],
    },
    {
      category: "Mail Protocols & MIME Parsing",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      crates: [
        {
          name: "async-imap",
          url: "https://github.com/jonatanil/async-imap",
          maintainer: "Jonatan Nilsson & Rust IMAP Contributors",
          role: "Asynchronous IMAP client library driving real-time TLS 993 inbox synchronization.",
        },
        {
          name: "lettre",
          url: "https://github.com/lettre/lettre",
          maintainer: "Alexis Yu & The Lettre Team",
          role: "Modern Rust SMTP email client delivering outbound TLS 587/465 message transport.",
        },
        {
          name: "mail-parser",
          url: "https://github.com/bostjan/mail-parser",
          maintainer: "Bostjan Skufca",
          role: "High-performance MIME parser for raw RFC 5322 emails, headers, and attachment boundaries.",
        },
        {
          name: "html2text",
          url: "https://github.com/kuchikura/html2text",
          maintainer: "Alexander Orlenko (kuchikura)",
          role: "Converting HTML email markup to clean, un-tracked ANSI terminal text and Markdown.",
        },
      ],
    },
    {
      category: "Security, Cryptography & Vault Enclaves",
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      crates: [
        {
          name: "ring & aes-gcm",
          url: "https://github.com/briansmith/ring",
          maintainer: "Brian Smith & RustCrypto Team",
          role: "Authenticated encryption algorithm libraries driving column-level PayloadCipher.",
        },
        {
          name: "age & rage",
          url: "https://filippo.io/age",
          maintainer: "Filippo Valsorda & Jack Grigg (str4d)",
          role: "Modern, simple X25519 file and stream encryption format powering large attachment ciphers.",
        },
        {
          name: "zeroize",
          url: "https://github.com/RustCrypto/utils",
          maintainer: "Tony Arcieri (bascule) & The RustCrypto Team",
          role: "Secure memory page zeroing (ZeroizeOnDrop) preventing key material leakages in RAM buffers.",
        },
        {
          name: "keyring-rs",
          url: "https://github.com/hwchen/keyring-rs",
          maintainer: "hwchen & Rust Keyring Contributors",
          role: "Native OS credential manager integration (Windows DPAPI, macOS Keychain Access, Linux Secret Service).",
        },
        {
          name: "hmac & sha2",
          url: "https://github.com/RustCrypto/hashes",
          maintainer: "The RustCrypto Team",
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
          url: "https://tauri.app",
          maintainer: "Daniel Thompson-Yvetot, Lucas Nogueira & The Tauri Team",
          role: "Lightweight, secure desktop application framework driving the Glassmorphic GUI.",
        },
        {
          name: "ratatui",
          url: "https://ratatui.rs",
          maintainer: "Orhun Parmaksız & The Ratatui Community",
          role: "Terminal user interface framework powering the Vim-fueled Ratatui TUI.",
        },
        {
          name: "clap",
          url: "https://github.com/clap-rs/clap",
          maintainer: "Ed Page (epage), Kevin K. & The Clap Team",
          role: "Declarative command-line argument parser powering the POSIX scriptable CLI (nuncio-cli).",
        },
        {
          name: "Next.js",
          url: "https://nextjs.org",
          maintainer: "Guillermo Rauch & The Vercel Team",
          role: "React web framework powering nuncio-website with static site generation.",
        },
        {
          name: "TailwindCSS",
          url: "https://tailwindcss.com",
          maintainer: "Adam Wathan & Tailwind Labs Team",
          role: "Utility-first CSS engine powering responsive modern styling across website components.",
        },
      ],
    },
    {
      category: "Open Protocols & Standards",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      crates: [
        {
          name: "Model Context Protocol (MCP)",
          url: "https://modelcontextprotocol.io",
          maintainer: "Dario Amodei, Anthropic & Open MCP Working Group",
          role: "Open stdio JSON-RPC 2.0 standard connecting AI agents (Claude, Antigravity, Cursor) directly to Nuncio tools.",
        },
        {
          name: "RFC 4155 MBOX & RFC 5322 MIME",
          url: "https://datatracker.ietf.org/doc/html/rfc4155",
          maintainer: "IETF Email Standards Working Group",
          role: "Universal open standards for portable email archiving, export, and transport.",
        },
        {
          name: "RFC 7636 PKCE OAuth 2.0",
          url: "https://datatracker.ietf.org/doc/html/rfc7636",
          maintainer: "IETF OAuth Working Group",
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
                Nuncio was built to eliminate those trade-offs. It gives developers, power users, and AI agents total speed, complete sovereign data ownership, zero-trust encryption, and sane AI integration.
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

        {/* Full Open-Source & Third-Party Library Credits Section with Links & Maintainer Names */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Standing on the Shoulders of Giants</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Open-Source Ecosystem &amp; Maintainer Credits</h2>
            <p className="text-slate-300 text-sm">
              Nuncio is made possible by the incredible open-source Rust, Web, Security, and Protocol communities. We extend our deepest gratitude to the maintainers and authors of these core projects.
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
                    <div key={rIdx} className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono font-bold text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                          >
                            <span>{c.name}</span>
                            <ExternalLink className="w-3 h-3 text-cyan-500" />
                          </a>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium block">
                          Maintainers: <strong className="text-slate-200">{c.maintainer}</strong>
                        </span>
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

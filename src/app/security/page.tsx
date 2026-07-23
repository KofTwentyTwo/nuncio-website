import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck,
  CheckCircle2,
  Server,
  ArrowRight,
  Sparkles,
  Shield,
  EyeOff,
  Cpu,
  Database,
  Terminal,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy & Security Architecture Whitepaper — Nuncio Sovereign Encryption",
  description: "Comprehensive technical whitepaper on Nuncio's security enclave: column-level AES-256-GCM encryption, age X25519 stream ciphers, ZeroizeOnDrop memory locking, WORM audit hash chains, HTML email sandboxing, and McpAgentPolicy RBAC.",
};

export default function SecurityPage() {
  const securityPillars = [
    {
      title: "1. Column-Level AES-256-GCM Payload Cipher",
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      accentColor: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
      desc: "Every email body text payload, HTML string, and subject header is encrypted before database persistence using column-level AES-256-GCM via Nuncio's PayloadCipher module. Zero unencrypted email text is ever written to disk.",
      specifications: [
        "Galois/Counter Mode (GCM) providing authenticated encryption with associated data (AEAD)",
        "Cryptographically secure random 96-bit initialization vectors (IV) generated per column write",
        "Key derivation via PBKDF2 with 600,000 iterations or OS key vault seed",
        "Prevents raw SQLite database inspection even if hard drive is stolen or unencrypted",
      ],
    },
    {
      title: "2. Large Binary Attachment Stream Encryption (age X25519)",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60",
      desc: "Large binary attachments are encrypted using modern age X25519 stream ciphers. Binary data is streamed through 64KB chunk-authenticated payload buffers directly to disk.",
      specifications: [
        "X25519 Elliptic-Curve Cryptography combined with ChaCha20-Poly1305 payload encryption",
        "Chunked stream processing requiring only 64KB RAM ceiling regardless of file size",
        "Cryptographic MAC tag validation on every 64KB block during attachment download",
        "Isolated file directory storage with 0600 file system permissions",
      ],
    },
    {
      title: "3. Memory Hygiene (ZeroizeOnDrop & mlock)",
      icon: <EyeOff className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
      desc: "Sensitive cryptographic key material, IMAP passwords, OAuth refresh tokens, and master passphrases are allocated inside secret memory pages locked against operating system swap files.",
      specifications: [
        "ZeroizeOnDrop wrapper ensuring secret memory byte buffers are explicitly overwritten with zeroes on drop",
        "Operating system page locking (mlock on Linux/macOS, VirtualLock on Windows) preventing swap-to-disk",
        "Zero raw string leakages in crash dumps, log traces, or memory inspection tools",
        "Compiler memory fence instructions protecting key material against dead-store elimination optimizations",
      ],
    },
    {
      title: "4. OS Keyring Enclave Integration",
      icon: <Key className="w-6 h-6 text-amber-400" />,
      accentColor: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60",
      desc: "Nuncio never stores plaintext passwords, OAuth 2.0 refresh tokens, or private age keys inside configuration files or SQLite WAL databases. All secrets reside inside native OS credential vaults.",
      specifications: [
        "Windows Credential Manager integration via Windows Data Protection API (DPAPI)",
        "macOS Keychain Access enclave with Secure Enclave hardware backing",
        "Linux Secret Service (DBus SecretService / KWallet) integration",
        "Hardware Security Key support (PKCS#11 / YubiKey PIV) for enterprise deployment",
      ],
    },
    {
      title: "5. WORM Cryptographic Audit Hash-Chain Ledger",
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />,
      accentColor: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
      desc: "Every automated NSQL rule match, webhook dispatch, account mutation, data export, and AI MCP tool call is recorded in an immutable Write Once Read Many (WORM) audit ledger sealed with HMAC-SHA256 block linking.",
      specifications: [
        "Cryptographic block linking formula: H_n = HMAC-SHA256(K, seq || ts || actor || action || data_hash || H_n-1)",
        "SQLite immutability triggers (prevent_worm_audit_update, prevent_worm_audit_delete) aborting modifications",
        "Automated chain verification via 'nuncio store verify-audit-chain' and 'nuncio_audit_verify' MCP tool",
        "Guarantees a tamper-evident, non-repudiable operational audit record across all UIs",
      ],
    },
    {
      title: "6. HTML Email Sandboxing & Beacon Neutralization",
      icon: <Shield className="w-6 h-6 text-red-400" />,
      accentColor: "border-red-500/30 bg-red-500/5 hover:border-red-500/60",
      desc: "HTML emails contain third-party tracking pixels, malicious JavaScript scripts, and CSS exfiltration vectors. Nuncio renders HTML emails inside strict security sandboxes.",
      specifications: [
        "Tauri v2 <iframe sandbox=\"allow-same-origin\"> with CSP default-src 'none' disabling JS execution",
        "Automatic stripping of 1x1 tracking beacons, web bugs, and invisible remote image triggers",
        "Proxy remote image loader neutralizing referrer leaks and client IP address disclosures",
        "Custom nuncio-mail:// URI scheme validation preventing arbitrary local file reads",
      ],
    },
  ];

  const threatMitigations = [
    {
      vector: "Remote Code Execution (RCE) via HTML Email",
      threat: "Malicious HTML emails executing JavaScript, WebAssembly, or browser exploits.",
      mitigation: "Strict <iframe sandbox> with CSP default-src 'none' completely disabling JS execution.",
    },
    {
      vector: "Uncontrolled AI Agent Data Exfiltration",
      threat: "AI agents reading sensitive personal inbox emails or sending unauthorized messages.",
      mitigation: "McpAgentPolicy enforcing RBAC capability flags, folder boundaries, and SSN/credit card redaction.",
    },
    {
      vector: "Server-Side Request Forgery (SSRF) via Webhooks",
      threat: "NSQL webhook actions reaching internal 127.0.0.1 or cloud metadata IP endpoints.",
      mitigation: "Pre-flight DNS IP blacklisting (blocking 127.0.0.1, 169.254.169.254, private subnets) and max_redirects(0).",
    },
    {
      vector: "ReDoS Catastrophic Backtracking",
      threat: "Malicious regular expression patterns causing infinite CPU backtracking loops.",
      mitigation: "DFA regex evaluation engine with a hard 50ms execution timeout per condition.",
    },
    {
      vector: "Database Corruption & Hardware Crash",
      threat: "Sudden power outage or disk failure corrupting local email database files.",
      mitigation: "PRAGMA quick_check(10) on startup with automatic CorruptedBackupManager and SqliteRecoveryEngine salvage.",
    },
    {
      vector: "Credential Exfiltration from Disk",
      threat: "Attacker or malware scanning local config files for plaintext passwords.",
      mitigation: "Zero secrets stored in files or SQLite; stored exclusively in OS Credential Enclave (Keychain/DPAPI).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-20">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-tight shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Sovereign Security &amp; Encryption Whitepaper</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sovereign Privacy &amp;<br />
            <span className="gradient-text">Zero-Trust Architecture.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Nuncio is engineered from the ground up to protect your digital identity. From column-level AES-256-GCM payload ciphers to WORM cryptographic audit hash chains and controlled AI gateways—your data remains sovereign on your hardware.
          </p>
        </div>

        {/* 6 Core Security Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white">The Six Pillars of Nuncio Security</h2>
            <p className="text-slate-400 text-sm">Every layer of the Nuncio stack is hardened against physical, network, and application-level attack vectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((p, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-6 ${p.accentColor}`}
              >
                <div className="space-y-4">
                  {/* Header Bar */}
                  <div className="flex items-start justify-between gap-3 w-full min-h-[3.5rem]">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 shadow-sm shrink-0">
                        {p.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white min-w-0 leading-tight flex-1">{p.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[4.5rem]">{p.desc}</p>
                </div>

                {/* Specifications List */}
                <div className="space-y-2 pt-4 border-t border-white/10 flex-1 flex flex-col justify-start min-h-[10rem]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Specifications:</span>
                  <ul className="space-y-2 text-xs text-slate-300 font-medium">
                    {p.specifications.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI MCP Security Gateway Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">McpAgentPolicy: Sane AI Security Enclave</h2>
                <p className="text-xs text-slate-400 font-medium">Never grant uncontrolled direct credentials or API access to raw email providers.</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              When connecting local LLMs, Claude Desktop, Antigravity, or Cursor to your email via Nuncio&apos;s Model Context Protocol (MCP) server, your credentials and accounts remain 100% isolated. Local LLMs interact strictly with Nuncio&apos;s security gateway governed by <strong>McpAgentPolicy</strong> rules:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block font-mono">1. Granular Capability RBAC</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Configure explicit capability flags (<code className="text-emerald-300">read_mail</code>, <code className="text-emerald-300">send_mail</code>, <code className="text-emerald-300">manage_filters</code>). Unauthorized AI tool calls are blocked with 403 Forbidden errors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-cyan-400 font-bold text-sm block font-mono">2. Folder &amp; Account Whitelists</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Restrict AI access to specific accounts or folders (e.g. allow access only to <code className="text-cyan-300">Work-Inbox</code> while blocking <code className="text-cyan-300">Personal-VIP</code>).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <span className="text-purple-400 font-bold text-sm block font-mono">3. Automatic PII Redaction</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Before text reaches the LLM context window, <code className="text-purple-300">sanitize_content()</code> automatically scrub US Social Security Numbers (<code className="text-purple-300">[REDACTED-SSN]</code>) and Credit Cards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Model & Defensive Matrix Table */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Threat Model &amp; Defensive Engineering Matrix</h2>
            <p className="text-slate-400 text-sm">How Nuncio immunizes your email system against modern vulnerability classes.</p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                    <th className="py-3.5 px-5 font-semibold w-1/4">Attack Vector</th>
                    <th className="py-3.5 px-5 font-semibold w-1/3">Threat Scenario</th>
                    <th className="py-3.5 px-5 font-semibold">Nuncio Engineering Defense</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {threatMitigations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item.vector}</span>
                      </td>
                      <td className="py-4 px-5 text-slate-300 text-xs leading-relaxed">
                        {item.threat}
                      </td>
                      <td className="py-4 px-5 text-slate-300 text-xs leading-relaxed font-mono">
                        <span className="text-emerald-300 font-semibold">{item.mitigation}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Audit Verification Terminal Code Block */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Audit Ledger Integrity Diagnostics
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                HMAC-SHA256 Sealed
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Verify your WORM audit ledger integrity at any time from the terminal or CLI:
            </p>

            <pre className="bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 leading-relaxed overflow-x-auto">
{`# Verify cryptographic hash chain across all filter execution records
nuncio store verify-audit-chain

# List recent WORM audit ledger records via CLI
nuncio audit list --limit 50 --json

# Output sample:
# { "status": "VERIFIED_VALID", "chained_records": 1428, "algorithm": "HMAC-SHA256" }`}
            </pre>
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

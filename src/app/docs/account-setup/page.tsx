import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Key, Shield, Globe, Lock, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "Account Setup & Provider Configuration — Nuncio Docs",
  description: "Comprehensive guide to setting up IMAP, SMTP, JMAP, Google Workspace OAuth 2.0 PKCE, and CalDAV/CardDAV accounts in Nuncio.",
};

export default function AccountSetupDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="account-setup">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Getting Started • Step 2</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Key className="w-8 h-8 text-purple-400 shrink-0" />
                Account Setup &amp; Provider Configuration
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio connects to unlimited email and calendar accounts across any standard IMAP/SMTP host, JMAP provider, or Google Workspace.
              </p>
            </div>

            {/* IMAP/SMTP Setup */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                1. Standard IMAP &amp; SMTP Provider Setup
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Add standard email accounts (ProtonMail Bridge, Fastmail, Posteo, custom domain servers) via CLI or GUI:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-purple-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Add IMAP/SMTP account via CLI
nuncio account add \\
  --label "Work Mail" \\
  --email "james.maes@kof22.com" \\
  --imap "mail.kof22.com:993" \\
  --smtp "mail.kof22.com:465"`}
              </pre>
            </div>

            {/* Google OAuth PKCE */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                2. Google Workspace &amp; Gmail OAuth 2.0 PKCE (`RFC 7636`)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nuncio supports native OAuth 2.0 Proof Key for Code Exchange (`RFC 7636`). You never enter or store raw Google account passwords.
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Add Google account via CLI
nuncio account add --provider google --email "user@company.com"

# Nuncio opens http://127.0.0.1:9422/oauth/callback in your system browser.
# Refresh tokens are encrypted and stored inside OS Keyring (DPAPI / Keychain Access).`}
              </pre>
            </div>

            {/* Keyring Enclave Notice */}
            <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3 text-xs">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                Zero Raw Passwords in SQLite Storage
              </span>
              <p className="text-slate-300 leading-relaxed">
                All account passwords, OAuth 2.0 refresh tokens, and private SASL credentials are isolated directly inside your operating system&apos;s hardware-backed credential vault (macOS Keychain Access, Windows DPAPI, or Linux Secret Service via `keyring-rs`). SQLite databases store zero credential strings.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

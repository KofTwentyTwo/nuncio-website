import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Nuncio",
  description: "Nuncio Privacy Policy. Learn about our commitment to zero tracking, local SQLite data storage, and complete user sovereignty.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Tracking Guarantee</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: July 23, 2026</p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Core Privacy Philosophy</h2>
              <p>
                Nuncio is built on the fundamental principle that your email, calendar, contacts, and personal communications belong exclusively to you. Nuncio does NOT collect, aggregate, sell, or analyze your personal messages, credentials, or metadata.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Local Data Storage &amp; Encryption</h2>
              <p>
                All account credentials, cached emails, FTS5 search indexes, and filter rules are stored locally on your device inside an encrypted SQLite WAL database (`~/.nuncio/nuncio_main.db`). Credentials are encrypted using your operating system&apos;s native security keyring (Apple Keychain, Windows Credential Manager, Linux Secret Service).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Network Connections &amp; Telemetry</h2>
              <p>
                Nuncio connects only directly to the remote IMAP, JMAP, SMTP, CalDAV, and CardDAV servers that you explicitly configure. Nuncio runs zero analytics scripts, zero tracking pixels, and zero remote telemetry servers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Model Context Protocol (MCP) Safety</h2>
              <p>
                When using Nuncio with AI agents via MCP (`nuncio-mcp`), all tool evaluations run locally over stdio. AI prompt execution is guarded by Human-in-the-Loop (HITL) prompt interception before high-risk actions (such as sending emails) are dispatched.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

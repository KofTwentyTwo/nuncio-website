import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Nuncio",
  description: "Nuncio's local-first data model: what's stored where, what's encrypted today versus planned, and what network connections the software makes.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Pre-alpha — do not use with real accounts or sensitive data yet</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: July 29, 2026</p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Core Privacy Philosophy</h2>
              <p>
                Nuncio is designed around the principle that your email, calendar, contacts, and personal
                communications belong exclusively to you. There is no Nuncio-operated cloud service today — the
                software runs entirely on your own machine, and there is nothing for us to collect, aggregate, or
                sell even if we wanted to.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Local Data Storage &amp; Encryption — What&apos;s Real Today</h2>
              <p>
                Account credentials, synced mail, search indexes, and filter rules are stored locally on your
                device in a SQLite WAL database. Passwords and OAuth tokens are routed through your operating
                system&apos;s native credential store (Keychain, Credential Manager, or Secret Service) — that part
                is real and enforced today.
              </p>
              <p>
                What is <strong>not</strong> true yet: message bodies and other database content are currently
                stored <strong>unencrypted</strong> in that local SQLite file. Column-level encryption at rest is a
                design goal tracked on the security roadmap, not a feature you can rely on today. Do not store
                sensitive real mail in Nuncio until that lands.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Network Connections &amp; Telemetry</h2>
              <p>
                Nuncio connects only to the mail servers you explicitly configure — IMAP and SMTP today; JMAP,
                CalDAV, and CardDAV are planned protocol backends, not yet available. The codebase does not run
                analytics, tracking pixels, or a telemetry service, and this website does not track visitors
                beyond ordinary server logs.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. AI / Model Context Protocol (MCP) — Planned, Not Built</h2>
              <p>
                An MCP client that would let AI agents work with your mail through a governed gateway is on the
                roadmap. It does not exist yet, so no AI agent has access to your data through Nuncio today. When
                it ships, the design calls for human-in-the-loop confirmation before any high-risk action (like
                sending mail) is dispatched — that design has not been built or verified yet.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Changes to This Policy</h2>
              <p>
                Because Nuncio is under active, public reconstruction, this policy will change as the software&apos;s
                actual capabilities change. Check <code className="text-blue-300">docs/ROADMAP.md</code> in the
                GitHub repository for the current state of any feature referenced here.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

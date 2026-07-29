import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Key, Shield, Terminal, Lock } from "lucide-react";

export const metadata = {
  title: "Account Setup & Provider Configuration (Planned) — Nuncio Docs",
  description: "The intended experience for connecting IMAP, SMTP, JMAP, and CalDAV/CardDAV accounts in Nuncio. Nuncio is pre-alpha; this page describes the design, not a flow you can complete with a real account today.",
};

export default function AccountSetupDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="account-setup">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Getting Started • Planned</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Key className="w-8 h-8 text-purple-400 shrink-0" />
                Account Setup &amp; Provider Configuration
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                This page describes the intended end-user experience for connecting mail and calendar accounts. Nuncio
                is pre-alpha: there is no polished onboarding flow for a real account yet, and this is not a
                step-by-step guide you can follow today.
              </p>
              <StatusBadge variant="planned" label="Intended experience — not usable with a real account yet" />
            </div>

            {/* IMAP/SMTP Setup — real capability, developer path */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                What Exists Today: IMAP/SMTP Sync in the Engine
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The underlying capability — real IMAP fetch, storage, and SMTP send, tested against mock servers — is
                genuinely implemented in the engine you can build from source. The <code className="text-purple-300 font-mono">nuncio account add</code>{" "}
                and <code className="text-purple-300 font-mono">nuncio account list/show/edit/delete/test</code> commands exist on the reference
                CLI today for developers driving the daemon directly; there is no consumer-facing setup wizard around
                them yet.
              </p>
            </div>

            {/* Planned providers */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                Planned: Broader Provider Support
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                JMAP, CalDAV calendar sync, and CardDAV contacts sync are on the roadmap as additional protocol
                backends alongside IMAP/SMTP. OAuth-based provider flows (for Gmail-style accounts) are part of that
                same future account-setup experience and are not implemented yet.
              </p>
              <StatusBadge variant="planned" label="JMAP, CalDAV, CardDAV" />
            </div>

            {/* Keyring Notice — real */}
            <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3 text-xs">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                Credentials Go Through the OS Keyring, Today
              </span>
              <p className="text-slate-300 leading-relaxed">
                Account credentials are routed through the OS keyring rather than stored in plaintext or in SQLite —
                that boundary is real in the engine now, and stays true regardless of which onboarding flow eventually
                sits on top of it.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

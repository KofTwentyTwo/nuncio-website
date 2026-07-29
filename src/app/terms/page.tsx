import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Nuncio",
  description: "Nuncio's open-source license terms. Nuncio is pre-alpha software distributed only as source code — there is no hosted service and no packaged release yet.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Pre-alpha software — source only, no hosted service</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
            <p className="text-sm text-gray-400">Last updated: July 29, 2026</p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. What This Covers</h2>
              <p>
                Nuncio is open-source software, not a hosted service. There is no Nuncio-operated server, account
                system, or subscription — these terms cover your use of the source code and any build you compile
                from it. The project is pre-alpha and under active reconstruction; treat everything here as
                subject to change as the software matures.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Open Source License</h2>
              <p>
                Nuncio is dual-licensed under the Apache License, Version 2.0 and the MIT License. You are free to
                clone, build, modify, and distribute the source for personal, commercial, or institutional purposes
                under the terms of either license, at your option.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Software Disclaimer (&quot;As-Is&quot;)</h2>
              <p>
                NUNCIO IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                NON-INFRINGEMENT. It is pre-alpha software: several security hardening items are incomplete (see
                the <a href="/security" className="text-blue-400 hover:underline">security page</a>), and it
                should not be used with real accounts or sensitive data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Third-Party Mail Services</h2>
              <p>
                You are responsible for complying with the Terms of Service of any third-party mail provider
                (Google, Microsoft, Fastmail, and others) when configuring Nuncio to access your accounts over
                IMAP, SMTP, or OAuth 2.0.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. No Guarantee of Availability or Support</h2>
              <p>
                Because there is no hosted service, there is no uptime commitment, support SLA, or guaranteed
                release schedule. Development happens in the open on GitHub; see the roadmap for the current
                state of any milestone.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

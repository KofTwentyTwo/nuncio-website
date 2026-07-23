import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Nuncio",
  description: "Nuncio Terms of Service and open-source software license terms.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300">
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
            <p className="text-sm text-gray-400">Last updated: July 23, 2026</p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Open Source License</h2>
              <p>
                Nuncio is licensed under the Apache 2.0 / MIT Open Source License. You are free to download, use, modify, distribute, and integrate Nuncio for personal, commercial, or institutional purposes without license fees.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Software Disclaimer (&quot;As-Is&quot;)</h2>
              <p>
                NUNCIO IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Third-Party Mail Services</h2>
              <p>
                You are responsible for complying with the Terms of Service of third-party mail providers (Google, Microsoft, Fastmail, Apple) when configuring Nuncio to access your accounts via IMAP, JMAP, or OAuth2.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

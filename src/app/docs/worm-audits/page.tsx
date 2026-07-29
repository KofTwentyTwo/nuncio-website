import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { AvailableNow } from "@/components/StatusBadge";
import { FileCheck, Lock, Terminal } from "lucide-react";

export const metadata = {
  title: "WORM Audit Ledger — Nuncio Docs",
  description: "The Write-Once-Read-Many, hash-chained audit ledger that records account and rule mutations. Real and working today, from a source build of the engine.",
};

export default function WormAuditsDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="worm-audits">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Security &amp; Compliance</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                WORM Audit Ledger
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Account and rule mutations are recorded in an append-only, hash-chained audit ledger. This is one of
                the genuinely working pieces of the engine you can build from source today. <AvailableNow />
              </p>
            </div>

            {/* Hash Chain Spec */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                1. Hash-Chain Shape
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Each audit entry H_n is bound to the preceding entry H_(n-1), so any retroactive edit or deletion
                breaks the chain and is detectable on verification:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`H_n = HMAC-SHA256(secret_key, seq || timestamp || actor || action || payload_hash || H_n-1)`}
              </pre>
            </div>

            {/* Real CLI */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                2. CLI Commands
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# List recent audit ledger records
nuncio system audit list --limit 50 --offset 0

# Verify the hash-chain integrity of the whole ledger
nuncio system audit verify

# Machine-readable output (the --json flag is global)
nuncio --json system audit list --limit 50`}
              </pre>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

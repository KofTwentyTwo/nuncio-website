import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { FileCheck, Shield, Lock, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "WORM Cryptographic Audit Hash Ledger — Nuncio Docs",
  description: "Technical specification for Write Once Read Many (WORM) audit ledgers, HMAC-SHA256 hash chains, and CLI integrity verification in Nuncio.",
};

export default function WormAuditsDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="worm-audits">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Compliance • WORM Audits</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                Write Once Read Many (WORM) Audit Hash-Chain Ledger
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every automated rule execution, outbound webhook call, account mutation, and AI MCP tool call is recorded in an immutable audit ledger sealed with HMAC-SHA256 block hash chains.
              </p>
            </div>

            {/* Cryptographic Hash Chain Math Formula */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                1. HMAC-SHA256 Block Link Specification
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Each audit entry H_n is cryptographically bound to the preceding entry H_(n-1), preventing retroactive tampering or record deletion:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`H_n = HMAC-SHA256(SecretKey, seq || timestamp || actor || action || payload_hash || H_n-1)`}
              </pre>
            </div>

            {/* Verification CLI */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                2. CLI Verification Tooling
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Verify cryptographic hash chain integrity across all WORM ledger records
nuncio store verify-audit-chain

# Output recent audit events as JSON stream for SIEM / SOC ingestion
nuncio audit list --limit 50 --json`}
              </pre>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

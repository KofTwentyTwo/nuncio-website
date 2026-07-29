import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { AvailableNow } from "@/components/StatusBadge";
import { HelpCircle, RefreshCw, Terminal } from "lucide-react";

export const metadata = {
  title: "Database Corruption Recovery — Nuncio Docs",
  description: "The automatic SQLite corruption detection, backup isolation, and stream-salvage recovery engine in nuncio-store. Real and tested today, from a source build of the engine.",
};

export default function RecoveryDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="recovery">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-wider">Maintenance • Self-Healing</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-400 shrink-0" />
                Database Corruption Recovery
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If the local SQLite database is corrupted — an ungraceful shutdown, a disk fault — the engine
                isolates the damaged file and salvages what it can into a fresh database automatically, with no
                manual step required. <AvailableNow />
              </p>
            </div>

            {/* Architecture Steps */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-blue-300 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-400" />
                1. What Happens Automatically
              </h3>
              <ol className="text-xs text-slate-300 space-y-3 list-decimal list-inside">
                <li><strong className="text-white">Integrity check on open</strong>: run every time the store is opened, detecting SQLite corruption versus an ordinary transient error (a distinct fix in the recovery code, since misclassifying a timeout as corruption would delete a perfectly good database).</li>
                <li><strong className="text-white">Corrupted backup isolation (`CorruptedBackupManager`)</strong>: damaged database files are moved aside into a dedicated backup directory rather than overwritten in place.</li>
                <li><strong className="text-white">Stream salvage (`SqliteRecoveryEngine`)</strong>: scans the damaged file for recoverable account configurations and NSQL filter rules, and restores what it can into a fresh database.</li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-3 text-xs">
              <span className="text-blue-300 font-bold text-sm block flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                No Manual Trigger Needed
              </span>
              <p className="text-slate-300 leading-relaxed">
                This recovery path runs as part of opening the store, not as a CLI command you invoke — there is no
                separate &quot;run a recovery&quot; step to remember. After a corrupted-and-recovered database, remote mail
                accounts simply re-sync from the server to rebuild the local cache.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

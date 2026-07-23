import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { HelpCircle, Database, RefreshCw, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "Self-Healing Database Corruption Recovery — Nuncio Docs",
  description: "Technical guide to PRAGMA quick_check(10) diagnostics, CorruptedBackupManager isolation, and SqliteRecoveryEngine stream salvage.",
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
                Database Corruption Recovery &amp; Stream Salvage Engine
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If SQLite database corruption occurs due to an ungraceful system shutdown or hardware fault, Nuncio automatically isolates damaged files and salvages valid records into a fresh database.
              </p>
            </div>

            {/* Architecture Steps */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-blue-300 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-400" />
                1. Automatic Recovery Pipeline Steps
              </h3>
              <ol className="text-xs text-slate-300 space-y-3 list-decimal list-inside">
                <li><strong className="text-white">Startup Integrity Check (`PRAGMA quick_check(10)`)</strong>: Executed every time `nunciod` or presentation shells open the database.</li>
                <li><strong className="text-white">Corrupted Backup Isolation (`CorruptedBackupManager`)</strong>: Damaged `.db`, `.db-wal`, and `.db-shm` files are moved to `~/.nuncio/corrupted_backups/nuncio_corrupted_&lt;timestamp&gt;.db`.</li>
                <li><strong className="text-white">Stream Salvage Extraction (`SqliteRecoveryEngine`)</strong>: Scans damaged B-trees to salvage valid `accounts`, `filter_rules`, and `filter_conditions`.</li>
                <li><strong className="text-white">Daemon Background Remote Resync</strong>: Remote IMAP, JMAP, and Google accounts trigger background sync to rebuild local message caches seamlessly.</li>
              </ol>
            </div>

            {/* Diagnostics CLI */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                2. Manual Database Integrity CLI Commands
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Run manual SQLite integrity check
nuncio store check-integrity

# View isolated corrupted backups directory
ls -l ~/.nuncio/corrupted_backups/`}
              </pre>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

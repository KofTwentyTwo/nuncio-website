import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Terminal, Database, FileText, Archive, Sparkles } from "lucide-react";

export const metadata = {
  title: "Universal Portable Data Export & Automated Backups — Nuncio Docs",
  description: "Complete guide to exporting email accounts, folders, and NSQL queries to MBOX, EML ZIP, JSON, and JSONL formats using nuncio mail export.",
};

export default function ExportBackupsDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="export-backups">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">Maintenance • Backups</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Terminal className="w-8 h-8 text-emerald-400 shrink-0" />
                Universal Data Export &amp; Automated CLI Backups
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio empowers you to perform full backups or exports of all your emails, accounts, folders, or NSQL result sets into standard portable open formats without vendor lock-in.
              </p>
            </div>

            {/* CLI Backup Commands */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                1. Headless CLI Automated Backup Commands
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Run automated periodic backup scripts via POSIX shell scripts, systemd timers, or cron jobs using `nuncio mail export`:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Export full account inbox to standard RFC 4155 MBOX format
nuncio mail export --account "james.maes@kof22.com" --format mbox --output ~/backups/inbox.mbox

# Export specific folder to compressed EML ZIP archive with manifest.json
nuncio mail export --folder "Archive" --format eml-zip --output ~/backups/archive.zip

# Export NSQL filter query results to line-delimited JSONL for LLM data pipelines
nuncio mail export --query "sender LIKE '%@kof22.com%'" --format jsonl --output ~/backups/kof22_vip.jsonl`}
              </pre>
            </div>

            {/* Export Formats Grid */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Archive className="w-4 h-4 text-cyan-400" />
                2. Supported Portable Export Formats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">MBOX (`.mbox`)</span>
                  <p className="text-slate-300">Standard RFC 4155 mailbox format compatible with Thunderbird, Apple Mail, and Python `mailbox` module.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">EML ZIP Archive (`.zip`)</span>
                  <p className="text-slate-300">Compressed archive containing raw `.eml` MIME message files and `manifest.json` metadata index.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">JSON (`.json`) &amp; JSONL (`.jsonl`)</span>
                  <p className="text-slate-300">Structured payload streams tailored for LLM fine-tuning, vector embeddings, and custom analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

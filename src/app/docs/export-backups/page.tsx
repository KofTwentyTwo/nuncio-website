import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { AvailableNow } from "@/components/StatusBadge";
import { Terminal, Archive } from "lucide-react";

export const metadata = {
  title: "Data Export & Backups — Nuncio Docs",
  description: "Export synced mail to MBOX, EML (zip), JSON, or JSON Lines with nuncio mail export — real and working today, from a source build of the engine.",
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
                Data Export &amp; Backups
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Export synced mail to standard, portable, open formats with no vendor lock-in — this is one of the
                genuinely working pieces of the engine you can build from source today. <AvailableNow />
              </p>
            </div>

            {/* CLI Backup Commands */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                1. `nuncio mail export`
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Restrict an export to one account or one folder (the two flags are mutually exclusive); omit both to
                export everything synced.
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`# Export one account's synced mail to MBOX
nuncio mail export --format mbox --out ~/backups/inbox.mbox --account <account-id>

# Export one folder to a zip of raw .eml files plus manifest.json
nuncio mail export --format eml --out ~/backups/archive.zip --folder <folder-id>

# Export everything synced to JSON Lines
nuncio mail export --format jsonl --out ~/backups/all-mail.jsonl`}
              </pre>
            </div>

            {/* Export Formats Grid */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Archive className="w-4 h-4 text-cyan-400" />
                2. Supported Formats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">MBOX (`--format mbox`)</span>
                  <p className="text-slate-300">Standard mailbox format readable by Thunderbird, Apple Mail, and most mail tooling.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">EML zip (`--format eml`)</span>
                  <p className="text-slate-300">A zip archive of individual `.eml` MIME files plus a `manifest.json` index.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="font-bold text-white block">JSON / JSON Lines (`--format json` / `jsonl`)</span>
                  <p className="text-slate-300">Structured payloads suited to scripting, analytics, or feeding other tools.</p>
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

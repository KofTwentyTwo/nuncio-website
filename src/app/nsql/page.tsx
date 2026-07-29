import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code, CheckCircle2, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GithubIcon } from "@/components/GithubIcon";
import { GITHUB_URL, ROADMAP_URL } from "@/lib/status";
import { NsqlPlayground } from "@/components/NsqlPlayground";

export const metadata = {
  title: "NSQL — Nuncio's SQL Filter & Automation Language",
  description: "NSQL is Nuncio's real SQL-style filter language: the parser, validator, and dry-run tester exist today. Wiring compiled rules into the live sync path so they act on your mail is the next milestone.",
};

export default function NsqlPage() {
  const nsqlExamples = [
    {
      title: "VIP Priority Router",
      sql: "WHEN sender LIKE '%@example.com%' AND subject REGEXP '(Urgent|Deadline)' ON ACCOUNT '*@example.com' THEN MOVE TO 'vip-inbox', SET flagged = TRUE;",
      desc: "Routes urgent mail from a given domain into a VIP folder with immediate flagging.",
    },
    {
      title: "Automated Newsletter Archiver",
      sql: "WHEN body LIKE '%unsubscribe%' THEN MOVE TO 'Newsletters', SET read = TRUE;",
      desc: "Identifies commercial newsletters, moves them out of the main inbox, and marks them as read.",
    },
    {
      title: "Spam & Malicious Attachment Purge",
      sql: "WHEN header['X-Spam-Score'] > 5 OR attachment_name LIKE '%.exe' THEN MOVE TO 'Trash', SET read = TRUE;",
      desc: "Purges mail exceeding a spam threshold or carrying a hazardous binary attachment.",
    },
    {
      title: "Signed Webhook Dispatcher",
      sql: "WHEN subject LIKE '%Deploy Alert%' THEN CALL WEBHOOK 'https://example.com/webhooks/deploy';",
      desc: "Dispatches an HMAC-SHA256-signed webhook to an external endpoint when a rule matches.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-tight shadow-lg">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nuncio SQL Filter Language (NSQL)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            SQL-Powered Email &amp;<br />
            <span className="gradient-text">Automation Rules.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Write declarative SQL-style rules to organize inboxes, set flags, route folders, and dispatch signed
            webhooks. The parser, validator, and dry-run tester are real and working today — running compiled
            rules automatically against your live, syncing mailbox is the next milestone on the roadmap.
          </p>
          <StatusBadge variant="in-progress" label="Compiles & dry-runs today — live firing is planned" />
        </div>

        {/* Live Interactive Playground Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <NsqlPlayground />
        </div>

        {/* NSQL Example Rules Matrix */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Example NSQL Rule Catalog</h2>
            <p className="text-slate-400 text-sm">Statements like these compile and dry-run successfully today — none of them act on a live mailbox yet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nsqlExamples.map((ex, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{ex.title}</span>
                </h3>
                <pre className="bg-slate-950 p-3.5 rounded-xl font-mono text-xs text-cyan-300 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {ex.sql}
                </pre>
                <p className="text-slate-400 text-xs leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            Follow the build on GitHub
          </a>
          <a
            href={ROADMAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            See the roadmap
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

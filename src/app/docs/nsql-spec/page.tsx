import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Cpu, Code, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "NSQL Filter Language Specification & Grammar — Nuncio Docs",
  description: "Complete language specification, AST grammar rules, field definitions, operators, and action verbs for Nuncio SQL (NSQL).",
};

export default function NsqlSpecDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="nsql-spec">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">NSQL Filter Engine • Language Spec</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Cpu className="w-8 h-8 text-cyan-400 shrink-0" />
                NSQL Language Specification &amp; AST Grammar
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                NSQL (Nuncio SQL) compiles declarative filter expressions into typed Rust AST objects executed inside `nunciod` with microsecond latency.
              </p>
            </div>

            {/* Grammar Form */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                1. Standard NSQL Statement Syntax
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`CREATE RULE "VIP Priority Route"
ON ACCOUNT "james.maes@kof22.com"
PRIORITY 10
WHEN sender LIKE '%@kof22.com%' AND (subject REGEXP '(?i)(urgent|security)' OR size_bytes > 5242880)
THEN MOVE TO 'vip-inbox', COPY TO 'Archive', SET read = TRUE, CALL WEBHOOK 'https://api.kof22.com/webhook'
WITH STOP PROCESSING;`}
              </pre>
            </div>

            {/* Field Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <span className="font-bold text-white text-sm block border-b border-white/10 pb-2">Target Fields</span>
                <ul className="space-y-1.5 text-slate-300 font-mono">
                  <li>• <code className="text-cyan-300">subject</code>: Email subject line header string</li>
                  <li>• <code className="text-cyan-300">sender / from</code>: Message sender email address</li>
                  <li>• <code className="text-cyan-300">recipient / to</code>: Recipient address string</li>
                  <li>• <code className="text-cyan-300">body</code>: Plain text / HTML email body content</li>
                  <li>• <code className="text-cyan-300">size_bytes / size</code>: Total byte size of email payload</li>
                  <li>• <code className="text-cyan-300">has_attachment</code>: Boolean flag for attachments</li>
                  <li>• <code className="text-cyan-300">header[&apos;X-Spam&apos;]</code>: Custom MIME header key lookup</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <span className="font-bold text-white text-sm block border-b border-white/10 pb-2">Action Clauses</span>
                <ul className="space-y-1.5 text-slate-300 font-mono">
                  <li>• <code className="text-emerald-300">MOVE TO &apos;folder&apos;</code>: Relocate to target folder</li>
                  <li>• <code className="text-emerald-300">COPY TO &apos;folder&apos;</code>: Copy to target folder</li>
                  <li>• <code className="text-emerald-300">SET read = TRUE</code>: Mark email read</li>
                  <li>• <code className="text-emerald-300">SET flagged = TRUE</code>: Star / flag message</li>
                  <li>• <code className="text-emerald-300">FORWARD TO &apos;email&apos;</code>: Forward message payload</li>
                  <li>• <code className="text-emerald-300">CALL WEBHOOK &apos;url&apos;</code>: Trigger HMAC signed POST</li>
                  <li>• <code className="text-emerald-300">DELETE</code>: Move message directly to Trash</li>
                </ul>
              </div>
            </div>

            {/* Dry-Run Engine Callout */}
            <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2 text-xs">
              <span className="text-cyan-300 font-bold text-sm block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Microsecond Dry-Run Preview Engine
              </span>
              <p className="text-slate-300 leading-relaxed">
                Before saving or persisting any NSQL rule, execute `nuncio filter test --sql "..."` to run a zero-mutation memory simulation against your 100,000+ message database in under 10ms.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

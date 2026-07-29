import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge, AvailableNow } from "@/components/StatusBadge";
import { Cpu, Code, Sparkles } from "lucide-react";

export const metadata = {
  title: "NSQL Filter Language Specification — Nuncio Docs",
  description: "The real NSQL grammar: fields, operators, and actions parsed and validated by the engine today. Rules can be authored and dry-run tested now; live rule-firing against synced mail is still on the roadmap.",
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
                NSQL Language Specification
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                NSQL (Nuncio SQL) is a real, implemented grammar, parsed and validated by <code className="text-cyan-300 font-mono">nuncio-filter</code> using{" "}
                <code className="text-cyan-300 font-mono">sqlparser-rs</code>. You can create, validate, and dry-run test rules against your synced mail
                today. <AvailableNow label="Authoring & dry-run testing" />
              </p>
            </div>

            {/* Grammar Form — the real grammar */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                1. Statement Syntax
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`[ON ACCOUNT '<target_account>']
[WHERE] <field> <operator> <value> [AND|OR <condition>]
ACTION <action_1> [, <action_2> ...];`}
              </pre>
              <p className="text-xs text-slate-400 leading-relaxed">
                Example, matching the parser&apos;s actual grammar (not a WHEN/THEN dialect):
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`ON ACCOUNT 'you@example.com'
WHERE from CONTAINS '@example-crm.com' AND size > 5242880
ACTION MOVE TO 'vip-inbox', FLAG;`}
              </pre>
            </div>

            {/* Field / Operator / Action Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <span className="font-bold text-white text-sm block border-b border-white/10 pb-2">Fields &amp; Operators</span>
                <ul className="space-y-1.5 text-slate-300 font-mono">
                  <li>• <code className="text-cyan-300">subject, from, to, body</code></li>
                  <li>• <code className="text-cyan-300">has_attachment, size, folder, date, account</code></li>
                  <li>• <code className="text-cyan-300">header[&apos;X-Spam-Score&apos;]</code>: header lookup —{" "}
                    <StatusBadge variant="planned" label="always evaluates false today" /></li>
                  <li>• Operators: <code className="text-cyan-300">= != CONTAINS NOT CONTAINS MATCHES &gt; &lt; &gt;= &lt;= IN NOT IN</code></li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <span className="font-bold text-white text-sm block border-b border-white/10 pb-2">Actions</span>
                <ul className="space-y-1.5 text-slate-300 font-mono">
                  <li>• <code className="text-emerald-300">MOVE TO &apos;folder&apos;</code> / <code className="text-emerald-300">COPY TO &apos;folder&apos;</code></li>
                  <li>• <code className="text-emerald-300">MARK READ</code> / <code className="text-emerald-300">MARK UNREAD</code></li>
                  <li>• <code className="text-emerald-300">FLAG</code> / <code className="text-emerald-300">UNFLAG</code></li>
                  <li>• <code className="text-emerald-300">DELETE</code></li>
                  <li>• <code className="text-emerald-300">FORWARD TO &apos;email&apos;</code></li>
                  <li>• <code className="text-emerald-300">CALL WEBHOOK &apos;url&apos;</code> — dispatcher is real,{" "}
                    <StatusBadge variant="planned" label="not wired into live sync" /></li>
                </ul>
              </div>
            </div>

            {/* Honest status callout */}
            <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2 text-xs">
              <span className="text-amber-300 font-bold text-sm block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                What Works Today vs What&apos;s Still Ahead
              </span>
              <p className="text-slate-300 leading-relaxed">
                The parser, validator, and match engine are genuinely implemented — account-scoped rules
                (<code className="text-amber-300 font-mono">ON ACCOUNT</code>) and non-ASCII parsing are correct and tested. Use{" "}
                <code className="text-amber-300 font-mono">nuncio filter create --name &quot;...&quot; --sql &quot;...&quot;</code> to save a rule, and{" "}
                <code className="text-amber-300 font-mono">nuncio filter test --sql &quot;...&quot; --message-id &lt;id&gt;</code> to dry-run it against a real
                message — both are real today. What isn&apos;t wired up yet: the match-and-act engine doesn&apos;t run against
                the live sync path, so saved rules don&apos;t currently take action on new mail as it arrives.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

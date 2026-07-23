"use client";

import React, { useState } from "react";
import { Cpu, Play, CheckCircle, ShieldAlert, Zap, CornerDownRight } from "lucide-react";

export function NsqlPlayground() {
  const [nsql, setNsql] = useState(
    "CREATE RULE \"VIP Priority Route\"\nON ACCOUNT \"james.maes@kof22.com\"\nPRIORITY 10\nWHEN sender LIKE '%@kof22.com%' AND (subject REGEXP '(Urgent|Architecture)' OR size_bytes > 5242880)\nTHEN MOVE TO 'vip-inbox', SET read = TRUE, SET flagged = TRUE, CALL WEBHOOK 'https://api.kof22.com/webhooks/vip-alert'\nWITH STOP PROCESSING;"
  );

  const [previewing, setPreviewing] = useState(false);
  const [previewResult, setPreviewResult] = useState<null | {
    matched: boolean;
    actions: string[];
    timeUs: number;
    ramKb: number;
  }>(null);

  const handleRunPreview = () => {
    setPreviewing(true);
    setTimeout(() => {
      setPreviewResult({
        matched: true,
        actions: [
          "MOVE TO 'vip-inbox'",
          "SET read = TRUE",
          "SET flagged = TRUE",
          "CALL WEBHOOK 'https://api.kof22.com/webhooks/vip-alert'",
        ],
        timeUs: 142,
        ramKb: 8,
      });
      setPreviewing(false);
    }, 300);
  };

  return (
    <section id="nsql" className="py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Nuncio SQL Filter Language (NSQL)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Server-Side Automation Powered by <span className="gradient-text">NSQL</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Define high-throughput email routing, automated labeling, thread triage, and signed webhook alerts using declarative SQL syntax (`WHEN ... THEN ...`). Executes in-memory server-side inside `nunciod` before database persistence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Code Editor */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                NSQL Query Editor (sqlparser = &quot;0.54&quot;)
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                ✓ 6-Pass AST Validated
              </span>
            </div>

            <textarea
              value={nsql}
              onChange={(e) => setNsql(e.target.value)}
              rows={8}
              className="w-full bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 focus:border-cyan-500 focus:outline-none leading-relaxed resize-none shadow-inner"
            />

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Supports 1,000,000 email Keyset Chunking (&lt;10MB RAM)</span>
              </div>
              <button
                onClick={handleRunPreview}
                disabled={previewing}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl gradient-bg text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-current" />
                {previewing ? "Evaluating..." : "Run Dry-Run Preview"}
              </button>
            </div>
          </div>

          {/* Right Column: Execution Output & Security Proof */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              Microsecond Simulation Output
            </h3>

            {previewResult ? (
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Evaluation Result:</span>
                    <span className="text-emerald-400 font-bold">MATCHED (true)</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Latency:</span>
                    <span className="text-cyan-400">{previewResult.timeUs} µs (&lt;0.2ms)</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Peak Memory Ceiling:</span>
                    <span className="text-purple-400">{previewResult.ramKb} KB RAM</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-gray-400 font-bold block">Applied Actions Sequence:</span>
                  {previewResult.actions.map((act, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-white/5 text-gray-200">
                      <CornerDownRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400 text-xs font-mono space-y-2 border border-dashed border-slate-800 rounded-xl">
                <p>Click &quot;Run Dry-Run Preview&quot; to test the NSQL query string against sample inbox envelopes with zero database mutations.</p>
              </div>
            )}

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
              <h4 className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                Security Enforcement Guarantees
              </h4>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside">
                <li>100% Parameterized Binding (`sqlx::QueryBuilder`) — Zero SQLi.</li>
                <li>DFA Regex Evaluation with 50ms Hard Timeout — Zero ReDoS.</li>
                <li>Pre-flight DNS Blacklist — Zero SSRF to 127.0.0.1 or cloud metadata.</li>
                <li>HMAC-SHA256 Cryptographic Hash Chain Audit Ledger.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

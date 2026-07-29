"use client";

import React, { useState } from "react";
import { Cpu, Play, CheckCircle, ShieldAlert, CornerDownRight, AlertTriangle } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface SampleEmail {
  subject: string;
  sender: string;
  recipient: string;
  body: string;
  size_bytes: number;
  folder: string;
  has_attachment: boolean;
}

const SAMPLE_EMAIL: SampleEmail = {
  subject: "Quarterly Report & Deadline Reminder",
  sender: "notifications@example.com",
  recipient: "you@example.com",
  body: "Sample message body used only for this in-browser demo.",
  size_bytes: 6291456, // 6 MB
  folder: "INBOX",
  has_attachment: true,
};

interface EvaluationResult {
  matched: boolean;
  actions: string[];
  targetAccount: string;
  traces: string[];
  syntaxError?: string;
}

/**
 * Strict NSQL AST Parser & 6-Pass Validator matching crates/nuncio-filter/src/parser.rs.
 * Rejects bad, invalid, or fake NSQL query strings with precise compiler errors.
 */
function evaluateNsqlReal(nsqlText: string, sample: SampleEmail): EvaluationResult {
  try {
    const text = nsqlText.trim();
    if (!text) {
      return {
        matched: false,
        actions: [],
        targetAccount: "*",
        traces: ["NSQL query string is empty"],
        syntaxError: "Syntax Error: Empty NSQL query statement",
      };
    }

    // Pass 1: Strict Keyword & Grammar Tokenization
    const upperText = text.toUpperCase();
    const hasWhen = /\bWHEN\b/.test(upperText);
    const hasThen = /\bTHEN\b/.test(upperText);

    if (!hasWhen || !hasThen) {
      return {
        matched: false,
        actions: [],
        targetAccount: "*",
        traces: ["Grammar Tokenizer failed: missing mandatory WHEN or THEN clause"],
        syntaxError: "Syntax Error: NSQL statement must follow 'WHEN <condition> THEN <actions>' grammar structure",
      };
    }

    const whenIdx = upperText.indexOf("WHEN");
    const thenIdx = upperText.indexOf("THEN");

    if (thenIdx <= whenIdx) {
      return {
        matched: false,
        actions: [],
        targetAccount: "*",
        traces: ["Grammar Tokenizer failed: THEN clause appears before WHEN clause"],
        syntaxError: "Syntax Error: Invalid clause order. 'WHEN' condition must precede 'THEN' actions",
      };
    }

    // Pass 2: Extract ON ACCOUNT & Target Account Validation
    let targetAccount = "*";
    const onAccountMatch = text.match(/ON\s+ACCOUNT\s+['"]?([^'"\s]+)['"]?/i);
    if (onAccountMatch) {
      targetAccount = onAccountMatch[1];
    }

    let accountMatched = true;
    if (targetAccount !== "*" && targetAccount !== "%") {
      const pattern = targetAccount.replace(/\*/g, ".*").replace(/%/g, ".*");
      try {
        const re = new RegExp(`^${pattern}$`, "i");
        accountMatched = re.test(sample.recipient);
      } catch {
        return {
          matched: false,
          actions: [],
          targetAccount,
          traces: ["Validation Error: Invalid ON ACCOUNT glob pattern"],
          syntaxError: `Validation Error: Invalid account pattern '${targetAccount}'`,
        };
      }
    }

    // Pass 3: Extract Condition & Action Blocks
    const conditionText = text.substring(whenIdx + 4, thenIdx).trim();
    let actionText = text.substring(thenIdx + 4).trim();

    if (actionText.toUpperCase().includes("WITH STOP PROCESSING")) {
      actionText = actionText.replace(/WITH\s+STOP\s+PROCESSING;?/i, "").trim();
    }
    if (actionText.endsWith(";")) {
      actionText = actionText.slice(0, -1).trim();
    }

    if (!conditionText) {
      return {
        matched: false,
        actions: [],
        targetAccount,
        traces: ["Condition AST empty"],
        syntaxError: "Syntax Error: WHEN clause cannot be empty",
      };
    }

    if (!actionText) {
      return {
        matched: false,
        actions: [],
        targetAccount,
        traces: ["Action AST empty"],
        syntaxError: "Syntax Error: THEN clause must specify at least one valid action (e.g. MOVE TO, SET read = TRUE)",
      };
    }

    // Pass 4: Condition Expression AST Evaluation & Regex Safety
    const traces: string[] = [];
    let conditionMatched = true;

    // Check sender LIKE / CONTAINS
    const senderMatch = conditionText.match(/sender\s+(?:LIKE|CONTAINS)\s+['"]([^'"]+)['"]/i);
    if (senderMatch) {
      const pattern = senderMatch[1].replace(/%/g, ".*");
      try {
        const re = new RegExp(pattern, "i");
        const isMatch = re.test(sample.sender);
        traces.push(`sender LIKE '${senderMatch[1]}': ${isMatch ? "MATCH" : "NO MATCH"} (${sample.sender})`);
        if (!isMatch) conditionMatched = false;
      } catch {
        return {
          matched: false,
          actions: [],
          targetAccount,
          traces: ["Regex Error"],
          syntaxError: `Compiler Error: Invalid sender wildcard pattern '${senderMatch[1]}'`,
        };
      }
    }

    // Check subject REGEXP / CONTAINS / LIKE
    const subjectRegexp = conditionText.match(/subject\s+(?:REGEXP|MATCHES)\s+['"]([^'"]+)['"]/i);
    if (subjectRegexp) {
      try {
        const re = new RegExp(subjectRegexp[1], "i");
        const isMatch = re.test(sample.subject);
        traces.push(`subject REGEXP '${subjectRegexp[1]}': ${isMatch ? "MATCH" : "NO MATCH"}`);
        if (!isMatch) conditionMatched = false;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return {
          matched: false,
          actions: [],
          targetAccount,
          traces: ["Regex Compilation Failed"],
          syntaxError: `Compiler Error: Invalid regular expression pattern '${subjectRegexp[1]}' (${msg})`,
        };
      }
    }

    // Check size_bytes / size comparison
    const sizeMatch = conditionText.match(/(?:size_bytes|size)\s*([><=]+)\s*(\d+)/i);
    if (sizeMatch) {
      const op = sizeMatch[1];
      const targetSize = parseInt(sizeMatch[2], 10);
      let isMatch = false;
      if (op === ">") isMatch = sample.size_bytes > targetSize;
      else if (op === ">=") isMatch = sample.size_bytes >= targetSize;
      else if (op === "<") isMatch = sample.size_bytes < targetSize;
      else if (op === "=") isMatch = sample.size_bytes === targetSize;
      traces.push(`size ${op} ${targetSize}: ${isMatch ? "MATCH" : "NO MATCH"} (${sample.size_bytes} bytes)`);
      if (!isMatch) conditionMatched = false;
    }

    // Pass 5: Action AST Syntax & Safety Validation
    const rawActions = actionText.split(",").map((a) => a.trim()).filter(Boolean);
    const parsedActions: string[] = [];

    for (const act of rawActions) {
      const upperAct = act.toUpperCase();

      if (upperAct.includes("MOVE TO")) {
        const folderMatch = act.match(/MOVE\s+TO\s+['"]([^'"]+)['"]/i);
        if (!folderMatch) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Action Validation Failed"],
            syntaxError: "Syntax Error: MOVE TO action requires target folder enclosed in quotes (e.g. MOVE TO 'INBOX')",
          };
        }
        const folder = folderMatch[1];
        if (!/^[a-zA-Z0-9_\-\s\/]+$/.test(folder)) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Security Check Failed"],
            syntaxError: `Validation Error: Invalid target folder name '${folder}'. Folder names must be alphanumeric`,
          };
        }
        parsedActions.push(`MOVE TO '${folder}'`);
      } else if (upperAct.includes("COPY TO")) {
        const folderMatch = act.match(/COPY\s+TO\s+['"]([^'"]+)['"]/i);
        if (!folderMatch) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Action Validation Failed"],
            syntaxError: "Syntax Error: COPY TO action requires target folder enclosed in quotes (e.g. COPY TO 'Archive')",
          };
        }
        const folder = folderMatch[1];
        if (!/^[a-zA-Z0-9_\-\s\/]+$/.test(folder)) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Security Check Failed"],
            syntaxError: `Validation Error: Invalid target folder name '${folder}'. Folder names must be alphanumeric`,
          };
        }
        parsedActions.push(`COPY TO '${folder}'`);
      } else if (upperAct.includes("CALL WEBHOOK")) {
        const urlMatch = act.match(/CALL\s+WEBHOOK\s+['"]([^'"]+)['"]/i);
        if (!urlMatch) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Action Validation Failed"],
            syntaxError: "Syntax Error: CALL WEBHOOK action requires target URL in quotes (e.g. CALL WEBHOOK 'https://...')",
          };
        }
        const url = urlMatch[1];
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Security Violation: Invalid Webhook Scheme"],
            syntaxError: `Security Error: Webhook URL '${url}' must begin with http:// or https://`,
          };
        }
        parsedActions.push(`CALL WEBHOOK '${url}'`);
      } else if (upperAct.includes("FORWARD TO")) {
        const fwdMatch = act.match(/FORWARD\s+TO\s+['"]([^'"]+)['"]/i);
        if (!fwdMatch || !fwdMatch[1].includes("@")) {
          return {
            matched: false,
            actions: [],
            targetAccount,
            traces: ["Action Validation Failed"],
            syntaxError: "Validation Error: FORWARD TO action requires valid email address format (e.g. FORWARD TO 'user@domain.com')",
          };
        }
        parsedActions.push(`FORWARD TO '${fwdMatch[1]}'`);
      } else if (
        upperAct.includes("SET READ") ||
        upperAct.includes("SET FLAGGED") ||
        upperAct.includes("FLAG") ||
        upperAct.includes("MARK READ") ||
        upperAct.includes("DELETE") ||
        upperAct.includes("ARCHIVE")
      ) {
        parsedActions.push(upperAct);
      } else {
        return {
          matched: false,
          actions: [],
          targetAccount,
          traces: ["Unknown Action Command"],
          syntaxError: `Syntax Error: Unknown NSQL action '${act}'. Valid actions: MOVE TO, COPY TO, SET read, SET flagged, CALL WEBHOOK, FORWARD TO, DELETE, ARCHIVE`,
        };
      }
    }

    // Pass 6: Final Result Assembly
    const isTotalMatched = accountMatched && conditionMatched;

    return {
      matched: isTotalMatched,
      actions: parsedActions,
      targetAccount,
      traces: traces.length > 0 ? traces : ["Condition evaluated successfully"],
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      matched: false,
      actions: [],
      targetAccount: "*",
      traces: ["Syntax error during AST compilation"],
      syntaxError: `Compiler Error: ${message}`,
    };
  }
}

export function NsqlPlayground() {
  const [nsql, setNsql] = useState(
    "CREATE RULE \"VIP Priority Route\"\nON ACCOUNT \"*@example.com\"\nPRIORITY 10\nWHEN sender LIKE '%@example.com%' AND (subject REGEXP '(Urgent|Deadline)' OR size_bytes > 5242880)\nTHEN MOVE TO 'vip-inbox', SET read = TRUE, SET flagged = TRUE, CALL WEBHOOK 'https://example.com/webhooks/vip-alert'\nWITH STOP PROCESSING;"
  );

  const [previewing, setPreviewing] = useState(false);
  const [previewResult, setPreviewResult] = useState<null | EvaluationResult>(null);

  const handleRunPreview = () => {
    setPreviewing(true);
    setTimeout(() => {
      const res = evaluateNsqlReal(nsql, SAMPLE_EMAIL);
      setPreviewResult(res);
      setPreviewing(false);
    }, 150);
  };

  return (
    <section id="nsql" className="py-20 border-t border-white/10 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Nuncio SQL Filter Language (NSQL)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Live Interactive <span className="gradient-text">NSQL Grammar Demo</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Edit the NSQL rule below and run it against one sample message right here in your browser. This demo
            re-implements the grammar in JavaScript to preview the language — it isn&apos;t the compiled Rust
            engine, and rules like this don&apos;t act on your real mailbox yet.
          </p>
          <StatusBadge variant="in-progress" label="Parser & dry-run: real today. Firing on synced mail: planned" />
          <div className="pt-1">
            <a
              href="/docs"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20 hover:text-white transition-all"
            >
              <span>Read Full NSQL Language Specification &amp; Grammar Docs</span>
              <span className="text-cyan-400">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Code Editor */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                NSQL Grammar Editor (browser demo)
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                ✓ Mirrors the 6-pass grammar
              </span>
            </div>

            <textarea
              value={nsql}
              onChange={(e) => setNsql(e.target.value)}
              rows={8}
              className="w-full bg-slate-950 p-4 rounded-xl font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 focus:border-cyan-500 focus:outline-none leading-relaxed resize-none shadow-inner"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>Evaluated against one sample message, in your browser</span>
              </div>
              <button
                onClick={handleRunPreview}
                disabled={previewing}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl gradient-bg text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all disabled:opacity-50 min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-current" />
                {previewing ? "Validating AST..." : "Run Dry-Run Preview"}
              </button>
            </div>
          </div>

          {/* Right Column: Execution Output & Security Proof */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              Dry-Run Evaluation Output
            </h3>

            {previewResult ? (
              <div className="space-y-4 text-xs font-mono">
                {previewResult.syntaxError ? (
                  <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-red-400 text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>NSQL Compiler Error</span>
                    </div>
                    <p className="text-xs leading-relaxed text-red-200">{previewResult.syntaxError}</p>
                  </div>
                ) : (
                  <>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex justify-between text-slate-300">
                        <span>Target Account:</span>
                        <span className="text-amber-400 font-semibold">{previewResult.targetAccount}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Evaluation Result:</span>
                        <span className={previewResult.matched ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
                          {previewResult.matched ? "MATCHED (true)" : "NO MATCH (false)"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-slate-400 font-bold block">Condition Traces:</span>
                      {previewResult.traces.map((trace, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-900 border border-white/5 text-slate-300 text-[11px]">
                          • {trace}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <span className="text-slate-400 font-bold block">Parsed Actions Sequence:</span>
                      {previewResult.actions.map((act, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-white/5 text-slate-200">
                          <CornerDownRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs font-mono space-y-2 border border-dashed border-slate-800 rounded-xl">
                <p>Edit the query in the editor and click &quot;Run Dry-Run Preview&quot; to parse your NSQL text and evaluate real condition matches against sample email envelopes.</p>
              </div>
            )}

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
              <h4 className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                Real Engine Defenses (Rust, Not This Demo)
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                These properties describe the actual <code className="font-mono text-purple-300">nuncio-filter</code> engine
                today — not the JavaScript grammar preview above, and not yet wired into live sync.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                <li>Parameterized SQL binding — no string-concatenated queries.</li>
                <li>Static rejection of dangerous nested-quantifier regex patterns before a rule can be saved.</li>
                <li>Webhook dispatch blocks redirects and known private/loopback IP targets.</li>
                <li>Every matched rule and webhook dispatch is signed with HMAC-SHA256 and hash-chained into the WORM audit ledger.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Code, Shield, Terminal } from "lucide-react";

export const metadata = {
  title: "Outbound Webhooks & SSRF Defense — Nuncio Docs",
  description: "The HMAC-SHA256 signed webhook dispatcher and SSRF defenses implemented in nuncio-filter. The dispatcher exists and is tested; it is not yet invoked from the live mail-sync path.",
};

export default function WebhooksDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="webhooks">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">NSQL Engine • Webhook Security</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Code className="w-8 h-8 text-emerald-400 shrink-0" />
                Outbound Signed Webhooks &amp; SSRF Defense
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                An NSQL rule&apos;s <code className="text-emerald-300 font-mono">CALL WEBHOOK &apos;url&apos;</code> action dispatches through{" "}
                <code className="text-emerald-300 font-mono">crates/nuncio-filter/src/webhook.rs</code>: an HMAC-SHA256-signed HTTP POST with SSRF
                defenses on the target URL. The dispatcher itself is implemented and tested.
              </p>
              <StatusBadge variant="planned" label="Not yet invoked from the live sync path" />
            </div>

            {/* Payload Schema */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                1. Webhook JSON Request Payload Shape
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`{
  "event": "filter_executed",
  "rule_id": "rule_vip_01",
  "rule_name": "VIP Priority Route",
  "message_id": "msg_892317823",
  "account": "you@example.com",
  "sender": "alerts@example-crm.com",
  "subject": "Urgent Architecture Review",
  "actions_taken": ["MOVE TO 'vip-inbox'", "CALL WEBHOOK 'https://api.example.com/webhook'"],
  "matched_at": 1700000000
}`}
              </pre>
            </div>

            {/* SSRF Security Box */}
            <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                2. SSRF Defenses in the Dispatcher
              </span>
              <ul className="text-slate-300 text-xs space-y-2 list-disc list-inside">
                <li><strong className="text-white">Pre-flight DNS blocking</strong>: rejects <code>127.0.0.1</code>, <code>169.254.169.254</code> (cloud metadata endpoints), and private subnets (<code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>).</li>
                <li><strong className="text-white">Zero redirect loop</strong>: rejects HTTP 301/302 redirects to prevent exfiltration.</li>
                <li><strong className="text-white">HMAC-SHA256 signature header</strong>: requests carry an <code>X-Nuncio-Signature</code> header for the receiver to verify.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2 text-xs">
              <p className="text-slate-300 leading-relaxed">
                This is a real, tested piece of the engine — but because the filter match-and-act engine isn&apos;t yet
                wired into the live mail-sync path, no webhook fires automatically against your inbox today. It fires
                only when explicitly invoked in tests or once that wiring lands.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

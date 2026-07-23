import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Code, Shield, Lock, Terminal, Sparkles } from "lucide-react";

export const metadata = {
  title: "Outbound Signed Webhooks & SSRF Defense — Nuncio Docs",
  description: "Technical specification for HMAC-SHA256 signed webhooks, JSON payloads, and SSRF security mitigations in Nuncio.",
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
                HMAC-SHA256 Signed Webhooks &amp; SSRF Defense
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When an NSQL filter rule executes `CALL WEBHOOK 'url'`, `nunciod` dispatches an HTTP POST payload verified with cryptographic signatures and strict network safety bounds.
              </p>
            </div>

            {/* Payload Schema */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                1. Webhook JSON Request Payload Schema
              </h3>
              <pre className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
{`{
  "event": "filter_executed",
  "rule_id": "rule_vip_01",
  "rule_name": "VIP Priority Route",
  "message_id": "msg_892317823",
  "account": "james.maes@kof22.com",
  "sender": "alice@kof22.com",
  "subject": "Urgent Architecture Review",
  "actions_taken": ["MOVE TO 'vip-inbox'", "CALL WEBHOOK 'https://api.kof22.com/webhook'"],
  "matched_at": 1700000000
}`}
              </pre>
            </div>

            {/* SSRF Security Box */}
            <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                2. Code-Level SSRF Security Specifications
              </span>
              <ul className="text-slate-300 text-xs space-y-2 list-disc list-inside">
                <li><strong className="text-white">Pre-Flight DNS Blacklist</strong>: Blocks `127.0.0.1`, `169.254.169.254` (cloud metadata endpoints), and private subnets (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).</li>
                <li><strong className="text-white">Zero Redirect Loop (`max_redirects(0)`)</strong>: Rejects HTTP 301/302 redirects to prevent exfiltration.</li>
                <li><strong className="text-white">HMAC-SHA256 Signature Header</strong>: Requests include `X-Nuncio-Signature` for server payload verification.</li>
              </ul>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Layers, Monitor, Shield } from "lucide-react";

export const metadata = {
  title: "HTML Email Rendering & Sandboxing (Planned) — Nuncio Docs",
  description: "The plan for rendering HTML email safely: a sandboxed iframe with scripts disabled. HTML sanitization is on the roadmap and not implemented yet.",
};

export default function HtmlRenderingDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="html-rendering">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Security • Planned</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Layers className="w-8 h-8 text-purple-400 shrink-0" />
                HTML Email Rendering &amp; Sandboxing
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Untrusted HTML in email is a real attack surface. The plan is a sandboxed rendering pipeline —
                nothing on this page is built yet.
              </p>
              <StatusBadge variant="planned" label="HTML sanitization — not implemented yet" />
            </div>

            {/* The design */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                The Design: Sandbox First
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The intended approach, per the project&apos;s own security conventions, is to render untrusted HTML
                email inside an <code className="text-purple-300 font-mono">&lt;iframe sandbox&gt;</code> with JavaScript disabled, rather than trusting a
                webview to render remote content directly. That includes stripping remote tracking pixels and blocking
                external script and style injection before anything reaches the renderer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-400 text-sm block">Desktop GUI Rendering</span>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Sandboxed iframe rendering inside the planned desktop client — not built.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-400 text-sm block">Terminal / CLI Rendering</span>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A plain-text or Markdown fallback for non-GUI clients is the intended direction, once those clients
                  exist.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3 text-xs">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Monitor className="w-4 h-4 text-purple-400" />
                Why This Isn&apos;t Rushed
              </span>
              <p className="text-slate-300 leading-relaxed">
                HTML sanitization is exactly the kind of security-sensitive surface we&apos;d rather ship correctly and
                later than ship early and wrong. It&apos;s tracked as a real milestone on the roadmap, not a checkbox
                feature.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

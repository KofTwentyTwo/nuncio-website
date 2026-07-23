import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { Layers, Monitor, Terminal, Bot, Shield, Eye } from "lucide-react";

export const metadata = {
  title: "HTML & Image Rendering Guide — Nuncio Docs",
  description: "Comprehensive guide to HTML email parsing, inline image rendering (Kitty/iTerm2/Sixel), tracking beacon neutralization, and Markdown conversion.",
};

export default function HtmlRenderingDocPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="html-rendering">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">User Experience • Rendering</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Layers className="w-8 h-8 text-purple-400 shrink-0" />
                Rendering HTML &amp; Inline Images Across Non-GUI Shells
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio provides seamless HTML and image rendering mechanics across Terminal TUI, POSIX CLI, and AI MCP agents without compromising security.
              </p>
            </div>

            {/* Rendering Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span>1. Terminal TUI (Ratatui)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Converts HTML to clean ANSI text via `html2text` with tracking pixels blocked. High-resolution images render inline using <b>Kitty Graphics Protocol</b>, <b>iTerm2 Inline Images</b>, or <b>Sixel</b> graphics. Press <code className="text-white font-mono font-bold">o</code> to view in system browser.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 font-bold text-blue-300 text-sm">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>2. POSIX CLI</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <code className="text-blue-400 font-mono">nuncio mail show &lt;id&gt;</code> prints formatted plain text. Use <code className="text-blue-400 font-mono">--html</code> for markdown output, <code className="text-blue-400 font-mono">--raw-html</code> for piping to `w3m`/`lynx`, or <code className="text-blue-400 font-mono">--open</code> for browser trigger.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 font-bold text-emerald-300 text-sm">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span>3. AI MCP Agents</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Converts HTML to token-efficient Markdown for LLM prompt contexts. Image attachments are passed as Base64 multimodal vision content blocks to Vision LLMs.
                </p>
              </div>
            </div>

            {/* Tracking Pixel Security Box */}
            <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3 text-xs">
              <span className="text-purple-300 font-bold text-sm block flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                Automatic Tracking Pixel &amp; Web Bug Neutralization
              </span>
              <p className="text-slate-300 leading-relaxed">
                Nuncio automatically strips 1x1 tracking GIF/PNG pixels (`&lt;img src=&quot;...track...&quot; width=&quot;1&quot; height=&quot;1&quot;&gt;`), remote CSS `@import` triggers, and external script tags before rendering email payloads.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

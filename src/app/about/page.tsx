import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Terminal, Heart, Code, ShieldCheck, Github, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About & Open Source Credits — Nuncio",
  description: "Learn about Nuncio, our open-source philosophy, and the open-source libraries that make Nuncio possible.",
};

export default function AboutPage() {
  const credits = [
    { name: "Rust", description: "Empowering everyone to build reliable and efficient software.", url: "https://www.rust-lang.org" },
    { name: "sqlparser-rs", description: "Extensible SQL Lexer and Parser for Rust powering NSQL filter evaluation.", url: "https://github.com/sqlparser-rs/sqlparser-rs" },
    { name: "Ratatui", description: "Rust library that cooks up delicious terminal user interfaces.", url: "https://ratatui.rs" },
    { name: "Tauri v2", description: "Build smaller, faster, and more secure desktop applications.", url: "https://tauri.app" },
    { name: "SQLite", description: "Self-contained, serverless, zero-configuration transactional SQL database engine.", url: "https://www.sqlite.org" },
    { name: "Tokio", description: "An asynchronous Rust framework providing high-throughput async I/O.", url: "https://tokio.rs" },
    { name: "Lettre", description: "A complete email library for Rust.", url: "https://lettre.rs" },
    { name: "Model Context Protocol (MCP)", description: "Open standard for connecting AI models to external tools & data sources.", url: "https://modelcontextprotocol.io" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 text-gray-300">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>About Nuncio &amp; Open Source Credits</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
              Built for <span className="gradient-text">Freedom &amp; Speed</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Nuncio was created to give power users, developers, and AI agents a free, open-source, high-performance alternative to proprietary email subscriptions.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">The Nuncio Story</h2>
            <p>
              Email and calendar are the foundation of digital productivity. Yet modern email software has devolved into slow web wrappers, data harvesting, and expensive recurring monthly fees.
            </p>
            <p>
              Nuncio changes this by providing a unified Rust daemon with local SQLite WAL storage that powers **four great interfaces**: a lightning POSIX CLI, a Vim-fueled Ratatui terminal TUI, a glassmorphic desktop GUI, and a native Model Context Protocol (MCP) server for LLM AI agents.
            </p>
          </div>

          {/* Open Source Credits Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold text-white border-b border-white/10 pb-3">
              <Heart className="w-5 h-5 text-red-400 fill-current" />
              <h2>Open Source Library Credits</h2>
            </div>
            <p className="text-xs text-gray-400">
              Nuncio stands on the shoulders of giants. We are deeply grateful to the open-source projects and maintainers whose work powers Nuncio:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credits.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all hover:scale-[1.02] space-y-1 block"
                >
                  <span className="text-sm font-bold text-white flex items-center justify-between">
                    {c.name}
                    <Github className="w-3.5 h-3.5 text-gray-400" />
                  </span>
                  <p className="text-xs text-gray-400">{c.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

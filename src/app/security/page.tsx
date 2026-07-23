import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Key, FileCheck, CheckCircle2, Server, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SecurityHub } from "@/components/SecurityHub";

export const metadata = {
  title: "Privacy & Security Enclave — Nuncio Sovereign Encryption Architecture",
  description: "Learn about Nuncio's security enclave: column-level AES-256-GCM data encryption, age attachment stream ciphers, ZeroizeOnDrop memory locking, HTML email sandboxing, and MCP RBAC policy.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow py-16 space-y-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-tight shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Zero-Trust Enterprise Encryption Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sovereign Privacy &amp;<br />
            <span className="gradient-text">Zero-Trust Security.</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto">
            Nuncio is engineered ground-up with local SQLite column-level encryption, secure memory page locking, sandboxed HTML rendering, and granular RBAC policies for AI agents.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecurityHub />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center pt-6">
          <Link
            href="/#downloads"
            className="apple-button-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            Download Nuncio v1.0.0 Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

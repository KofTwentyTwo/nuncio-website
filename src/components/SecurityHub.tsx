"use client";

import React from "react";
import { Shield, Key, Lock, FileCheck, CheckCircle2 } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export function SecurityHub() {
  return (
    <section id="security" className="py-20 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-medium tracking-tight">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>Security as a design goal, not a finished guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Privacy and Security by Design.
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg">
            Nuncio is being built around column-level encryption at rest, secure memory zeroing, sandboxed web
            rendering, and cryptographic audit ledgers. Two of these are real today; the rest are hardening work
            tracked on the roadmap — the badge on each card tells you which.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Data-at-Rest Encryption */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <StatusBadge variant="planned" />
              </div>
              <h3 className="text-lg font-bold text-white min-w-0 leading-tight">AES-256-GCM &amp; age Stream Cipher</h3>
              <p className="text-slate-300 text-xs leading-relaxed min-h-[4.25rem]">
                The design target: email bodies encrypted at rest with column-level AES-256-GCM, and large
                attachments streamed through modern <code className="text-blue-300 font-mono">age</code> X25519
                ciphers. Not implemented yet — today, message bodies are stored unencrypted in the local SQLite
                database.
              </p>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Goal: zero unencrypted body text written to disk</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Key material zeroing on drop — in progress, not verified complete</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Credential Enclave & OS Keyring */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shrink-0">
                  <Key className="w-6 h-6" />
                </div>
                <StatusBadge variant="available-now" />
              </div>
              <h3 className="text-lg font-bold text-white min-w-0 leading-tight">OS Keyring Credential Vault</h3>
              <p className="text-slate-300 text-xs leading-relaxed min-h-[4.25rem]">
                Passwords and OAuth tokens are stored exclusively in native OS credential enclaves (Windows
                Credential Manager, macOS Keychain, Linux Secret Service) — this one is real today, not a plan.
              </p>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero credentials stored in SQLite or config files</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Backed by the OS-native credential store on every platform</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Cryptographic Audit Ledger */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <StatusBadge variant="available-now" />
              </div>
              <h3 className="text-lg font-bold text-white min-w-0 leading-tight">Cryptographic Hash-Chain Ledger</h3>
              <p className="text-slate-300 text-xs leading-relaxed min-h-[4.25rem]">
                Filter and account mutations already write an immutable entry linked via HMAC-SHA256 hash chains
                (<code className="text-emerald-300 font-mono">H_n = HMAC(K, H_n-1 || data)</code>) — this ledger is
                real and verifiable today.
              </p>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated chain integrity verification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tamper-evident operational audit trail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

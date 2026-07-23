"use client";

import React from "react";
import { Shield, Key, Lock, FileCheck, CheckCircle2, Server } from "lucide-react";

export function SecurityHub() {
  return (
    <section id="security" className="py-20 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-medium tracking-tight">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>Zero-Trust Enterprise Encryption</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Privacy and Security by Design.
          </h2>
          <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg">
            Nuncio implements column-level encryption at rest, secure memory zeroing, sandboxed web rendering, and cryptographic audit ledgers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Data-at-Rest Encryption */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">AES-256-GCM &amp; age Stream Cipher</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Email bodies are encrypted using column-level AES-256-GCM via <code className="text-blue-300 font-mono">PayloadCipher</code>. Large binary attachments are encrypted using modern <code className="text-blue-300 font-mono">age</code> X25519 stream ciphers with 64KB chunk authentication.
            </p>
            <ul className="text-xs text-gray-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero unencrypted text written to disk</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Memory page zeroing via <code className="font-mono">ZeroizeOnDrop</code></span>
              </li>
            </ul>
          </div>

          {/* Card 2: Credential Enclave & OS Keyring */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">OS Keyring Credential Vault</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Passwords, OAuth 2.0 refresh tokens, and age private keys are stored exclusively in native OS credential enclaves (Windows Credential Manager, macOS Keychain, Linux Secret Service).
            </p>
            <ul className="text-xs text-gray-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero secrets in SQLite WAL files</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hardware Security Key (PKCS#11 / YubiKey) ready</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Cryptographic Audit Ledger */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Cryptographic Hash-Chain Ledger</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Every filter action, webhook payload, and triage mutation writes an immutable entry linked via HMAC-SHA256 hash chains (<code className="text-emerald-300 font-mono">H_n = HMAC(K, H_n-1 || data)</code>).
            </p>
            <ul className="text-xs text-gray-400 space-y-1.5 pt-2">
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

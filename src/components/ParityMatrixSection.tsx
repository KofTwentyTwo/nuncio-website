"use client";

import React, { useState } from "react";
import { Search, Layers, Terminal, Monitor, Code, Bot } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import type { StatusVariant } from "@/lib/status";

interface Capability {
  area: string;
  name: string;
  cli: string;
  tui: string;
  gui: string;
  mcp: string;
  /** The real, current status of the underlying engine capability — not a
   * claim about any one client. Drives the Status column via StatusBadge. */
  status: StatusVariant;
}

const capabilities: Capability[] = [
  { area: "Account Management", name: "List Accounts", cli: "nuncio account list", tui: "AppMode::AccountSettings", gui: "Configured Accounts List", mcp: "nuncio_account_list", status: "available-now" },
  { area: "Account Management", name: "Add Account Profile", cli: "nuncio account add", tui: "[a] Add Account Modal", gui: "Add Account Form", mcp: "nuncio_account_add", status: "available-now" },
  { area: "Account Management", name: "Test Connectivity", cli: "nuncio account test", tui: "[t] Test Connection", gui: "Test Connection Button", mcp: "nuncio_account_test", status: "available-now" },
  { area: "Email Operations", name: "Sync Mailboxes (IMAP/SMTP)", cli: "nuncio mail sync", tui: "Sync (s)", gui: "Sync Button", mcp: "CoreCommand::SyncAll", status: "available-now" },
  { area: "Email Operations", name: "Search Messages (FTS5)", cli: "nuncio mail search", tui: "Search Mode (/)", gui: "Filter & Search Input", mcp: "nuncio_mail_search", status: "available-now" },
  { area: "Email Operations", name: "Send Email / Outbox", cli: "nuncio mail send", tui: "Compose Modal (c)", gui: "Compose Modal Component", mcp: "nuncio_mail_send", status: "available-now" },
  { area: "Email Operations", name: "Export Mail (MBOX/EML/JSON)", cli: "nuncio mail export", tui: "[x] Export Drawer", gui: "Export Panel", mcp: "nuncio_mail_export", status: "available-now" },
  { area: "NSQL Automation", name: "List / Create Rules", cli: "nuncio filter create --sql", tui: "AppMode::FilterRules", gui: "<RuleBuilderForm />", mcp: "nuncio_filter_create", status: "in-progress" },
  { area: "NSQL Automation", name: "Dry-Run Preview", cli: "nuncio filter test --sql", tui: "[t] Dry-Run Previewer", gui: "<ConditionTester /> Pane", mcp: "nuncio_filter_test", status: "in-progress" },
  { area: "NSQL Automation", name: "Rules Firing on Live Sync", cli: "nuncio filter logs", tui: "[l] Log Drawer", gui: "<AuditLogInspector /> Tab", mcp: "nuncio_filter_logs", status: "planned" },
  { area: "Calendar & Contacts", name: "CalDAV Calendar Sync", cli: "nuncio cal list", tui: "Agenda / Calendar Pane", gui: "Calendar Grid View", mcp: "nuncio_cal_list_events", status: "planned" },
  { area: "Calendar & Contacts", name: "CardDAV Contacts Sync", cli: "nuncio contacts list", tui: "Contacts Pane", gui: "Contacts List View", mcp: "nuncio_contacts_list", status: "planned" },
  { area: "Security & Vault", name: "OS Keyring Credential Vault", cli: "keyring crate", tui: "keyring crate", gui: "keyring crate", mcp: "keyring crate", status: "available-now" },
  { area: "Security & Vault", name: "At-Rest Body Encryption", cli: "PayloadCipher", tui: "PayloadCipher", gui: "PayloadCipher", mcp: "PayloadCipher", status: "planned" },
  { area: "Security & Vault", name: "HTML Sanitization", cli: "n/a (headless)", tui: "sandboxed renderer", gui: "sandboxed renderer", mcp: "n/a", status: "planned" },
  { area: "Security & Vault", name: "WORM Audit Ledger", cli: "nuncio audit verify", tui: "[l] Audit Drawer", gui: "<AuditLogInspector />", mcp: "nuncio_audit_read", status: "available-now" },
];

export function ParityMatrixSection() {
  const [search, setSearch] = useState("");

  const filtered = capabilities.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.area.toLowerCase().includes(search.toLowerCase()) ||
      c.cli.toLowerCase().includes(search.toLowerCase()) ||
      c.mcp.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="features" className="py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Design goal: one contract, no second-class clients</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            One Core Engine. <span className="gradient-text">Four Great Interfaces.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Every capability in Nuncio is designed against a single versioned gRPC contract, so the CLI, TUI,
            GUI, and MCP bridge can&apos;t drift out of sync the way bolt-on clients usually do. That&apos;s the
            architecture&apos;s job, not a promise about what&apos;s built yet — the CLI is the only client that
            exists today; the rest are planned thin clients over the same API. The Status column below reflects
            the real, current state of each underlying capability.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search capabilities (e.g. 'NSQL', 'Keyring', 'FTS5')..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none shadow-inner"
          />
        </div>

        {/* Matrix Table */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/90 text-gray-300 uppercase tracking-wider text-[11px] font-bold border-b border-white/10">
                <tr>
                  <th className="p-4 pl-6">Capability</th>
                  <th className="p-4">
                    <span className="flex items-center gap-1 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" /> CLI
                    </span>
                  </th>
                  <th className="p-4">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Code className="w-3.5 h-3.5" /> TUI
                    </span>
                  </th>
                  <th className="p-4">
                    <span className="flex items-center gap-1 text-purple-400">
                      <Monitor className="w-3.5 h-3.5" /> GUI
                    </span>
                  </th>
                  <th className="p-4">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Bot className="w-3.5 h-3.5" /> MCP
                    </span>
                  </th>
                  <th className="p-4 pr-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-300 font-sans text-sm">
                      No capabilities match &quot;{search}&quot;. Try searching for &quot;NSQL&quot;, &quot;Keyring&quot;, or &quot;FTS5&quot;.
                    </td>
                  </tr>
                ) : (
                  filtered.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 pl-6 font-sans font-semibold text-white">
                        <div>{item.name}</div>
                        <span className="text-[10px] text-slate-400 font-mono">{item.area}</span>
                      </td>
                      <td className="p-4 text-blue-300">{item.cli}</td>
                      <td className="p-4 text-cyan-300">{item.tui}</td>
                      <td className="p-4 text-purple-300">{item.gui}</td>
                      <td className="p-4 text-emerald-300">{item.mcp}</td>
                      <td className="p-4 pr-6 text-center">
                        <StatusBadge variant={item.status} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-xs text-slate-500">
          TUI, GUI, and MCP columns above show design-target command surfaces for interfaces that don&apos;t
          exist yet — see{" "}
          <a href="#experiences" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
            the four interfaces
          </a>{" "}
          for what&apos;s actually built today.
        </p>
      </div>
    </section>
  );
}

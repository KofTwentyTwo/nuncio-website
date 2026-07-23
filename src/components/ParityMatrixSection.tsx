"use client";

import React, { useState } from "react";
import { Check, Search, Layers, Shield, Terminal, Monitor, Code, Bot } from "lucide-react";

interface Capability {
  area: string;
  name: string;
  cli: string;
  tui: string;
  gui: string;
  mcp: string;
}

const capabilities: Capability[] = [
  { area: "Account Management", name: "List Accounts", cli: "nuncio account list", tui: "AppMode::AccountSettings", gui: "Configured Accounts List", mcp: "nuncio_account_list" },
  { area: "Account Management", name: "Add Account Profile", cli: "nuncio account add", tui: "[a] Add Account Modal", gui: "Add Account Form", mcp: "nuncio_account_add" },
  { area: "Account Management", name: "Edit Account Config", cli: "nuncio account edit", tui: "[e] Edit Account Modal", gui: "Inline Edit Form", mcp: "nuncio_account_edit" },
  { area: "Account Management", name: "Delete Account Profile", cli: "nuncio account delete", tui: "[d] Delete Account Modal", gui: "Remove Account Button", mcp: "nuncio_account_delete" },
  { area: "Account Management", name: "Test TLS Connectivity", cli: "nuncio account test", tui: "[t] Test TLS Connection", gui: "Test Connection Button", mcp: "nuncio_account_test" },
  { area: "Email Operations", name: "Sync Mailboxes", cli: "nuncio mail sync", tui: "Sync (s)", gui: "Sync Button", mcp: "CoreCommand::SyncAll" },
  { area: "Email Operations", name: "Search Messages (FTS5)", cli: "nuncio mail search", tui: "Search Mode (/)", gui: "Filter & Search Input", mcp: "nuncio_mail_search" },
  { area: "Email Operations", name: "Send Email / Outbox", cli: "nuncio mail send", tui: "Compose Modal (c)", gui: "Compose Modal Component", mcp: "nuncio_mail_send" },
  { area: "NSQL Automation", name: "List Rules", cli: "nuncio filter list", tui: "AppMode::FilterRules", gui: "<FilterRulesModal /> List", mcp: "nuncio_filter_list" },
  { area: "NSQL Automation", name: "Create NSQL Rule", cli: "nuncio filter create --sql", tui: "[n] New Rule / [s] Code", gui: "<RuleBuilderForm />", mcp: "nuncio_filter_create" },
  { area: "NSQL Automation", name: "Dry-Run Preview", cli: "nuncio filter test --sql", tui: "[t] Dry-Run Previewer", gui: "<ConditionTester /> Pane", mcp: "nuncio_filter_test" },
  { area: "NSQL Automation", name: "Execution Audit Logs", cli: "nuncio filter logs", tui: "[l] Log Drawer", gui: "<AuditLogInspector /> Tab", mcp: "nuncio_filter_logs" },
  { area: "Calendar & Scheduling", name: "List Calendar Events", cli: "nuncio cal list", tui: "Agenda / Calendar Pane", gui: "Calendar Grid View", mcp: "nuncio_cal_list_events" },
  { area: "Calendar & Scheduling", name: "Create Event", cli: "nuncio cal create", tui: "Event Creation Modal", gui: "Event Creator Component", mcp: "nuncio_cal_create_event" },
  { area: "Security & Vault", name: "Column AES-256-GCM", cli: "PayloadCipher", tui: "PayloadCipher", gui: "PayloadCipher", mcp: "PayloadCipher" },
  { area: "Security & Vault", name: "OS Keyring Vault", cli: "keyring crate", tui: "keyring crate", gui: "keyring crate", mcp: "keyring crate" },
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
            <span>Standing Rule: 100% Parity Across All 4 Interfaces</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            One Core Engine. <span className="gradient-text">Four Great Interfaces.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Every feature in Nuncio is implemented 1:1 across POSIX CLI, Vim Ratatui TUI, Desktop GUI, and Native MCP LLM Agent interface without shells or mocks.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search parity capabilities (e.g. 'NSQL', 'Keyring', 'FTS5')..."
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
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 pl-6 font-sans font-semibold text-white">
                      <div>{item.name}</div>
                      <span className="text-[10px] text-gray-400 font-mono">{item.area}</span>
                    </td>
                    <td className="p-4 text-blue-300">{item.cli}</td>
                    <td className="p-4 text-cyan-300">{item.tui}</td>
                    <td className="p-4 text-purple-300">{item.gui}</td>
                    <td className="p-4 text-emerald-300">{item.mcp}</td>
                    <td className="p-4 pr-6 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-sans text-[10px] font-bold border border-emerald-500/30">
                        <Check className="w-3 h-3" /> 100% PARITY
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

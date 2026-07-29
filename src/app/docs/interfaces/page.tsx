import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsLayout } from "@/components/DocsLayout";
import { StatusBadge, AvailableNow } from "@/components/StatusBadge";
import { Monitor, Keyboard, Layers } from "lucide-react";

export const metadata = {
  title: "Client Interfaces (Planned) — Nuncio Docs",
  description: "The reference CLI is a real gRPC client today. A desktop GUI, a terminal TUI, and an MCP AI client are planned as separate thin clients over the same contract, and none of them exist yet.",
};

export default function InterfacesDocPage() {
  const plannedKeybindings = [
    { key: "j / k", action: "Move message focus cursor down / up" },
    { key: "h / l", action: "Switch pane focus between folder tree and message preview" },
    { key: "e", action: "Archive focused email" },
    { key: "s", action: "Toggle star / flag status" },
    { key: "d", action: "Move email to trash" },
    { key: "f", action: "Open NSQL filter rules view" },
    { key: "a", action: "Open account switcher" },
    { key: "/", action: "Focus full-text search bar" },
    { key: "q", action: "Quit the TUI (daemon keeps running)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100">
      <Header />
      <main className="flex-grow">
        <DocsLayout activeSlug="interfaces">
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Client Interfaces</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
                <Monitor className="w-8 h-8 text-cyan-400 shrink-0" />
                Client Interfaces: One Contract, Several Clients
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuncio&apos;s architecture is one daemon publishing a single versioned gRPC contract, consumed by
                separate, thin client projects. Today that contract has exactly one working client. The rest below
                is the intended design, not a working feature.
              </p>
            </div>

            {/* The four "shells" honestly gated */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-400 text-sm block">Reference CLI (`nuncio-cli`)</span>
                  <AvailableNow />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A scriptable, noun-verb command-line client and the project&apos;s own end-to-end test driver.
                  Build and run it today with <code className="text-purple-300 font-mono">cargo run -p nuncio-cli</code>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-400 text-sm block">Desktop GUI</span>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A native desktop app consuming the frozen gRPC API, planned as a separate client repository. Not
                  built yet.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-400 text-sm block">Terminal TUI</span>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A keyboard-driven terminal client over the same API. The keybinding table below is the intended
                  design for this client, not something you can run today.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-400 text-sm block">MCP AI Client</span>
                  <StatusBadge variant="planned" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A governed bridge letting AI agents work with your mail through capability policies. See the{" "}
                  <a href="/mcp" className="text-emerald-300 hover:underline">
                    MCP page
                  </a>{" "}
                  for the full design.
                </p>
              </div>
            </div>

            {/* Planned Keybinding Reference */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  Intended Terminal TUI Keybindings
                </h3>
                <StatusBadge variant="planned" label="Design draft" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {plannedKeybindings.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/10 flex justify-between items-center">
                    <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">{item.key}</span>
                    <span className="text-slate-300 text-right">{item.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-2 text-xs">
              <span className="text-blue-300 font-bold block flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-400" />
                What &quot;Feature Parity&quot; Means Here
              </span>
              <p className="text-slate-300 leading-relaxed">
                Because every client is a thin layer over the same gRPC contract, feature parity across clients is a
                property of the contract, not of separate implementations staying in sync by discipline. That is the
                design goal for GUI, TUI, and MCP once they&apos;re built — it is not a claim that they exist today.
              </p>
            </div>
          </div>
        </DocsLayout>
      </main>
      <Footer />
    </div>
  );
}

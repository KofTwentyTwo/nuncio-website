import React from "react";
import { Rocket, ArrowRight } from "lucide-react";
import { ROADMAP_URL } from "@/lib/status";

/**
 * Site-wide "in active development" signal (CONTENT-POLICY.md guardrail
 * #3). Rendered once from src/app/layout.tsx so every route carries it
 * without every page needing to remember to include it.
 *
 * Deliberately not apologetic: Nuncio is pre-alpha, and this bar says so
 * plainly while pointing at the roadmap as the proof of momentum.
 */
export function DevStatusRibbon() {
  return (
    <a
      href={ROADMAP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="gradient-bg group flex items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-white transition-opacity hover:opacity-95"
    >
      <Rocket className="w-3.5 h-3.5 shrink-0" />
      <span className="truncate">
        Nuncio is in active development — building in the open, not shipping vapor.
      </span>
      <span className="hidden sm:inline-flex items-center gap-1 underline-offset-2 group-hover:underline">
        See the roadmap
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </a>
  );
}

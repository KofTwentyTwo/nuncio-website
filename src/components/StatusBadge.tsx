import React from "react";
import { CheckCircle2, Circle, Loader2, Zap } from "lucide-react";
import type { StatusVariant } from "@/lib/status";

interface StatusBadgeProps {
  variant: StatusVariant;
  /** Override the default label for this variant. */
  label?: string;
  className?: string;
}

const VARIANT_STYLES: Record<
  StatusVariant,
  { defaultLabel: string; classes: string; icon: React.ReactNode }
> = {
  "available-now": {
    defaultLabel: "Available now",
    classes: "bg-blue-500/15 text-blue-300 border-blue-500/40",
    icon: <Zap className="w-3 h-3" />,
  },
  shipped: {
    defaultLabel: "Shipped",
    classes: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  "in-progress": {
    defaultLabel: "In progress",
    classes: "bg-amber-500/15 text-amber-300 border-amber-500/40",
    icon: <Loader2 className="w-3 h-3" />,
  },
  planned: {
    defaultLabel: "Planned",
    classes: "bg-slate-500/15 text-slate-300 border-slate-500/40",
    icon: <Circle className="w-3 h-3" />,
  },
};

/**
 * Small, theme-aware pill for marking the real status of a claim on the
 * page: shipped, in-progress, planned, or available-now. Backed by the
 * typed status list in src/lib/status.ts — see CONTENT-POLICY.md.
 */
export function StatusBadge({ variant, label, className = "" }: StatusBadgeProps) {
  const style = VARIANT_STYLES[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] sm:text-xs font-semibold tracking-tight whitespace-nowrap ${style.classes} ${className}`}
    >
      {style.icon}
      <span>{label ?? style.defaultLabel}</span>
    </span>
  );
}

/**
 * Convenience wrapper for the "available-now" variant — use this to flag
 * the small set of things a developer can genuinely do today (build the
 * daemon, run the CLI, etc.) without repeating the variant name everywhere.
 */
export function AvailableNow({ label, className }: { label?: string; className?: string }) {
  return <StatusBadge variant="available-now" label={label} className={className} />;
}

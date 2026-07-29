/**
 * Single source of truth for what Nuncio can genuinely do today versus what
 * is on the roadmap. Pages must import from here rather than hard-coding
 * availability claims in copy — see CONTENT-POLICY.md guardrail #1.
 *
 * Seeded from the engine roadmap (nuncio/docs/ROADMAP.md). Update this file
 * when a milestone in that roadmap actually lands — not before.
 */

export type StatusVariant = "available-now" | "shipped" | "in-progress" | "planned";

export interface StatusItem {
  /** Stable slug for lookups / React keys. */
  id: string;
  /** Short label suitable for a badge or list item. */
  label: string;
  /** One of the four status variants. */
  status: StatusVariant;
  /** Optional longer copy for a tooltip, card, or detail page. */
  detail?: string;
}

export const ROADMAP_URL = "https://koftwentytwo.github.io/nuncio/roadmap/";
export const GITHUB_URL = "https://github.com/KofTwentyTwo/nuncio";

/**
 * Genuinely usable today by a developer willing to build from source. No
 * packaged installer exists yet — see CONTENT-POLICY.md guardrail #1 for why
 * "Download" CTAs are banned even though these items are real.
 */
export const AVAILABLE_NOW: StatusItem[] = [
  {
    id: "build-daemon",
    label: "Build & run the nunciod daemon from source",
    status: "available-now",
    detail:
      "Clone the repo, cargo build --workspace, and run the daemon locally. It serves a gRPC API on loopback.",
  },
  {
    id: "reference-cli",
    label: "Drive it with the nuncio-cli reference client",
    status: "available-now",
    detail: "The in-repo CLI is a full gRPC client and the E2E driver for the engine.",
  },
  {
    id: "imap-smtp-sync",
    label: "Multi-account IMAP / SMTP sync",
    status: "available-now",
    detail: "Real IMAP fetch -> store -> read -> SMTP send, tested against mock servers.",
  },
  {
    id: "fts5-search",
    label: "SQLite FTS5 full-text search",
    status: "available-now",
    detail: "Local full-text search over synced mail, backed by SQLite FTS5.",
  },
  {
    id: "export",
    label: "MBOX / EML / JSON export",
    status: "available-now",
    detail: "Export synced mail to standard, portable formats — no lock-in.",
  },
  {
    id: "worm-audit",
    label: "WORM audit chain",
    status: "available-now",
    detail: "An append-only, hash-chained audit ledger for actions taken against your mail.",
  },
];

/**
 * Vision items: real engineering targets on the roadmap, not yet available
 * to end users. Do not mark anything here "shipped" until the corresponding
 * roadmap milestone is actually done — see CONTENT-POLICY.md guardrail #2.
 */
export const ON_THE_ROADMAP: StatusItem[] = [
  {
    id: "jmap",
    label: "JMAP protocol support",
    status: "planned",
    detail: "A second mail backend alongside IMAP/SMTP.",
  },
  {
    id: "caldav",
    label: "CalDAV calendar sync",
    status: "planned",
    detail: "Calendar sync exposed end-to-end over the API; the engine transport exists but isn't wired up yet.",
  },
  {
    id: "carddav",
    label: "CardDAV contacts sync",
    status: "planned",
    detail: "Contacts sync and persistence, brought to parity with mail and calendar.",
  },
  {
    id: "filters-firing",
    label: "Filters actually firing on synced mail",
    status: "planned",
    detail: "Rules can be created and dry-run tested today; wiring them into the live sync path is still ahead.",
  },
  {
    id: "at-rest-encryption",
    label: "At-rest body encryption",
    status: "planned",
    detail: "Encrypting message bodies at rest, hardened as part of the security milestone.",
  },
  {
    id: "html-sanitization",
    label: "HTML sanitization",
    status: "planned",
    detail: "A sandboxed HTML email rendering pipeline for clients.",
  },
  {
    id: "desktop-gui",
    label: "Desktop GUI client",
    status: "planned",
    detail: "A native desktop app consuming the frozen gRPC API — a separate client repo.",
  },
  {
    id: "terminal-tui",
    label: "Terminal TUI client",
    status: "planned",
    detail: "A keyboard-driven terminal client consuming the frozen gRPC API.",
  },
  {
    id: "mcp-client",
    label: "MCP client",
    status: "planned",
    detail: "An MCP bridge letting AI agents talk to Nuncio through a governed gateway.",
  },
];

export const ALL_STATUS_ITEMS: StatusItem[] = [...AVAILABLE_NOW, ...ON_THE_ROADMAP];

export function getStatusItem(id: string): StatusItem | undefined {
  return ALL_STATUS_ITEMS.find((item) => item.id === id);
}

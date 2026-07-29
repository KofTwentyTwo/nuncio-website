export interface DocNavNode {
  slug: string;
  category: string;
  title: string;
  iconName: "Download" | "Key" | "Monitor" | "Cpu" | "Code" | "Bot" | "Layers" | "Terminal" | "FileCheck" | "HelpCircle";
}

export const DOCS_NAVIGATION: DocNavNode[] = [
  {
    slug: "quickstart",
    category: "Getting Started",
    title: "Quickstart: Build & Run From Source",
    iconName: "Download",
  },
  {
    slug: "account-setup",
    category: "Getting Started",
    title: "Account Setup (Planned)",
    iconName: "Key",
  },
  {
    slug: "interfaces",
    category: "User Interfaces",
    title: "Client Interfaces (CLI Today, More Planned)",
    iconName: "Monitor",
  },
  {
    slug: "nsql-spec",
    category: "Automation Engine",
    title: "NSQL Language Specification",
    iconName: "Cpu",
  },
  {
    slug: "webhooks",
    category: "Automation Engine",
    title: "Outbound Signed Webhooks",
    iconName: "Code",
  },
  {
    slug: "mcp",
    category: "AI Integration",
    title: "Model Context Protocol (Planned)",
    iconName: "Bot",
  },
  {
    slug: "html-rendering",
    category: "Security",
    title: "HTML Rendering & Sandboxing (Planned)",
    iconName: "Layers",
  },
  {
    slug: "export-backups",
    category: "Maintenance",
    title: "Data Export & Backups",
    iconName: "Terminal",
  },
  {
    slug: "worm-audits",
    category: "Security & Compliance",
    title: "WORM Audit Ledger",
    iconName: "FileCheck",
  },
  {
    slug: "recovery",
    category: "Maintenance",
    title: "Database Corruption Recovery",
    iconName: "HelpCircle",
  },
];

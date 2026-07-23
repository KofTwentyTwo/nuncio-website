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
    title: "Quickstart & Installation",
    iconName: "Download",
  },
  {
    slug: "account-setup",
    category: "Getting Started",
    title: "Account Setup & Providers",
    iconName: "Key",
  },
  {
    slug: "interfaces",
    category: "User Interfaces",
    title: "Four Shells & Vim Keybindings",
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
    title: "Native MCP AI Server Setup",
    iconName: "Bot",
  },
  {
    slug: "html-rendering",
    category: "User Experience",
    title: "HTML & Image Rendering Guide",
    iconName: "Layers",
  },
  {
    slug: "export-backups",
    category: "Maintenance",
    title: "Universal Data Export & Backups",
    iconName: "Terminal",
  },
  {
    slug: "worm-audits",
    category: "Security & Compliance",
    title: "WORM Cryptographic Audits",
    iconName: "FileCheck",
  },
  {
    slug: "recovery",
    category: "Maintenance",
    title: "Database Corruption Recovery",
    iconName: "HelpCircle",
  },
];

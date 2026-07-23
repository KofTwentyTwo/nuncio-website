import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nuncio.mx"),
  title: "Nuncio — Sovereign Mail & Calendar Suite for Power Users and Autonomous Agents",
  description:
    "Free open-source high-performance email and calendar suite featuring 100% Feature Parity across POSIX CLI, Vim Ratatui TUI, Desktop GUI, and Native MCP LLM Agent Interface.",
  keywords: [
    "Nuncio",
    "Email Client",
    "Calendar App",
    "Ratatui TUI",
    "Tauri GUI",
    "Model Context Protocol",
    "MCP Server",
    "NSQL Filter Engine",
    "IMAP",
    "JMAP",
    "CalDAV",
    "CardDAV",
    "Open Source",
  ],
  authors: [{ name: "KofTwentyTwo", url: "https://kof22.com" }],
  alternates: {
    canonical: "https://nuncio.mx",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Nuncio — Sovereign Mail & Calendar Suite",
    description:
      "Free open-source high-performance email and calendar suite featuring 100% Multi-Shell Parity across CLI, TUI, GUI, and MCP interfaces.",
    url: "https://nuncio.mx",
    siteName: "Nuncio",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuncio — Sovereign Mail & Calendar Suite",
    description:
      "Free open-source high-performance email and calendar suite featuring 100% Multi-Shell Parity.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col bg-[#0B0F19] text-gray-100 selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

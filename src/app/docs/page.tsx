import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsHub } from "@/components/DocsHub";

export const metadata = {
  title: "Documentation & How-To Guides — Nuncio",
  description: "Complete user manual, installation guide, NSQL filter language specification, protocol setup, and MCP LLM agent integration guide for Nuncio.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow pt-8">
        <DocsHub />
      </main>
      <Footer />
    </div>
  );
}

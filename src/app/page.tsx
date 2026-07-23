import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NsqlPlayground } from "@/components/NsqlPlayground";
import { ParityMatrixSection } from "@/components/ParityMatrixSection";
import { SecurityHub } from "@/components/SecurityHub";
import { McpIntegrationHub } from "@/components/McpIntegrationHub";
import { DownloadsSection } from "@/components/DownloadsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-gray-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <NsqlPlayground />
        <ParityMatrixSection />
        <SecurityHub />
        <McpIntegrationHub />
        <DownloadsSection />
      </main>
      <Footer />
    </div>
  );
}

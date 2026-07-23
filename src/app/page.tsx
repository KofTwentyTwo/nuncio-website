import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FourExperiencesSection } from "@/components/FourExperiencesSection";
import { NsqlPlayground } from "@/components/NsqlPlayground";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ParityMatrixSection } from "@/components/ParityMatrixSection";
import { SecurityHub } from "@/components/SecurityHub";
import { McpIntegrationHub } from "@/components/McpIntegrationHub";
import { DocsHub } from "@/components/DocsHub";
import { DownloadsSection } from "@/components/DownloadsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FourExperiencesSection />
        <NsqlPlayground />
        <ComparisonSection />
        <ParityMatrixSection />
        <SecurityHub />
        <McpIntegrationHub />
        <DocsHub />
        <DownloadsSection />
      </main>
      <Footer />
    </div>
  );
}

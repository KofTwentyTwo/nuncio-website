import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ManifestoPillarsSection } from "@/components/ManifestoPillarsSection";
import { FourExperiencesSection } from "@/components/FourExperiencesSection";
import { NsqlPlayground } from "@/components/NsqlPlayground";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ParityMatrixSection } from "@/components/ParityMatrixSection";
import { SecurityHub } from "@/components/SecurityHub";
import { McpIntegrationHub } from "@/components/McpIntegrationHub";
import { DocsHub } from "@/components/DocsHub";
import { DownloadsSection } from "@/components/DownloadsSection";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-slate-100">
      <Header />
      <main className="flex-grow space-y-0">
        <Hero />
        <div id="manifesto">
          <ManifestoPillarsSection />
        </div>
        <div id="experiences">
          <FourExperiencesSection />
        </div>
        <div id="nsql">
          <NsqlPlayground />
        </div>
        <div id="compare">
          <ComparisonSection />
        </div>
        <div id="parity">
          <ParityMatrixSection />
        </div>
        <div id="security">
          <SecurityHub />
        </div>
        <div id="mcp">
          <McpIntegrationHub />
        </div>
        <div id="docs">
          <DocsHub />
        </div>
        <div id="downloads">
          <DownloadsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

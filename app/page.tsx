"use client";

import { HeroSection } from "@/components/hero-section";
import { PackagesSection } from "@/components/package-filter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PackagesSection />
    </main>
  );
}
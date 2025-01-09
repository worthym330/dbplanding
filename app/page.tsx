"use client";

import { HotelList } from "@/components/hotel-list";
import { HeroSection } from "@/components/hero-section";
import { PackagesSection } from "@/components/package-filter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <HotelList /> */}
      <PackagesSection />
    </main>
  );
}
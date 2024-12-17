"use client";

import { HotelList } from "@/components/hotel-list";
import { HeroSection } from "@/components/hero-section";
import { FilterBar } from "@/components/filter-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FilterBar />
      <HotelList />
    </main>
  );
}
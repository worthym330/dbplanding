"use client";

import { HotelList } from "@/components/hotel-list";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HotelList />
    </main>
  );
}
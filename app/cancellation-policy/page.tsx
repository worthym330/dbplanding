"use client";

import { ContactHero } from "@/components/contact/contacthero";
import CancellationPolicy from "@/components/policies/cancellation-policy";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-4">
      <ContactHero page="cancellation"/>
      <div className="container mx-auto px-4 py-12">
        <CancellationPolicy />
      </div>
    </main>
  );
}
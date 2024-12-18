"use client";

import { ContactHero } from "@/components/contact/contacthero";
import PrivacyPolicy from "@/components/policies/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-4">
      <ContactHero page="privacy"/>
      <div className="container mx-auto px-4 py-12">
        <PrivacyPolicy />
      </div>
    </main>
  );
}
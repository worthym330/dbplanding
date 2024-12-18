"use client";

import { ContactHero } from "@/components/contact/contacthero";
import TermsAndConditions from "@/components/policies/term-and-condition";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-4">
      <ContactHero page="terms"/>
      <div className="container mx-auto px-4 py-12">
        <TermsAndConditions />
      </div>
    </main>
  );
}
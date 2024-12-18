"use client";

import { ContactHero } from "@/components/contact/contacthero";
import CookiePolicy from "@/components/policies/cookie-policy";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-4">
      <ContactHero page="cookie"/>
      <div className="container mx-auto px-4 py-12">
        <CookiePolicy />
      </div>
    </main>
  );
}
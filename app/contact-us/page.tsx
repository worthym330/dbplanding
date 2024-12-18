"use client";

import { ContactForm } from "@/components/contact/contactform";
import { ContactHero } from "@/components/contact/contacthero";
import { ContactInfo } from "@/components/contact/contactinfo";
import { ContactMap } from "@/components/contact/contactmap";


export default function ContactPage() {
  return (
    <main className="min-h-screen py-4">
      <ContactHero page="contact"/>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            {/* <ContactMap /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
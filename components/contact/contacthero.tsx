"use client";

import { motion } from "framer-motion";

type ContactHeroProps = {
  page: "contact" | "privacy" | "cookie" | "terms" | "cancellation";
};

export function ContactHero({ page }: ContactHeroProps) {
  // Define text content based on the page prop
  const content = {
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help with your premium recovery experience",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Learn how we handle and protect your personal information",
    },
    cookie: {
      title: "Cookie Policy",
      subtitle: "Understand how we use cookies to enhance your experience",
    },
    terms: {
      title: "Terms and Conditions",
      subtitle: "Review the terms and conditions for using our services",
    },
    cancellation: {
      title: "Cancellation Policy",
      subtitle: "Understand our guidelines for cancellations and refunds",
    },
  };

  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {content[page].title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-200"
        >
          {content[page].subtitle}
        </motion.p>
      </div>
    </section>
  );
}

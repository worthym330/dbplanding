"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Modal } from "./modal";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop')",
          filter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white"
      >
        <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
          Discover Your Perfect Daycation
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-gray-200 md:text-xl">
          Indulge in world-class spas, savor gourmet dining, and unwind by
          serene pools with our exclusive day passes. Experience luxury
          reimagined—no overnight stay required.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          Join Waitlist
        </motion.button>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 cursor-pointer"
        >
          <ChevronDown
            size={32}
            className="text-white"
            onClick={() => {
              const targetElement = document.getElementById("hotels");
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </motion.div>
      </motion.div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

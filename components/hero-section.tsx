"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/marathon.jpg')",
          // backgroundImage:
          //   "url('https://images.unsplash.com/photo-1596460658047-1826d5921c56?auto=format&fit=crop&q=80')",
          filter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-x-0 flex items-center justify-center">
        <img
          src="/DayBreakPassXTTMLogo.svg"
          alt="DayBreakPassXTTMLogo"
          className="w-96 object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white"
      >
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
          Premium Recovery
          <br />
          <span className="text-white">After Your Marathon</span>
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-gray-200 md:text-xl">
          Exclusive hotels with premium amenities for the perfect post-race
          relaxation experience
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={() => {
            const targetElement = document.getElementById("hotels");
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book Early Slots Now
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
    </div>
  );
}

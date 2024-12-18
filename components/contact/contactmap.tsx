"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-card rounded-lg border border-border p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Location</h2>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6612482485884!2d72.85002507520761!3d19.166299982056916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b652ec319a77%3A0x94fb5e3221a3501c!2sGoregaon%20Railway%20Station%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1734500586622!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
}
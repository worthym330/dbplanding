"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "Goregaon, Mumbai, Maharashtra, India",
    link: "https://maps.app.goo.gl/hcYzcUkbjh7cQdGi7",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+918356070349",
    link: "tel:+918356070349",
  },
  {
    icon: Mail,
    title: "Email",
    content: "support@daybreakpass.com",
    link: "mailto:support@daybreakpass.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-card rounded-lg border border-border p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <detail.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{detail.title}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-muted-foreground">{detail.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
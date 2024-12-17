"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "brunch-pool", label: "Brunch + Pool" },
  { id: "spa", label: "Spa Packages" },
  { id: "brunch", label: "Brunch Only" },
];

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filters:</span>
          </div>
          <div className="flex gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "outline"}
                onClick={() => setActiveFilter(option.id)}
                className="relative"
              >
                {activeFilter === option.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-md bg-primary"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
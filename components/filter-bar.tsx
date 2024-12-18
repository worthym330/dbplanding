"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotels } from "@/lib/data"; 

// Function to extract unique package names from hotels
const getUniquePackages = () => {
  const packages: string[] = [];
  hotels.forEach((hotel) => {
    hotel.packages.forEach((pkg) => {
      if (!packages.includes(pkg.name)) {
        packages.push(pkg.name);
      }
    });
  });
  return packages;
};

export function FilterBar({ onFilterChange }: { onFilterChange: (filter: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterOptions, setFilterOptions] = useState<{ id: string, label: string }[]>([]);

  // Set filter options once the component mounts
  useEffect(() => {
    const uniquePackages = getUniquePackages();
    const options = [
      { id: "all", label: "All" },
      ...uniquePackages.map((pkg) => ({ id: pkg.toLowerCase(), label: pkg }))
    ];
    setFilterOptions(options);
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

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
                onClick={() => handleFilterChange(option.id)}
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

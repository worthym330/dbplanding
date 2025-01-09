"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hotels } from "@/lib/data";
const getUniquePackages = () => {
  const packages: string[] = [];
  hotels.forEach((hotel) => {
    if (!packages.includes(hotel.hotelpackage)) {
      packages.push(hotel.hotelpackage);
    }
  });
  return packages;
};

export function FilterBar({
  onFilterChange,
}: {
  onFilterChange: (value: any) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("");
  const [filterOptions, setFilterOptions] = useState<
    { id: string; label: string }[]
  >([]);

  // Set filter options once the component mounts
  useEffect(() => {
    const uniquePackages = getUniquePackages();
    const options = [
      ...uniquePackages.map((pkg) => ({ id: pkg.toLowerCase(), label: pkg })),
    ];
    setFilterOptions(options);
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="gap-4">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className=""
      >
        <div className="flex flex-wrap gap-4 ">
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              variant={activeFilter === option.id ? "default" : "outline"}
              onClick={() => handleFilterChange(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

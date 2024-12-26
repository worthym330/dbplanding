"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotels } from "@/lib/data";
import { Label } from "./ui/label";
import { Hotel } from "@/lib/types";

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

export function FilterBar({
  onFilterChange,
  hotels,
}: {
  onFilterChange: (value: any) => void;
  hotels: Hotel[];
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterOptions, setFilterOptions] = useState<
    { id: string; label: string }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="sticky top-16 z-50 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {hotels.length} hotels found
            </span>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="py-4 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="space-y-4">
              <Label>Packages</Label>
              <div className="flex flex-wrap gap-2 h-48 overflow-y-auto">
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
            <div className="col-span-full flex justify-end mt-4">
              <Button
                variant="default"
                onClick={() => {
                  setIsOpen(false); // Optionally close the filter bar after applying filters
                }}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

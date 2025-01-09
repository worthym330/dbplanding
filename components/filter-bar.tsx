"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotels } from "@/lib/data";
import { Label } from "./ui/label";
import { Hotel } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        className="gap-4"
      >
        <div className="space-y-4">
          {/* <Label>Packages</Label> */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {activeFilter === "all"
                  ? "Select Package"
                  : filterOptions.find((option) => option.id === activeFilter)
                      ?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-96 overflow-y-auto">
              {filterOptions.map((option) => (
              <DropdownMenuItem
                key={option.id}
                onClick={() => handleFilterChange(option.id)}
                className={
                activeFilter === option.id ? "bg-primary text-white" : ""
                }
              >
                {option.label}
              </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HotelCard } from "@/components/hotel-card/hotel-card";
import { hotels } from "@/lib/data";
import { FilterBar } from "./filter-bar";

export function HotelList() {
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleFilterChange = (filter: string) => {
    if (filter === "all") {
      setFilteredHotels(hotels);
    } else {
      const filterLabel = filter;
      setFilteredHotels(
        hotels.filter((hotel) =>
          hotel.packages.some((pkg) =>
            pkg.name.toLowerCase().includes(filterLabel.toLowerCase())
          )
        )
      );
    }
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} hotels={filteredHotels} />
      <div className="mx-auto max-w-7xl px-4 py-12" id="hotels">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHotels
            .sort((a, b) => {
              if (a.ispartner === b.ispartner) return 0;
              return a.ispartner ? -1 : 1;
            })
            .map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HotelCard hotel={hotel} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

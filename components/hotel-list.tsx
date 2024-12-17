"use client";

import { motion } from "framer-motion";
import { HotelCard } from "@/components/hotel-card/hotel-card";
import { hotels } from "@/lib/data";
// import { useHotelsStore } from "@/lib/hooks/use-hotel";
// import { useEffect } from "react";

export function HotelList() {
  // const { hotels, fetchHotels } = useHotelsStore();

  // useEffect(() => {
  //   fetchHotels();
  // }, [fetchHotels]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
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
  );
}
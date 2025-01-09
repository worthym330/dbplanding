"use client";

import { hotels } from "@/lib/data";
import { useState, useEffect } from "react";
import { FilterBar } from "./filter-bar";
import { DistanceRangeSort, DistanceSort, PriceSort } from "./price-sort";
import { HotelCard } from "./hotel-card/hotel-card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

export function PackagesSection() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [selectedRange, setSelectedRange] = useState<[number, number]>([0, 0]);
  const [distanceSortOrder, setDistanceSortOrder] = useState<
    "asc" | "desc" | ""
  >("");
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    let updatedHotels = [...hotels];

    // Filter by selected range
    if (selectedRange[0] !== 0 || selectedRange[1] !== 0) {
      updatedHotels = updatedHotels.filter(
        (hotel) =>
          typeof hotel.distance === "number" &&
          hotel.distance >= selectedRange[0] &&
          hotel.distance <= selectedRange[1]
      );
    }

    // Sort by distance
    if (distanceSortOrder) {
      updatedHotels.sort((a, b) => {
        return distanceSortOrder === "asc"
          ? ((a.distance ?? 0) as number) - ((b.distance ?? 0) as number)
          : ((b.distance ?? 0) as number) - ((a.distance ?? 0) as number);
      });
    }

    // Sort by price
    if (sortOrder) {
      updatedHotels.sort((a, b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
    }

    setFilteredHotels(updatedHotels);
  }, [sortOrder, selectedRange, distanceSortOrder]);

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

  const handleClearFilters = () => {
    setSortOrder("");
    setSelectedRange([0, 0]);
    setDistanceSortOrder("");
    setFilteredHotels(hotels);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 top-16 z-10 sticky bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b border-border py-2">
          <div className="md:hidden">
            <button onClick={() => setShowSlider(true)}>
              <Filter className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex">
            <FilterBar
              onFilterChange={handleFilterChange}
              hotels={filteredHotels}
            />
          </div>
          <div className="hidden md:flex">
            <PriceSort sortOrder={sortOrder} onSort={setSortOrder} />
          </div>
          <div className="hidden md:flex">
            <DistanceRangeSort
              selectedRange={selectedRange}
              onRangeSelect={setSelectedRange}
            />
          </div>
          <div className="hidden md:flex">
            <DistanceSort
              sortOrder={distanceSortOrder}
              onSort={setDistanceSortOrder}
            />
          </div>
          <div className="hidden md:flex">
            <Button
              variant={"default"}
              onClick={handleClearFilters}
              disabled={
                !sortOrder &&
                selectedRange[0] === 0 &&
                selectedRange[1] === 0 &&
                !distanceSortOrder
              }
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {showSlider && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setShowSlider(false)}
          >
            <motion.div
              className="fixed left-0 top-0 bottom-0 w-64 bg-white p-4 z-50"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowSlider(false)} className="mb-4">
                Close
              </button>
              <FilterBar
                onFilterChange={handleFilterChange}
                hotels={filteredHotels}
              />
              <PriceSort sortOrder={sortOrder} onSort={setSortOrder} />
              <DistanceRangeSort
                selectedRange={selectedRange}
                onRangeSelect={setSelectedRange}
              />
              <DistanceSort
                sortOrder={distanceSortOrder}
                onSort={setDistanceSortOrder}
              />
              <Button
                variant={"default"}
                onClick={handleClearFilters}
                disabled={
                  !sortOrder &&
                  selectedRange[0] === 0 &&
                  selectedRange[1] === 0 &&
                  !distanceSortOrder
                }
              >
                Clear Filters
              </Button>
              <Button
                variant={"default"}
                onClick={() => setShowSlider(false)}
                className="mt-4"
              >
                Apply
              </Button>
            </motion.div>
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
}

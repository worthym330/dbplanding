"use client";

import { hotels } from "@/lib/data";
import { useState, useEffect } from "react";
import { FilterBar } from "./filter-bar";
import { PremiumFilter, PriceSort } from "./price-sort";
import { HotelCard } from "./hotel-card/hotel-card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function PackagesSection() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [ispremium, setIspremium] = useState<boolean | undefined>(undefined);
  const [packageFilter, setPackageFilter] = useState<string>("");
  const [openSheet, setOpenSheet] = useState(false);

  useEffect(() => {
    let updatedHotels = [...hotels];
    // Sort by price
    if (sortOrder) {
      updatedHotels.sort((a, b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
    }

    if (ispremium !== undefined) {
      updatedHotels = updatedHotels.filter(
        (hotel) => hotel.ispremium === ispremium
      );
    }

    if (packageFilter !== "") {
      updatedHotels = updatedHotels.filter(
        (hotel) => hotel.hotelpackage.toLowerCase() === packageFilter.toLowerCase()
      );
    }

    setFilteredHotels(updatedHotels);
  }, [sortOrder, ispremium, packageFilter]);

  const handleClearFilters = () => {
    setSortOrder("");
    setPackageFilter("");
    // setFilteredHotels(hotels);
    setIspremium(undefined);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="hidden md:block sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FilterBar
                activeFilter={packageFilter}
                setActiveFilter={setPackageFilter}
              />
              <PremiumFilter
                ispremium={ispremium}
                setIspremium={setIspremium}
              />
              <PriceSort sortOrder={sortOrder} onSort={setSortOrder} />
              <Button
                variant={"default"}
                onClick={handleClearFilters}
                disabled={
                  !sortOrder && ispremium === undefined && packageFilter === ""
                }
              >
                Clear Filters
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {filteredHotels.length} hotels found
            </p>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between mb-8 sticky top-16 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-4">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Package Type</h3>
                  <FilterBar
                    activeFilter={packageFilter}
                    setActiveFilter={setPackageFilter}
                  />
                  <PremiumFilter
                    ispremium={ispremium}
                    setIspremium={setIspremium}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Sort by Price</h3>
                  <PriceSort sortOrder={sortOrder} onSort={setSortOrder} />
                </div>

                <div className="flex justify-center items-center space-x-4">
                  <Button
                    variant={"default"}
                    onClick={() => setOpenSheet(false)}
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant={"default"}
                    onClick={handleClearFilters}
                    disabled={
                      !sortOrder &&
                      ispremium === undefined &&
                      packageFilter === ""
                    }
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <p className="text-sm text-muted-foreground">
            {filteredHotels.length} hotels found
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

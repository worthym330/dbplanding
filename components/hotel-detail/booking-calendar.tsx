"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Drawer } from "vaul";
import { CalendarIcon } from "lucide-react";
import { format, isSunday, isBefore } from "date-fns";
import { useDateStore } from "@/lib/hooks/use-date";
import { Hotel } from "@/lib/types";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useCart } from "@/lib/hooks/use-cart";
import { useRouter } from "next/navigation";

export function BookingCalendar({ selectedHotel }: { selectedHotel: Hotel }) {
  const { date, setDate, err,setErr } = useDateStore();
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterOptions, setFilterOptions] = useState<
    { id: string; label: string; issunday?: boolean }[]
  >([]);

  const router = useRouter();
  const { getTotal, items, setSelectedPackage, selectedpackage } = useCart();

  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    setActiveFilter(selectedpackage);
  }, [selectedpackage]);
  
  useEffect(() => {
    setAmount(getTotal());
  }, [getTotal, items]);

  const handleSubmit = () => {
    toast.error("Please add a date first");
  };

  useEffect(() => {
    const uniquePackages = getUniquePackages();

    const options = [
      { id: "all", label: "All", issunday: false },
      ...uniquePackages.map((pkg) => {
        const packageObject = selectedHotel.packages.find(
          (hotelPkg) => hotelPkg.name.toLowerCase() === pkg.toLowerCase()
        );
        return {
          id: pkg.toLowerCase(),
          label: pkg,
          issunday: packageObject?.issunday,
        };
      }),
    ];

    setFilterOptions(options);
  }, [selectedHotel]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSelectedPackage(filter);
  };

  const handleDateChange = (date: Date) => {
    setDate(date);
    setErr(false)
  }

  const getUniquePackages = () => {
    const packages: string[] = [];
    selectedHotel.packages.forEach((pkg) => {
      if (!packages.includes(pkg.name)) {
        packages.push(pkg.name);
      }
    });
    return packages;
  };

  const isDateDisabled = (date: Date) => {
    if (activeFilter === "all") return true;
    if (isBefore(date, new Date())) return true;

    if (
      activeFilter !== "all" &&
      filterOptions.find((option) => option.id === activeFilter)?.issunday
    ) {
      return !isSunday(date);
    }
    return false;
  };

  return (
    <div className="relative">
      <div className="lg:hidden">
        <span className="font-bold text-xl p-2">Select a date</span>

        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal ${
                err ? "border-2 border-red-500" : ""
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex flex-col rounded-t-[10px] bg-background lg:hidden">
              <div className="flex-1 rounded-t-[10px] bg-background p-4">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
                <div className="max-w-md mx-auto">
                  {/* Display hotel packages above the calendar */}
                  <div className="mb-4  overflow-x-auto">
                    <h3 className="font-medium">
                      Packages for {selectedHotel.name}
                    </h3>
                    <div className="flex gap-2 ">
                      {filterOptions.map((option) => (
                        <Button
                          key={option.id}
                          variant={
                            activeFilter === option.id ? "default" : "outline"
                          }
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

                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && handleDateChange(date)}
                    className="rounded-md border"
                    disabled={isDateDisabled} // Use the isDateDisabled function to disable dates
                  />
                  <div className="mt-4 flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
      <div className="flex-1 rounded-t-[10px] bg-background p-4 hidden lg:block items-center justify-center">
        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
        <span className="font-bold text-xl">Select a date</span>
        <div className="w-full space-y-4">
          {/* Display hotel packages above the calendar */}
          <div className="mb-4 space-y-4">
            <h3 className="font-medium">Packages for {selectedHotel.name}</h3>
            <div className="flex gap-2 overflow-x-auto">
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

          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && handleDateChange(date)}
            className="rounded-md border w-full"
            disabled={isDateDisabled}
          />

          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              amount && amount > 0 ? router.push("/cart") : handleSubmit();
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

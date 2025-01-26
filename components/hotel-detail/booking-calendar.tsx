"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { isSunday, isBefore } from "date-fns";
import { useDateStore } from "@/lib/hooks/use-date";
import { Hotel } from "@/lib/types";
import toast from "react-hot-toast";
import { useCart } from "@/lib/hooks/use-cart";
import { useRouter } from "next/navigation";

export function BookingCalendar({ selectedHotel }: { selectedHotel: Hotel }) {
  const { date, setDate, err, setErr } = useDateStore();
  const { getTotal, items, selectedpackage, updateDate } = useCart();
  const [amount, setAmount] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setAmount(getTotal());
  }, [getTotal, items]);

  const handleSubmit = () => {
    toast.error("Please add a date first");
  };

  const handleDateChange = (date: Date) => {
    setDate(date);
    setErr(false);
    items.forEach((item) => {
      updateDate(item.id, date, item.hotelId);
    });
  };

  const isDateDisabled = (date: Date) => {
    const cutoffDate = new Date('2025-02-02');
    if (isBefore(date, new Date())) return true;
    if (date > cutoffDate) return true;
    if (selectedpackage === "") return true;
    if (
      selectedpackage !== "" &&
      selectedHotel.packages.find(
        (option) => option.name.toLowerCase() === selectedpackage.toLowerCase()
      )?.issunday
    ) {
      return !isSunday(date);
    }
    return false;
  };

  return (
    <div className={`relative ${err ? "border-2 border-red-500" : ""}`}>
      <div className="flex-1 rounded-t-[10px] bg-background p-4 hidden lg:block items-center justify-center">
        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
        <span className="font-bold text-xl">Select a date</span>
        <div className="w-full space-y-4">
        {selectedpackage === "" ? (
            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md">
              <span className="text-red-500 font-semibold">
                Please select the package first
              </span>
            </div>
          ) : (
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && handleDateChange(date)}
              className="rounded-md border w-full"
              disabled={isDateDisabled}
            />
          )}

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

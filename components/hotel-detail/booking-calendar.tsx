"use client";

import {  useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {  isSunday, isBefore } from "date-fns";
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
    if (isBefore(date, new Date())) return true;

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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/use-cart";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDateStore } from "@/lib/hooks/use-date";

export function StickyBookButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const router = useRouter();
  const pathname = usePathname();
  const { getTotal, items } = useCart();
  const { date, setCalendarRefErr, setErr } = useDateStore();

  const [amount, setAmount] = useState<number | null>(null);
  useEffect(() => {
    setAmount(getTotal());
  }, [getTotal, items]);

  const handleSubmit = () => {
    setCalendarRefErr(true);
    setErr(true);
  };

  const displayDate = date ? new Date(date).toDateString() : "No date selected";

  return !pathname.startsWith("/hotels/") ? (
    amount !== null && amount > 0 && (
      <motion.div
        style={{ opacity }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 p-4 backdrop-blur-lg lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="font-medium text-sm">Subtotal</p>
            <p className="text-xl font-bold">₹{amount.toFixed(2)}</p>
          </div>
          <Button
            size="lg"
            onClick={() => {
              router.push("/cart");
            }}
          >
            Book Now
          </Button>
        </div>
      </motion.div>
    )
  ) : (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 p-4 backdrop-blur-lg lg:hidden"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {amount && amount > 0 ? (
          <div>
            <p className="font-medium text-sm">Subtotal</p>
            <p className="text-xl font-bold">₹{amount.toFixed(2)}</p>
          </div>
        ) : (
          <div>
            <p className="font-medium text-sm">Date</p>
            <p className="text-lg font-bold">{displayDate}</p>
          </div>
        )}

        <Button
          size="lg"
          onClick={() => {
            amount && amount > 0 ? router.push("/cart") : handleSubmit();
          }}
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}

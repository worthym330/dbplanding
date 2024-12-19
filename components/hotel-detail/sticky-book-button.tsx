"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Hotel } from "@/lib/types";

interface StickyBookButtonProps {
  hotel: Hotel;
}

export function StickyBookButton({ hotel }: StickyBookButtonProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 p-4 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="font-medium">{hotel.name}</p>
          <p className="text-2xl font-bold">
            ₹{hotel.price}
            <span className="text-sm font-normal text-muted-foreground">
              /night
            </span>
          </p>
        </div>
        <Button size="lg">Book Now</Button>
      </div>
    </motion.div>
  );
}
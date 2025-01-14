"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Sun, Moon, Menu, X, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/hooks/use-cart";
import { useTheme } from "next-themes";
import moment from "moment";

export function Header() {
  const { items } = useCart();
  const { theme, setTheme } = useTheme();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const targetDate = moment("2025-01-18");
  const [timeLeft, setTimeLeft] = useState("");

  const logoSrc =
    theme === "dark" ? "/logos/logowhite.png" : "/logos/LogoBlack.png";

    useEffect(() => {
      const interval = setInterval(() => {
        const now = moment();
        const duration = moment.duration(targetDate.diff(now));
        setTimeLeft(
          `${duration.days()} days ${duration.hours()} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`
        );
      }, 1000);

      return () => clearInterval(interval);
    }, []);


  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className={`flex justify-center items-center gap-2 bg-primary text-white py-2 w-full text-center`}>
        <span className="font-bold text-sm">
          Last booking date | 18<sup>th</sup> Jan 2025 | {timeLeft}
        </span>
      </div>
      <div className="mx-auto flex h-16 container items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logoSrc} alt="DayBreakPass Logo" className="h-10 w-10" />
          <span>DayBreakPass</span>
        </Link>
        <nav className="flex items-center gap-2 md:gap-6">
          <Link href="/#hotels" className="text-sm font-medium">
            <Hotel className="w-6 h-6 md:hidden" />
            <span className="hidden md:block">Hotels</span>
          </Link>
          <Link href="/cart" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="border-transparent"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
                >
                  {itemCount}
                </motion.div>
              )}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}

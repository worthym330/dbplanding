"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/use-cart";

export function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logos/LogoBlack.png" className="h-10 w-10" />
          <span>DayBreakPass</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#hotels" className="text-sm font-medium">
            Hotels
          </Link>
          <Link href="/cart" className="relative">
            <Button variant="outline" size="icon">
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
        </nav>
      </div>
    </header>
  );
}
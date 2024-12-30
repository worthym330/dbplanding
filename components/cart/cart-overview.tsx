"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/lib/hooks/use-cart";

export function CartOverview() {
  const { items, updateQuantity, removeItem } = useCart((state) => ({
    items: state.items,
    updateQuantity: state.updateQuantity,
    removeItem: state.removeItem,
  }));

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card>
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{item.hotelName}</h1>
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.name}
                </h3>
                <p className="text-xl sm:text-2xl font-bold">
                  ₹{item.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /person
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1, item.hotelId)
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-sm sm:text-base">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1, item.hotelId)
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id, item.hotelId)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

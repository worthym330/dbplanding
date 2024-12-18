"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/hooks/use-cart";

export function CartSummary() {
  const { items } = useCart((state) => ({
    items: state.items,
  }))

  const subtotal = items.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span> {/* Display subtotal in INR */}
        </div>
        <div className="flex justify-between">
          <span>Tax (18%)</span>
          <span>₹{tax.toFixed(2)}</span> {/* Display tax in INR */}
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-bold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span> {/* Display total in INR */}
        </div>
      </CardContent>
    </Card>
  );
}

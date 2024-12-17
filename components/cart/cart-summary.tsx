"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CartSummary() {
  const subtotal = 697;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function OrderSummary() {
  const items = [
    { name: "Brunch + Pool Package", quantity: 2, price: 199 },
    { name: "Spa Package", quantity: 1, price: 299 },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <Badge variant="secondary">{item.quantity}x guests</Badge>
            </div>
            <p className="font-bold">${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="space-y-2 border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
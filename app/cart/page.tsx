"use client";

import { CartOverview } from "@/components/cart/cart-overview";
import { CartSummary } from "@/components/cart/cart-summary";
import { CartActions } from "@/components/cart/cart-actions";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartOverview />
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
            <CartActions />
          </div>
        </div>
      </div>
    </main>
  );
}
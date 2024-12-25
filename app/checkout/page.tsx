"use client";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCart } from "@/lib/hooks/use-cart";

export default function CheckoutPage() {
  const { items } = useCart((state) => ({
    items: state.items,
  }));

  const ispartner = items.length > 0 ? items[0]?.ispartner : false;
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">
          {ispartner ? "Checkout" : "Enquiry Now"}
        </h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm />
            {/* <PaymentSection /> */}
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

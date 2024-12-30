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
        <div className="flex flex-col-reverse gap-8 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <CheckoutForm />
            {/* <PaymentSection /> */}
          </div>
          <div className="w-full lg:w-1/3">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

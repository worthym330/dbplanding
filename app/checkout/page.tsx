"use client";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { PaymentSection } from "@/components/checkout/payment-section";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm />
            <PaymentSection />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
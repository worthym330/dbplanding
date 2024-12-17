"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CartActions() {
  const router = useRouter();

  return (
    <div className="mt-4 space-y-4">
      <Button className="w-full" size="lg" onClick={() => router.push("/checkout")}>
        Proceed to Checkout
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => router.back()}
      >
        Continue Shopping
      </Button>
    </div>
  );
}
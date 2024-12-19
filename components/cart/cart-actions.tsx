"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/use-cart";

export function CartActions() {
  const router = useRouter();
  const { items } = useCart((state) => ({
    items: state.items,
  }));
  return (
    <div className="mt-4 space-y-4">
      <Button
        className="w-full"
        size="lg"
        disabled={items.length === 0}
        onClick={() => router.push("/checkout")}
      >
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

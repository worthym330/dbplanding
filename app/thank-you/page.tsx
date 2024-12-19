"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/hooks/use-cart";
import { useCheckout } from "@/lib/hooks/use-checkout";
import { formatPrice } from "@/lib/utils/price";
import app_api from "@/lib/utils/api";

export default function ThankYouPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const { form, resetForm } = useCheckout();
  const searchParams = useSearchParams();
  const orderid = searchParams.get("orderid");

  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    getData();
  }, [orderid]);

  const getData = async () => {
    try {
      const res = await app_api.get(`/landing/order-details/${orderid}`);
      if (res?.data?.invoice) {
        setPdfUrl(res.data.invoice);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Reset cart and form after successful payment
    return () => {
      clearCart();
      resetForm();
    };
  }, [clearCart, resetForm]);

  // Function to trigger the PDF download
  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "receipt.pdf"; 
      link.click();
    }
  };

  return (
    <main className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary p-3">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-3xl">
                Thank You for Your Booking!
              </CardTitle>
              <p className="mt-2 text-muted-foreground">
                A confirmation email has been sent to {form.email}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-muted p-6">
                <h3 className="mb-4 font-semibold">Booking Details</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => router.push("/")}
                >
                  Return Home
                </Button>
                <Button className="gap-2" onClick={handleDownload}>
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

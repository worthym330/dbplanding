"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PaymentSection() {
  const handlePayment = async () => {
    // Integrate with payment gateway
    console.log("Processing payment...");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full" size="lg" onClick={handlePayment}>
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
}
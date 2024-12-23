"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useCheckout } from "@/lib/hooks/use-checkout";
import { initiateRazorpayPayment } from "@/lib/utils/razorpay";
import app_api from "@/lib/utils/api";
import { useCart } from "@/lib/hooks/use-cart";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers."),
  specialRequests: z.string().optional(),
});

export function CheckoutForm() {
  const { form: checkoutForm, updateForm } = useCheckout();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: checkoutForm,
  });
  const { items } = useCart((state) => ({
    items: state.items,
  }));

  const ispartner = items[0].ispartner;

  const subtotal = items.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (ispartner) {
      updateForm(data);

      let payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        cartItems: items,
        totalAmount: total,
      };
      await app_api
        .post("/landing/create-order", payload)
        .then(async (res) => {
          const order = res.data;
          await initiateRazorpayPayment(
            {
              amount: order.amount,
              currency: order.currency,
              name: data.name,
              description: "Order Payment",
              orderId: order.orderId,
              prefill: {
                name: data.name,
                email: data.email,
                contact: data.phone,
              },
            },
            (paymentResponse) => {
              let payload = {
                razorpayOrderId: order.orderId,
                razorpayPaymentId: paymentResponse.razorpay_payment_id,
                userId: order.userId,
              };
              app_api
                .post("/landing/validate-payment", payload)
                .then((res) => {
                  toast.success("Successfully payment marked");
                  const orderId = res.data.invoice.orderId;
                  router.push(`/thank-you?orderid=${orderId}`);
                })
                .catch((err) => {
                  console.log(err);
                });
            },
            (error) => {
              toast.error("Payment failed");
              console.log("errror", error);
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let payload={
        name: data.name,
        phone: data.phone,
        email: data.email,
        items
      }
      await app_api
        .post("/landing/non-partner",payload)
        .then((res) => {
          toast.success("Our team will contact you asap");
          // router.push(`/thank-you`);
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Guest Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your mobile number..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requirements or requests..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button type="submit" className="w-full" size="lg">
              Pay Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

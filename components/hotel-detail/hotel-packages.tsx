"use client";

import { Hotel, Package } from "@/lib/types";
import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/use-cart";
import toast from "react-hot-toast";
import { BookingCalendar } from "./booking-calendar";
import { useDateStore } from "@/lib/hooks/use-date";
import Link from "next/link";

interface HotelPackagesProps {
  packages: Package[];
  hotel: Hotel;
  outsideCalendarRef?: HTMLDivElement;
}

export function HotelPackages({ packages, hotel }: HotelPackagesProps) {
  const { addItem, selectedpackage } = useCart();
  const { date } = useDateStore();

  const handleAddToCart = (pkg: Package) => {
    if (!date) {
      toast.error("Please add a date first");
    } else {
      toast.success("Successfully added into the cart");
      addItem({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        quantity: 1,
        hotelName: hotel.name,
        hotelId: hotel.id,
        date: date,
        ispartner: hotel.ispartner,
      });
    }
  };

  // Filter packages based on selectedpackage
  const filteredPackages = selectedpackage === "all"
    ? packages
    : packages.filter((pkg) => pkg.name.toLowerCase() === selectedpackage);

  return (
    <section className="space-y-6">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <span>{hotel.address}</span>
        <Link
          href={hotel?.map_link || "https://maps.google.com/"}
          target="_blank"
          className="flex gap-2"
        >
          <MapPin className="w-6 h-6" />
          <span className="text-primary">Preview</span>
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Available Packages</h2>
        <p className="text-muted-foreground">
          Choose from our curated recovery packages
        </p>
      </div>

      {/* Calendar section with ref */}
      <div className="lg:hidden border p-4 transition-colors duration-300">
        <BookingCalendar selectedHotel={hotel} />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {filteredPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-2xl font-bold">
                  ₹{pkg.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /person
                  </span>
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleAddToCart(pkg)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

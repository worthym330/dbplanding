"use client";

import { Hotel, Package } from "@/lib/types";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

interface HotelPackagesProps {
  packages: Package[];
  hotel: Hotel;
}

export function HotelPackages({ packages, hotel }: HotelPackagesProps) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (pkg: Package) => {
    toast.success("Successfully added into the cart");
    addItem({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      quantity: 1,
      hotelName: hotel.name,
      hotelId: hotel.id,
      ispartner:hotel.ispartner
    });
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Available Packages</h2>
        <p className="text-muted-foreground">
          Choose from our curated recovery packages
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {packages.map((pkg, index) => (
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

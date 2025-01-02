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
import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/badge";

interface HotelPackagesProps {
  packages: Package[];
  hotel: Hotel;
  outsideCalendarRef?: HTMLDivElement;
}

export function HotelPackages({ packages, hotel }: HotelPackagesProps) {
  const { addItem, selectedpackage, setSelectedPackage } = useCart();
  const { date, setErr, err } = useDateStore();
  const [isExpanded, setIsExpanded] = useState(false);
  // const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  // const calendarRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (pkg: Package) => {
    // setSelectedPackage(pkg.name);
    if (!date) {
      toast.error("Please add a date first");
      setErr(true);
    } else {
      setErr(false);
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
        hotelAddress: hotel?.address,
      });
    }
  };

  // Filter packages based on selectedpackage
  // const filteredPackages =
  //   selectedpackage === "all"
  //     ? packages
  //     : packages.filter((pkg) => pkg.name.toLowerCase() === selectedpackage);

  // useEffect(() => {
  //   setFilteredPackages(selectedpackage === "all"
  //     ? packages
  //     : packages.filter((pkg) => pkg.name.toLowerCase() === selectedpackage));

  // }, [selectedpackage]);

  return (
    <section className="space-y-6">
      <div className="w-full break-words mb-5 lg:hidden">
        <p>
          {isExpanded
            ? hotel.description
            : `${hotel.description.substring(0, 100)}...`}
        </p>
        <Badge onClick={toggleExpand} variant="outline">
          {isExpanded ? "Read Less" : "Read More"}
        </Badge>
      </div>

      <div className="w-full break-words mb-5 hidden lg:block">
        {hotel.description}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <span>Address: {hotel.address}</span>
        <Link
          href={hotel?.map_link || "https://maps.google.com/"}
          target="_blank"
          className="flex gap-2"
        >
          <MapPin className="w-6 h-6" />
          <span className="text-primary">Direction</span>
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
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative">
              {/* {pkg.stock && pkg.stock <= 5 && ( */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                Only {pkg.stock || 5} packages left!
              </div>
              {/* )} */}

              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium">Includes</h3>
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

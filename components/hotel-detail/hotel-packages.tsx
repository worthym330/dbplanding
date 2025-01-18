"use client";

import { Hotel, Package } from "@/lib/types";
import { motion } from "framer-motion";
import { CalendarIcon, Check, MapPin, Minus, Plus, Trash2 } from "lucide-react";
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
import { Calendar } from "../ui/calendar";
import { Drawer } from "vaul";
import { format, isBefore, isSunday } from "date-fns";
import { useRouter } from "next/navigation";

interface HotelPackagesProps {
  packages: Package[];
  hotel: Hotel;
  outsideCalendarRef?: HTMLDivElement;
}

export function HotelPackages({ packages, hotel }: HotelPackagesProps) {
  const {
    addItem,
    items,
    getTotal,
    removeItem,
    updateQuantity,
    setSelectedPackage,
    updateDate,
  } = useCart();
  const { date, err, setDate, setErr, calendarRefErr, setCalendarRefErr } =
    useDateStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredPackages, setFilteredPackages] = useState<string>("");
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const calendarRef = useRef<HTMLDivElement>(null);
  const divref = useRef<HTMLDivElement>(null);

  const handleDateChange = (date: Date) => {
    setDate(date);
    setErr(false);
    items.forEach((item) => {
      updateDate(item.id, date, item.hotelId);
    });
  };

  const handleAddToCart = (pkg: Package) => {
    // setSelectedPackage(pkg.name);
    setCalendarRefErr(true);
    if (!date) {
      toast.error("Please add a date first");
      setFilteredPackages(pkg.name);
      setSelectedPackage(pkg.name);
      setErr(true);
      addItem({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        quantity: 1,
        hotelName: hotel.name,
        hotelId: hotel.id,
        date: null,
        ispartner: hotel.ispartner,
        hotelAddress: hotel?.address,
      });
    } else {
      setErr(false);
      setFilteredPackages(pkg.name);
      setSelectedPackage(pkg.name);
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

  useEffect(() => {
    if (calendarRefErr) {
      if (calendarRef.current) {
        calendarRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setCalendarRefErr(false);
      }
    }
  }, [calendarRefErr]);

  useEffect(() => {
    if (divref.current) {
      divref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isDateDisabled = (date: Date) => {
    if (isBefore(date, new Date())) return true;
    if (filteredPackages === "") return true;
    if (
      filteredPackages !== "" &&
      packages.find(
        (pkg) => pkg.name.toLowerCase() === filteredPackages.toLowerCase()
      )?.issunday
    ) {
      return !isSunday(date);
    }
    return false;
  };

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
      <div
        className="lg:hidden border p-4 transition-colors duration-300"
        ref={calendarRefErr ? calendarRef : undefined}
      >
        <div className="relative">
          <div className="lg:hidden">
            <span className="font-bold text-xl p-2">Select a date</span>
            {filteredPackages === "" ? (
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md">
                <span className="text-red-500 font-semibold">
                  Please select the package first
                </span>
              </div>
            ) : (
              <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Trigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${
                      err ? "border-2 border-red-500" : ""
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex flex-col rounded-t-[10px] bg-background lg:hidden">
                    <div className="flex-1 rounded-t-[10px] bg-background p-4">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
                      <div className="max-w-md mx-auto">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(date) => date && handleDateChange(date)}
                          className="rounded-md border"
                          disabled={isDateDisabled} // Use the isDateDisabled function to disable dates
                        />
                        <div className="mt-4 flex gap-4">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => setIsOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="flex-1"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            Confirm
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2" ref={divref}>
        {packages.map((pkg, index) => {
          const cartItem = items.find(
            (item) =>
              item.id === pkg.id &&
              item.name === pkg.name &&
              item.hotelId === hotel.id
          );

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative">
                {pkg.stock !== undefined && pkg.stock <= 10 && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                    {pkg.stock > 0
                      ? `Only ${pkg.stock} packages left!`
                      : "Sold Out"}
                  </div>
                )}

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
                  <p className="text-xs font-bold text-muted-foreground">
                    * Prices may vary based on availability
                  </p>
                </CardContent>

                <CardFooter>
                  {cartItem ? (
                    <div className="flex justify-between items-center gap-4 sm:gap-6">
                      <div className="flex justify-between items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              cartItem.id,
                              cartItem.quantity - 1,
                              cartItem.hotelId
                            )
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-sm sm:text-base">
                          {cartItem.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              cartItem.id,
                              cartItem.quantity + 1,
                              cartItem.hotelId
                            )
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          removeItem(cartItem.id, cartItem.hotelId);
                          setSelectedPackage("");
                          setFilteredPackages("");
                          setErr(false);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(pkg)}
                      disabled={pkg.stock === 0}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
              {index < packages.length - 1 && (
                <hr className="md:hidden my-4 border-t border-gray-300" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

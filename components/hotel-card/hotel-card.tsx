"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/link";
import { Hotel } from "@/lib/types";
import { HotelCardImage } from "./hotel-card-image";
import { HotelCardHeader } from "./hotel-card-header";

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotels/${hotel.id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="h-full cursor-pointer overflow-hidden">
          <HotelCardImage
            src={hotel.images[0]}
            alt={hotel.name}
            partner={hotel?.ispartner}
          />
          <HotelCardHeader
            name={hotel.name}
            distance={hotel.distance}
            rating={hotel.rating}
          />
          <CardContent>
            <div className="flex flex-wrap gap-2 truncate ellipse">
              <span className="overflow-x-auto overflowclass">
                {hotel.packages.map((pkg) => (
                  <Badge
                    key={pkg.id}
                    variant="outline"
                  >
                    {pkg.name}
                  </Badge>
                ))}
              </span>
            </div>
            <p className="mt-4 font-bold flex justify-between items-center">
              <span className="font-normal text-muted-foreground">
                Starting at
              </span>
              <span>₹{hotel.price}</span>
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}

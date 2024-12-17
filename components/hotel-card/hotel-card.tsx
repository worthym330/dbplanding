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
          <HotelCardImage src={hotel.image} alt={hotel.name} />
          <HotelCardHeader
            name={hotel.name}
            distance={hotel.distance}
            rating={hotel.rating}
          />
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity) => (
                <Badge key={amenity} variant="outline">
                  {amenity}
                </Badge>
              ))}
            </div>
            <p className="mt-4 text-2xl font-bold">
              ${hotel.price}
              <span className="text-sm font-normal text-muted-foreground">
                /night
              </span>
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hotel } from "@/lib/types";

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotels/${hotel.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="h-full cursor-pointer overflow-hidden">
          <div className="relative aspect-[16/9]">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="line-clamp-1">{hotel.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {hotel.distance} from event
                </CardDescription>
              </div>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                {hotel.rating}
              </Badge>
            </div>
          </CardHeader>
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
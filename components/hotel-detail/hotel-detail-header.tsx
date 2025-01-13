"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hotel } from "@/lib/types";

interface HotelDetailHeaderProps {
  hotel: Hotel;
}

export function HotelDetailHeader({ hotel }: HotelDetailHeaderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [...hotel.images];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={prevImage}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                {hotel.name}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-sm md:text-lg text-gray-200">
                <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                {hotel.distance} miles from marathon event
              </p>
            </div>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 bg-white/20 text-white text-xs md:text-sm"
            >
              <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
              {hotel.rating}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

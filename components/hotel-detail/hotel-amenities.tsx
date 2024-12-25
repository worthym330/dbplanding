"use client";

import { motion } from "framer-motion";
import { FaUtensils, FaSwimmer, FaSpa, FaParking, FaDumbbell, FaCocktail, FaBath, FaHotTub } from "react-icons/fa";
import { MdWifi } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { Coffee } from "lucide-react";

const amenityIcons: Record<string, React.ElementType> = {
  "Free WiFi": MdWifi,            
  Parking: FaParking,             
  Gym: FaDumbbell,                
  "Swimming Pool": FaSwimmer,     
  Spa: FaSpa,                     
  Restaurant: IoRestaurant,       
  Bar: FaCocktail,                
  "Steam and Sauna": FaHotTub,     
  "Brunch": FaUtensils,           
  "Day use room": FaBath          
};

interface HotelAmenitiesProps {
  amenities: string[];
}

export function HotelAmenities({ amenities }: HotelAmenitiesProps) {
  return (
    <section className="mt-12 space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Amenities</h2>
        <p className="text-muted-foreground">
          Everything you need for a comfortable stay
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {amenities.map((amenity, index) => {
          const Icon = amenityIcons[amenity] || Coffee;
          return (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 rounded-lg border p-4"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{amenity}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
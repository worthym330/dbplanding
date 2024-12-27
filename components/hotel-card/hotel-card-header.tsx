"use client";

import { MapPin, Star } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HotelCardHeaderProps {
  name: string;
  distance?: string;
  rating: number;
}

export function HotelCardHeader({ name, distance, rating }: HotelCardHeaderProps) {
  return (
    <CardHeader>
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {distance} from event
          </CardDescription>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-current" />
          {rating}
        </Badge>
      </div>
    </CardHeader>
  );
}
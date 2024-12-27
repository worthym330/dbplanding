"use client";

import { useRef } from "react";
import { BookingCalendar } from "./booking-calendar";
import { HotelAmenities } from "./hotel-amenities";
import { HotelDetailHeader } from "./hotel-detail-header";
import { HotelPackages } from "./hotel-packages";
import { StickyBookButton } from "./sticky-book-button";

export default function HotelDetailClient({ hotel }: { hotel: any }) {
  const calendarRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HotelDetailHeader hotel={hotel} />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <HotelPackages packages={hotel.packages} hotel={hotel} />
            <HotelAmenities amenities={hotel.amenities} />
          </div>
          <div className="lg:col-span-1 hidden lg:block" ref={calendarRef}>
            <BookingCalendar selectedHotel={hotel} />
          </div>
        </div>
      </div>
      <StickyBookButton />
    </>
  );
}

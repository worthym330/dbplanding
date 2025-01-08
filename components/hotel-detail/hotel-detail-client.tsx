"use client";

import { TriangleAlert } from "lucide-react";
import { BookingCalendar } from "./booking-calendar";
// import { HotelAmenities } from "./hotel-amenities";
import { HotelDetailHeader } from "./hotel-detail-header";
import { HotelPackages } from "./hotel-packages";
import { StickyBookButton } from "./sticky-book-button";

export default function HotelDetailClient({ hotel }: { hotel: any }) {
  return (
    <>
      <HotelDetailHeader hotel={hotel} />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <HotelPackages packages={hotel.packages} hotel={hotel} />
            {/* <HotelAmenities amenities={hotel.amenities} /> */}
          </div>
          <div className="lg:col-span-1 hidden lg:block">
            <BookingCalendar selectedHotel={hotel} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Hotel Rules</h2>

          <ul className="space-y-2 text-muted-foreground">
            {[
              "Please remember to bring your swimming costume, as our hotel offers a swimming pool and beach access for your enjoyment.",
              "No outside food or drinks are allowed within the hotel premises to ensure the quality and safety of our dining services.",
              "Children must be supervised at all times to ensure their safety and the comfort of other guests.",
              "Please respect other guests and hotel property to maintain a pleasant and welcoming environment for everyone.",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-justify"
              >
                <TriangleAlert className="h-4 w-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <StickyBookButton />
    </>
  );
}

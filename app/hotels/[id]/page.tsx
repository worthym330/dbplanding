import HotelDetailClient from "@/components/hotel-detail/hotel-detail-client";
import { hotels } from "@/lib/data";
import { useHotelsStore } from "@/lib/hooks/use-hotel";
import { notFound } from "next/navigation";
// import { useEffect } from "react";

// This is a server component
export async function generateStaticParams() {
  // const { hotels, fetchHotels } = useHotelsStore();

  // useEffect(() => {
  //   fetchHotels();
  // }, [fetchHotels]);

  return hotels.map((hotel) => ({
    id: hotel.id.toString(),
  }));
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  // const { hotels, fetchHotels } = useHotelsStore();

  // useEffect(() => {
  //   fetchHotels();
  // }, [fetchHotels]);
  const hotel = hotels.find((hotel) => hotel.id === params.id);

  if (!hotel) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Pass hotel data to the client-side component */}
      <HotelDetailClient hotel={hotel} />
    </main>
  );
}

import HotelDetailClient from "@/components/hotel-detail/hotel-detail-client";
import { hotels } from "@/lib/data";
import { notFound } from "next/navigation";

// This is a server component
export async function generateStaticParams() {
  return hotels.map((hotel) => ({
    id: hotel.id.toString(), // Ensure ID is a string
  }));
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
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

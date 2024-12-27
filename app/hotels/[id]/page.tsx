import HotelDetailClient from "@/components/hotel-detail/hotel-detail-client";
import { hotels } from "@/lib/data";
import { notFound } from "next/navigation";
export async function generateStaticParams() {

  return hotels.map((hotel) => ({
    id: hotel.id.toString(),
  }));
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotels.find((hotel) => hotel.id === params.id);

  if (!hotel) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      <HotelDetailClient hotel={hotel} />
    </main>
  );
}

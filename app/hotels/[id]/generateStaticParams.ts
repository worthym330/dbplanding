import { hotels } from "@/lib/data";

export async function generateStaticParams() {
  return hotels.map((hotel) => ({
    id: hotel.id,
  }));
}
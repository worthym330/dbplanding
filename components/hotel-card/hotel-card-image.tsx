"use client";

import Image from "next/image";

interface HotelCardImageProps {
  src: string;
  alt: string;
}

export function HotelCardImage({ src, alt }: HotelCardImageProps) {
  return (
    <div className="relative aspect-[16/9]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
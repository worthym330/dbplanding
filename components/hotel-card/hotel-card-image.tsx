"use client";

import Image from "next/image";
import { Ribbon } from "lucide-react";

interface HotelCardImageProps {
  src: string;
  alt: string;
  partner?: boolean;
}

export function HotelCardImage({ src, alt, partner }: HotelCardImageProps) {
  return (
    <div className="relative aspect-[16/9]">
      {/* Image */}
      <Image src={src} alt={alt} fill className="object-cover" />

      {/* Ribbon */}
      {partner && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 flex items-center gap-1 rounded-b-md shadow-md">
          <Ribbon className="h-5 w-5" />
          <span className="text-sm font-semibold">Partnered</span>
        </div>
      )}
    </div>
  );
}

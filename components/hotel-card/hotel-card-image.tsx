"use client";

import { BadgePercent, Star } from "lucide-react";
import Image from "next/image";
import { IoRibbon } from "react-icons/io5";

interface HotelCardImageProps {
  src: string;
  alt: string;
  partner?: boolean;
  ispremium?: boolean;
  qnty?: number;
}

export function HotelCardImage({
  src,
  alt,
  partner,
  ispremium,
  qnty,
}: HotelCardImageProps) {
  return (
    <div className="relative aspect-[16/9]">
      {/* Image */}
      <Image src={src} alt={alt} fill className="object-cover" />

      {/* Ribbon */}
      {partner && (
        <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 flex items-center gap-1 rounded-br-md shadow-md">
          <IoRibbon className="h-4 w-4" />
          <span className="text-xs font-semibold">Partnered</span>
        </div>
      )}

      {ispremium ? (
        <div className="absolute top-0 right-0 bg-[#4f63ac] text-white px-3 py-1 flex items-center gap-1 rounded-bl-md shadow-md">
          <Star className="h-4 w-4 drop-shadow-lg" />
          <span className="text-xs font-semibold">Premium</span>
        </div>
      ) : (
        <div className="absolute top-0 right-0 bg-[#E6E6FA] px-3 py-1 flex items-center gap-1 rounded-bl-md shadow-md text-[#4B0082]">
          <BadgePercent className="h-4 w-4" />
          <span className="text-xs font-semibold">Budget Friendly</span>
        </div>
      )}

      {/* {qnty && qnty <= 10 && (
        <div className="absolute bottom-0 left-0 bg-gray-100 text-red-500 px-3 py-1 flex items-center gap-1 rounded-tr-md shadow-md text-xs">
          Only {qnty} packages left!
        </div>
      )} */}
    </div>
  );
}

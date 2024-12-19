export interface Hotel {
  id: string;
  name: string;
  images: string[];
  distance: string;
  rating: number;
  amenities: string[];
  price: number;
  description: string;
  packages: Package[];
  ispartner?: boolean;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  hotelName?: string;
}

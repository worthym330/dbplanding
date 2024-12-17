export interface Hotel {
  id: string;
  name: string;
  image: string;
  distance: string;
  rating: number;
  amenities: string[];
  price: number;
  description: string;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}
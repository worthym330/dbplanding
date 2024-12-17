"use client";

import { create } from "zustand";
import app_api from "../utils/api";

interface Hotel {
  id: string;
  name: string;
  image: string;
  distance: string;
  rating: number;
  amenities: string[];
  price: number;
  description: string;
  packages: {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
  }[];
}

interface HotelsStore {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
  fetchHotels: () => Promise<void>;
  clearHotels: () => void;
}

export const useHotelsStore = create<HotelsStore>((set) => ({
  hotels: [],
  loading: false,
  error: null,

  fetchHotels: async () => {
    set({ loading: true, error: null });
    app_api
      .get("/hotels")
      .then((res) => {
        set({ hotels: res.data, loading: false });
      })
      .catch((err) => {
        set({ error: err.message, loading: false });
      });
  },

  clearHotels: () => set({ hotels: [] }),
}));

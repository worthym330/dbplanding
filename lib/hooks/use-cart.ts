"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  hotelName: string;
  hotelId: string;
  // date: string;
  // time: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, hotelId: string) => void;
  updateQuantity: (id: string, quantity: number, hotelId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.id === item.id && i.hotelId === item.hotelId
          );
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.hotelId === item.hotelId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id, hotelId) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.hotelId === hotelId)
          ),
        })),
      updateQuantity: (id, quantity, hotelId) =>
        set((state) => {
          if (quantity <= 0) {
            // If the quantity is 0 or less, remove the item
            return {
              items: state.items.filter(
                (item) => !(item.id === id && item.hotelId === hotelId)
              ),
            };
          }
          // Otherwise, update the quantity
          return {
            items: state.items.map((item) =>
              item.id === id && item.hotelId === hotelId
                ? { ...item, quantity }
                : item
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const items = get().items;
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

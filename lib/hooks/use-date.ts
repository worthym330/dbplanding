"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DateState {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  clearDate: () => void;
  getDate: () => Date | undefined;
}

export const useDateStore = create(
  persist<DateState>(
    (set, get) => ({
      date: undefined,
      setDate: (date) => set({ date }),
      clearDate: () => set({ date: undefined }),
      getDate: () => get().date,
    }),
    {
      name: "date-storage",
    }
  )
);

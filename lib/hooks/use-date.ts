"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DateState {
  date: Date | undefined;
  err:boolean;
  setErr: (err: boolean) => void;  
  setDate: (date: Date | undefined) => void;
  clearDate: () => void;
  getDate: () => Date | undefined;
  calendarRefErr: boolean;
  setCalendarRefErr: (err: boolean) => void;
}

export const useDateStore = create(
  persist<DateState>(
    (set, get) => ({
      date: undefined,
      err:false,
      setErr: (err) => set({ err }),
      setDate: (date) => set({ date }),
      clearDate: () => set({ date: undefined }),
      getDate: () => get().date,
      calendarRefErr: false,
      setCalendarRefErr: (err) => set({ calendarRefErr: err }),
    }),
    {
      name: "date-storage",
    }
  )
);

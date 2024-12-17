"use client";

import { create } from "zustand";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

interface CheckoutStore {
  form: CheckoutForm;
  updateForm: (data: Partial<CheckoutForm>) => void;
  resetForm: () => void;
}

const initialState: CheckoutForm = {
  name: "",
  email: "",
  phone: "",
  specialRequests: "",
};

export const useCheckout = create<CheckoutStore>((set) => ({
  form: initialState,
  updateForm: (data) =>
    set((state) => ({
      form: { ...state.form, ...data },
    })),
  resetForm: () => set({ form: initialState }),
}));
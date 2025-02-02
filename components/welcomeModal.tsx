"use client";

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import app_api from "@/lib/utils/api";
import toast from "react-hot-toast";

// Validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
});

type FormData = z.infer<typeof formSchema>;

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

 useEffect(() => {
    const storedVersion = localStorage.getItem("app_version");
    const currentVersion = process.env.NEXT_PUBLIC_BUILD_ID;

    if (storedVersion !== currentVersion) {
      localStorage.clear();
      sessionStorage.clear();

      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Update version in localStorage
      localStorage.setItem("app_version", currentVersion?.toString() ?? "");
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem("formSubmitted");
    console.log("formSubmitted", formSubmitted, typeof formSubmitted);
    if (!formSubmitted) {
      const timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 30000); // 15 seconds

      return () => {
        clearTimeout(timeoutId);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem("formSubmitted");
    if (!isOpen && !formSubmitted) {
      intervalRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 30000);
      return () => {
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
        }
      };
    }
  }, [isOpen]);

  const onSubmit = async (data: FormData) => {
    try {
      await app_api.post("/contact", data);
      toast.success("We will contact you soon!");
      setIsOpen(false);
      reset();
      sessionStorage.setItem("formSubmitted", "true");
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear interval after form submission
      }
    } catch (error) {
      console.error("Failed to submit data:", error);
      toast.error("Failed to submit data. Please try again.");
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to DayBreakPass!</DialogTitle>
            <DialogDescription>
              Need some help to book a hotel? Fill out this form and we will
              contact you ASAP.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input
                id="phone"
                placeholder="Enter your mobile number"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">Get Started</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

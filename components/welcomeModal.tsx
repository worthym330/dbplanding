"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 15000); // 15 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      await app_api.post("/contact", data);
      toast.success("We will contact you soon!");
      setIsOpen(false);
      reset()
    } catch (error) {
      console.error("Failed to submit data:", error);
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

"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Date</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
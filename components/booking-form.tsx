"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { zodBooking } from "@/zod/booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

type BookingFormValues = {
  bookingType: "city" | "outstation" | "airport";
  vehicleType: "mini" | "sedan" | "suv" | "any";
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  pickupTime: string;
  name: string;
  phoneNumber: string;
};

const defaultValues: BookingFormValues = {
  bookingType: "outstation",
  vehicleType: "sedan",
  pickupLocation: "",
  dropLocation: "",
  travelDate: "",
  pickupTime: "",
  name: "",
  phoneNumber: "",
};

export default function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(zodBooking),
    defaultValues,
  });

  const onSubmit = async (values: BookingFormValues) => {
    setSubmitStatus("idle");
    setSubmitMessage("");

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        phoneNumber: values.phoneNumber.replace(/\D/g, ""),
      }),
    });

    const responseJson = (await response.json()) as { message?: string };

    if (!response.ok) {
      setSubmitStatus("error");
      setSubmitMessage(responseJson.message ?? "Unable to submit booking now. Please try again.");
      return;
    }

    setSubmitStatus("success");
    setSubmitMessage("Booking request sent. Our team will call you shortly.");
    reset(defaultValues);
  };

  return (
    <section id="booking" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Book Your Cab</CardTitle>
          <CardDescription>
            Fill in your details for one-way, round trip, or airport transfer booking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-2">
              <Label htmlFor="bookingType">Booking Type</Label>
              <Select id="bookingType" {...register("bookingType")}>
                <option value="outstation">One Way</option>
                <option value="city">Round Trip</option>
                <option value="airport">Airport Transfer</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicleType">Vehicle Type</Label>
              <Select id="vehicleType" {...register("vehicleType")}>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="mini">Hatchback</option>
                <option value="any">Any</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickupLocation">Pickup Location</Label>
              <Input id="pickupLocation" placeholder="Area, landmark, address" {...register("pickupLocation")} />
              {errors.pickupLocation ? <p className="text-sm text-destructive">{errors.pickupLocation.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dropLocation">Drop Location</Label>
              <Input id="dropLocation" placeholder="Area, landmark, address" {...register("dropLocation")} />
              {errors.dropLocation ? <p className="text-sm text-destructive">{errors.dropLocation.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="travelDate">Travel Date</Label>
              <Input id="travelDate" type="date" {...register("travelDate")} />
              {errors.travelDate ? <p className="text-sm text-destructive">{errors.travelDate.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickupTime">Pickup Time</Label>
              <Input id="pickupTime" type="time" {...register("pickupTime")} />
              {errors.pickupTime ? <p className="text-sm text-destructive">{errors.pickupTime.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" {...register("name")} />
              {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" placeholder="10-digit mobile number" {...register("phoneNumber")} />
              {errors.phoneNumber ? <p className="text-sm text-destructive">{errors.phoneNumber.message}</p> : null}
            </div>

            <div className="md:col-span-2">
              <Button className="cursor-pointer hover:bg-background hover:text-green-500 rounded-md" variant={"outline"} size={"lg"} type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : "Send Booking Request"}
              </Button>
            </div>
          </form>

          {submitStatus !== "idle" ? (
            <p className={`mt-4 text-sm ${submitStatus === "success" ? "text-emerald-600" : "text-destructive"}`}>
              {submitMessage}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </section>
  );
}

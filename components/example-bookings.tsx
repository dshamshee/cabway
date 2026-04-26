"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";

import { sampleBookings } from "@/lib/cab-data";

export default function ExampleBookings() {
  return (
    <section id="bookings-showcase" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Customer Reviews</h2>
        <p className="mt-3 text-muted-foreground">
          Real booking snapshots with route details and customer feedback.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {sampleBookings.map((booking, index) => (
          <motion.article
            key={booking.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative h-44 w-full">
              <Image src={booking.image} alt={`${booking.vehicleType} booking sample`} fill className="object-cover" />
            </div>
            <div className="space-y-2 p-5 text-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{booking.id}</p>
                <p className="inline-flex items-center gap-1 text-amber-500">
                  {Array.from({ length: booking.rating }).map((_, idx) => (
                    <Star key={`${booking.id}-${idx}`} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </p>
              </div>
              <h3 className="text-base font-semibold">{booking.customerName}</h3>
              <p className="italic text-muted-foreground">&ldquo;{booking.review}&rdquo;</p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Route:</span> {booking.route}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Car Type:</span> {booking.vehicleType}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Distance:</span> {booking.distance}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Estimated Fare:</span> {booking.estimatedFare}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Travel Date:</span> {booking.travelDate}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Star } from "lucide-react";

import { sampleBookings } from "@/lib/cab-data";

export default function ExampleBookings() {
  return (
    <section id="bookings-showcase" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Customer Reviews</h2>
        <p className="mt-3 text-muted-foreground">
          Real booking snapshots with route details and customer feedback.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {sampleBookings.map((booking, index) => (
          <article
            key={booking.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden rounded-xl border border-border bg-card"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative h-44 w-full">
              <Image
                src={booking.image}
                alt={`${booking.vehicleType} cab booked by ${booking.customerName} on the ${booking.route} route`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
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
          </article>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Clock3, Mail, MapPinned, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Cab Way",
  description: "Reach Cab Way for booking support, route queries, and business cab services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact Cab Way</p>
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">We are available for your next ride</h1>
        <p className="mt-4 text-muted-foreground">
          Share your trip details by call, WhatsApp, or email. Our booking team responds quickly for city rides,
          outstation trips, and airport transfers.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Booking Support</h2>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-4 w-4" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">9430856366</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">cabwayservices@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4" />
              <div>
                <p className="font-medium">Working Hours</p>
                <p className="text-muted-foreground">24/7 booking assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Office Address</h2>
          <div className="mt-5 flex items-start gap-3 text-sm">
            <MapPinned className="mt-0.5 h-4 w-4" />
            <div>
              <p className="font-medium">Cab Way Services</p>
              <p className="text-muted-foreground">Patna, Bihar, India</p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
            For faster booking, share:
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Pickup and drop locations</li>
              <li>Travel date and pickup time</li>
              <li>Preferred vehicle type</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Car, CircleCheckBig, PhoneCall, ShieldCheck, Users } from "lucide-react";

import BookingForm from "@/components/booking-form";
import CabFleet from "@/components/cab-fleet";
import ExampleBookings from "@/components/example-bookings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Affordable Cab Booking in Bihar Routes",
  description:
    "Book one-way, round trip, and airport transfer rides with Cab Way. Fast booking support and transparent fares.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Cab Way",
  areaServed: ["Patna", "Siwan", "Gopalganj", "Muzaffarpur", "Darbhanga"],
  serviceType: ["One Way Taxi", "Round Trip Cab", "Airport Transfer"],
  telephone: "+91-9430856366",
  url: "https://www.cabway.in",
};

const tripTypes = [
  {
    title: "One Way Trips",
    description: "Pay only for the distance you travel, ideal for point-to-point routes.",
    icon: Car,
  },
  {
    title: "Round Trip Cabs",
    description: "Comfortable return plans for family, business, and weekend journeys.",
    icon: Users,
  },
  {
    title: "Airport Transfers",
    description: "On-time pickup and drop support with trained drivers and clean vehicles.",
    icon: ShieldCheck,
  },
];

const featuredRoutes = [
  { route: "Siwan to Patna", fare: "From Rs. 2,599" },
  { route: "Siwan to Gorakhpur", fare: "From Rs. 2,999" },
  { route: "Patna to Muzaffarpur", fare: "From Rs. 1,799" },
  { route: "Patna to Darbhanga", fare: "From Rs. 2,699" },
  { route: "Patna to Motihari", fare: "From Rs. 3,199" },
  { route: "Siwan to Delhi", fare: "From Rs. 13,999" },
];

export default function Home() {
  return (
    <>
      <section id="home" className="bg-linear-to-b from-amber-100/70 via-background to-background">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 md:px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Cab Booking Service
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            Easy one-way and outstation cab booking at affordable prices
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Cab Way helps you book reliable one-way, round trip, and airport rides with quick phone confirmation and
            trusted drivers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#booking">
              <Button className="cursor-pointer">Book Now</Button>
            </a>
            <a href="#routes">
              <Button variant="outline" className="cursor-pointer">
                View Popular Routes
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" />
              Lowest fare focus
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" />
              Verified drivers
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" />
              24x7 ride support
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Trip Types</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Choose the right service based on your destination and journey plan.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tripTypes.map((type) => (
            <Card key={type.title} className="border-border/70">
              <CardHeader className="space-y-3">
                <type.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{type.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="routes" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Popular Cab Routes</h2>
        <p className="mt-3 text-muted-foreground">Transparent starter fares for commonly booked trips.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredRoutes.map((item) => (
            <article
              key={item.route}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
            >
              <p className="font-medium">{item.route}</p>
              <p className="text-sm font-semibold text-emerald-700">{item.fare}</p>
            </article>
          ))}
        </div>
      </section>

      <CabFleet />

      <ExampleBookings />

      <BookingForm />

      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About Cab Way</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">Your trusted local travel partner</h2>
          <p className="mt-4 max-w-4xl text-muted-foreground">
            We focus on safe rides, punctual pickups, transparent fares, and quick booking support so your journey
            remains stress-free. Our team handles city transfers, outstation rides, and airport pickups every day.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-muted/20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
          <div>
            <h3 className="font-heading text-xl font-semibold">Cab Way Services</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Reliable taxi service for Bihar and nearby routes with fast booking support.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Contact</h4>
            <div className="mt-3 space-y-2 text-sm">
              <p className="inline-flex items-center gap-2">
                <PhoneCall className="size-4" />
                9430856366
              </p>
              <p>cabwayservices@gmail.com</p>
              <p>Office hours: 9AM - 7PM</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Why Customers Choose Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>On-time pickup and drop</li>
              <li>Clean cabs and trained drivers</li>
              <li>Transparent pricing model</li>
            </ul>
          </div>
        </div>
      </section>

      <Script id="cabway-local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  );
}


import type { Metadata } from "next";
import Script from "next/script";

import AboutCompany from "@/components/about-company";
import BookingForm from "@/components/booking-form";
import CabFleet from "@/components/cab-fleet";
import ContactCta from "@/components/contact-cta";
import ExampleBookings from "@/components/example-bookings";
import HomeServices from "@/components/home-services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cab Booking in City and Outstation",
  description:
    "Book trusted city and outstation cabs with Cab Way. Choose Mini, Sedan, or SUV with quick phone confirmation.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Cab Way",
  areaServed: ["Jaipur", "Delhi", "Gurgaon", "Noida"],
  serviceType: ["City Taxi", "Outstation Cab", "Airport Transfer"],
  telephone: "+91-0000000000",
  url: "https://www.cabway.in",
};

export default function Home() {
  return (
    <>
      <section id="home" className="mx-auto w-full max-w-6xl px-4 pt-26 py-16 md:px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Cab Booking Service
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Reliable cabs for city rides and outstation travel
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
          Cab Way helps customers travel safely and comfortably with multiple cab types including Mini, Sedan, and SUV.
          Book your ride in minutes and get a call-back confirmation from our team.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#booking">
            <Button>Book a Cab</Button>
          </a>
          <a href="#services">
            <Button variant="outline">Explore Services</Button>
          </a>
        </div>
      </section>

      <HomeServices />
      <AboutCompany />

      <CabFleet />
      <ExampleBookings />
      <BookingForm />
      <ContactCta />

      <Script id="cabway-local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  );
}

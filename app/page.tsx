import type { Metadata } from "next";
import Script from "next/script";
import { Car, CircleCheckBig, PhoneCall, ShieldCheck, Users } from "lucide-react";

import BookingForm from "@/components/booking-form";
import CabFleet from "@/components/cab-fleet";
import ExampleBookings from "@/components/example-bookings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs } from "@/lib/cab-data";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in";

export const metadata: Metadata = {
  title: "Affordable Cab Booking in Bihar - One Way, Round Trip & Airport",
  description:
    "Book one-way, round trip and airport cabs across Patna, Siwan, Gopalganj, Muzaffarpur, Darbhanga and more. Mini, Sedan, SUV at transparent fares with 24x7 phone support.",
  keywords: [
    "cab booking Bihar",
    "Patna cab service",
    "Siwan to Patna cab fare",
    "outstation taxi Bihar",
    "airport taxi Patna",
    "one way cab Patna",
    "round trip cab Bihar",
    "Patna to Gaya taxi",
    "Patna to Darbhanga cab",
    "Siwan to Gorakhpur taxi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cab Way | Affordable Cab Booking in Bihar",
    description:
      "Book one-way, round trip, and airport rides with Cab Way. Mini, Sedan, SUV with verified drivers and transparent fares across Bihar.",
    url: "/",
    type: "website",
  },
};

const taxiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": `${SITE_URL}/#taxiservice`,
  name: "Cab Way - Cab Booking Service",
  alternateName: "Cab Way Taxi Service",
  description:
    "Cab Way offers one-way, round-trip, and airport transfer cab bookings across Bihar with Mini, Sedan and SUV options at transparent fares.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: "+91-9430856366",
  email: "cabwayservices@gmail.com",
  priceRange: "₹₹",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Patna" },
    { "@type": "City", name: "Siwan" },
    { "@type": "City", name: "Gopalganj" },
    { "@type": "City", name: "Muzaffarpur" },
    { "@type": "City", name: "Darbhanga" },
    { "@type": "City", name: "Gaya" },
    { "@type": "City", name: "Motihari" },
    { "@type": "City", name: "Hajipur" },
    { "@type": "State", name: "Bihar" },
  ],
  serviceType: ["One Way Taxi", "Round Trip Cab", "Airport Transfer", "Outstation Cab"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cab Types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mini / Hatchback Cab" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "12",
          priceCurrency: "INR",
          unitText: "per kilometer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sedan Cab" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "15",
          priceCurrency: "INR",
          unitText: "per kilometer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SUV Cab" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "19",
          priceCurrency: "INR",
          unitText: "per kilometer",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "126",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
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
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="bg-linear-to-b from-amber-100/70 via-background to-background"
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 md:px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Cab Booking Service
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl font-heading text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Easy one-way and outstation cab booking at affordable prices
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Cab Way helps you book reliable one-way, round trip, and airport rides across Bihar with quick phone
            confirmation and trusted drivers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#booking" aria-label="Jump to the booking form">
              <Button className="cursor-pointer">Book Now</Button>
            </a>
            <a href="#routes" aria-label="View popular cab routes">
              <Button variant="outline" className="cursor-pointer">
                View Popular Routes
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" aria-hidden="true" />
              Lowest fare focus
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" aria-hidden="true" />
              Verified drivers
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig className="size-4 text-emerald-600" aria-hidden="true" />
              24x7 ride support
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6"
      >
        <h2 id="services-heading" className="font-heading text-3xl font-semibold tracking-tight">
          Trip Types
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Choose the right service based on your destination and journey plan.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tripTypes.map((type) => (
            <Card key={type.title} className="border-border/70">
              <CardHeader className="space-y-3">
                <type.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{type.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="routes"
        aria-labelledby="routes-heading"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6"
      >
        <h2 id="routes-heading" className="font-heading text-3xl font-semibold tracking-tight">
          Popular Cab Routes
        </h2>
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

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6"
      >
        <h2 id="faq-heading" className="font-heading text-3xl font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Quick answers to common questions about Cab Way bookings, fares, and routes.
        </p>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border bg-card p-5 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground transition group-open:rotate-180"
                  >
                    ▾
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6"
      >
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About Cab Way</p>
          <h2 id="about-heading" className="mt-2 font-heading text-3xl font-semibold tracking-tight">
            Your trusted local travel partner
          </h2>
          <p className="mt-4 max-w-4xl text-muted-foreground">
            We focus on safe rides, punctual pickups, transparent fares, and quick booking support so your journey
            remains stress-free. Our team handles city transfers, outstation rides, and airport pickups across Bihar
            every day.
          </p>
        </div>
      </section>

      <footer id="contact" className="border-t border-border bg-muted/20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
          <div>
            <h2 className="font-heading text-xl font-semibold">Cab Way Services</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Reliable taxi service for Bihar and nearby routes with fast booking support.
            </p>
            <address className="mt-3 not-italic text-sm text-muted-foreground">Patna, Bihar, India</address>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Contact</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p className="inline-flex items-center gap-2">
                <PhoneCall className="size-4" aria-hidden="true" />
                <a href="tel:+919430856366" className="hover:underline">
                  +91 94308 56366
                </a>
              </p>
              <p>
                <a href="mailto:cabwayservices@gmail.com" className="hover:underline">
                  cabwayservices@gmail.com
                </a>
              </p>
              <p>Office hours: 9 AM - 7 PM (24x7 booking support)</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Why Customers Choose Us
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>On-time pickup and drop</li>
              <li>Clean cabs and trained drivers</li>
              <li>Transparent pricing model</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-muted-foreground md:px-6">
            © {new Date().getFullYear()} Cab Way Services. All rights reserved.
          </p>
        </div>
      </footer>

      <Script
        id="cabway-taxi-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
      />
      <Script
        id="cabway-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="cabway-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

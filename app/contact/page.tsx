import type { Metadata } from "next";
import Script from "next/script";
import { Clock3, Mail, MapPinned, PhoneCall } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in";

export const metadata: Metadata = {
  title: "Contact Cab Way - Cab Booking Support in Bihar",
  description:
    "Reach Cab Way 24x7 for booking support, route fare quotes, outstation trips and airport transfers across Patna, Siwan, Muzaffarpur, Darbhanga and other Bihar cities.",
  keywords: [
    "Cab Way contact",
    "cab booking helpline Bihar",
    "Patna taxi support",
    "outstation cab booking phone",
    "airport taxi Patna contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cab Way",
    description: "Phone, email and office details for booking cabs with Cab Way Services in Bihar.",
    url: "/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/contact#localbusiness`,
  name: "Cab Way Services",
  image: `${SITE_URL}/opengraph-image`,
  url: `${SITE_URL}/contact`,
  telephone: "+91-9430856366",
  email: "cabwayservices@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Patna",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  areaServed: ["Patna", "Siwan", "Gopalganj", "Muzaffarpur", "Darbhanga", "Gaya", "Motihari", "Hajipur"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9430856366",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6"
    >
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Contact</li>
        </ol>
      </nav>

      <div className="max-w-3xl">
        <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact Cab Way
        </p>
        <h1 id="contact-heading" className="mt-2 font-heading text-4xl font-semibold tracking-tight">
          We are available for your next ride
        </h1>
        <p className="mt-4 text-muted-foreground">
          Share your trip details by call, WhatsApp, or email. Our booking team responds quickly for city rides,
          outstation trips, and airport transfers across Bihar.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Booking Support</h2>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-4 w-4" aria-hidden="true" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+919430856366" className="text-muted-foreground hover:underline">
                  +91 94308 56366
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4" aria-hidden="true" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:cabwayservices@gmail.com"
                  className="text-muted-foreground hover:underline"
                >
                  cabwayservices@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4" aria-hidden="true" />
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
            <MapPinned className="mt-0.5 h-4 w-4" aria-hidden="true" />
            <address className="not-italic">
              <p className="font-medium">Cab Way Services</p>
              <p className="text-muted-foreground">Patna, Bihar, India</p>
            </address>
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

      <Script
        id="cabway-contact-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Script
        id="cabway-contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </section>
  );
}

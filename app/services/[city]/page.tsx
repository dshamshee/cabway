import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cityNames, serviceCities, type ServiceCity } from "@/lib/cab-data";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

function isServiceCity(value: string): value is ServiceCity {
  return serviceCities.includes(value as ServiceCity);
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;

  if (!isServiceCity(city)) {
    return {
      title: "City Not Found",
      description: "Requested city route is not available.",
      robots: { index: false, follow: false },
    };
  }

  const cityName = cityNames[city];

  return {
    title: `Cab Service in ${cityName} - Book One Way, Round Trip & Airport Cab`,
    description: `Book reliable city rides, airport transfers and outstation cabs in ${cityName} with Cab Way. Mini, Sedan and SUV options at transparent fares with 24x7 phone confirmation.`,
    keywords: [
      `cab service ${cityName}`,
      `taxi booking ${cityName}`,
      `${cityName} airport taxi`,
      `${cityName} outstation cab`,
      `one way cab ${cityName}`,
      `round trip cab ${cityName}`,
      `${cityName} sedan booking`,
      `${cityName} SUV taxi`,
    ],
    alternates: {
      canonical: `/services/${city}`,
    },
    openGraph: {
      title: `Cab Service in ${cityName} | Cab Way`,
      description: `Book city, outstation and airport cabs in ${cityName} with Cab Way at transparent fares.`,
      url: `/services/${city}`,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return serviceCities.map((city) => ({ city }));
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;

  if (!isServiceCity(city)) {
    notFound();
  }

  const cityName = cityNames[city];
  const pageUrl = `${SITE_URL}/services/${city}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType: "Cab Booking",
    name: `Cab Service in ${cityName}`,
    description: `Cab Way offers city rides, airport transfers and outstation cabs in ${cityName} - choose Mini, Sedan or SUV with verified drivers and transparent fares.`,
    url: pageUrl,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Bihar" },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "12",
        description: "Per kilometer fare starting from Rs 12/km depending on vehicle type",
      },
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/${city}` },
      { "@type": "ListItem", position: 3, name: cityName, item: pageUrl },
    ],
  };

  return (
    <section
      aria-labelledby="city-heading"
      className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6"
    >
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>Services</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{cityName}</li>
        </ol>
      </nav>

      <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Cab Way City Service
      </p>
      <h1 id="city-heading" className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        Cab service in {cityName}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-muted-foreground">
        Cab Way provides city rides, airport transfers, and outstation travel in {cityName}. Choose Mini, Sedan, or
        SUV and get phone confirmation after booking.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Local City Rides</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fast pickups for offices, markets, stations, and local commutes in {cityName}.
          </p>
        </article>
        <article className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Airport Transfer</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Scheduled airport pickup and drop with flexible timing and support from {cityName}.
          </p>
        </article>
        <article className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Outstation Routes</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Common routes from {cityName} to nearby destinations with one-way and round trip options.
          </p>
        </article>
      </div>

      <div className="mt-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">
          Why book your {cityName} cab with Cab Way?
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <li>• Transparent per-kilometer fares with no hidden charges</li>
          <li>• Verified drivers familiar with {cityName} routes</li>
          <li>• Multiple cab options (Mini, Sedan, SUV) for any group size</li>
          <li>• 24x7 booking support over phone, WhatsApp and email</li>
        </ul>
      </div>

      <div className="mt-10">
        <Link href="/#booking" aria-label={`Book a cab in ${cityName}`}>
          <Button>Book Cab in {cityName}</Button>
        </Link>
      </div>

      <Script
        id={`cabway-service-${city}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`cabway-breadcrumb-${city}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </section>
  );
}

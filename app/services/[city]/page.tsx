import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cityNames, serviceCities, type ServiceCity } from "@/lib/cab-data";

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
    };
  }

  const cityName = cityNames[city];

  return {
    title: `Cab Service in ${cityName}`,
    description: `Book city rides, airport transfers, and outstation cabs in ${cityName} with Cab Way.`,
    alternates: {
      canonical: `/services/${city}`,
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

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Cab Way City Service</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">Cab service in {cityName}</h1>
      <p className="mt-4 max-w-3xl text-base text-muted-foreground">
        Cab Way provides city rides, airport transfers, and outstation travel in {cityName}. Choose Mini, Sedan, or
        SUV and get phone confirmation after booking.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Local City Rides</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fast pickups for offices, markets, stations, and local commutes in {cityName}.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Airport Transfer</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Scheduled airport pickup and drop with flexible timing and support.
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Outstation Routes</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Common routes from {cityName} to nearby destinations with one-way and round trip options.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/#booking">
          <Button>Book Cab in {cityName}</Button>
        </Link>
      </div>
    </section>
  );
}

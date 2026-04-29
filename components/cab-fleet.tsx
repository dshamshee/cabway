import Image from "next/image";

import { cabTypes } from "@/lib/cab-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CabFleet() {
  return (
    <section id="fleet" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Cab Types</h2>
        <p className="mt-2 text-muted-foreground">
          Pick the right vehicle for your route, group size, and comfort preference.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cabTypes.map((cab, index) => (
          <div
            key={cab.slug}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Card className="overflow-hidden border-border/70">
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={cab.image}
                  alt={`${cab.title} cab available for booking with Cab Way - ${cab.bestFor.toLowerCase()}`}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{cab.title}</CardTitle>
                <CardDescription>{cab.bestFor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Capacity:</span> {cab.passengers}
                </p>
                <p>
                  <span className="font-medium text-foreground">Luggage:</span> {cab.luggage}
                </p>
                <p>
                  <span className="font-medium text-foreground">Fuel:</span> {cab.fuelType}
                </p>
                <p>
                  <span className="font-medium text-foreground">Fare:</span> {cab.startingFare}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

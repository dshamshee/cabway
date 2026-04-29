import { ShieldCheck, Clock3, CarFront } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trusted Drivers",
    description: "Verified and experienced drivers for safe city and outstation travel.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description: "Booking support available throughout the day for urgent rides.",
  },
  {
    icon: CarFront,
    title: "Modern Fleet",
    description: "Clean Mini, Sedan, and SUV cabs with comfortable seating and luggage space.",
  },
];

export default function AboutCompany() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About Company</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">About Cab Way Services</h2>
        <p className="mt-4 max-w-4xl text-muted-foreground">
          Cab Way is a local travel partner focused on reliable rides across city routes, airport transfers, and
          outstation trips. We combine transparent pricing, responsive support, and multiple cab options to make every
          ride easy to book and comfortable to complete.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="animate-in fade-in slide-in-from-bottom-3 duration-500 rounded-xl border border-border bg-card p-6"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

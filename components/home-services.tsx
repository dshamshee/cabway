const services = [
  {
    title: "City Ride",
    description: "Daily in-city travel with punctual pickup and trained drivers.",
  },
  {
    title: "Outstation Cab",
    description: "One-way and round trips for nearby cities with comfortable rides.",
  },
  {
    title: "Airport Transfer",
    description: "Timely airport pickup and drop with booking confirmation support.",
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-heading text-3xl font-semibold tracking-tight">Our Services</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="animate-in fade-in slide-in-from-bottom-3 duration-500 rounded-xl border border-border p-6"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

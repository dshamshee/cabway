"use client";

import { motion } from "motion/react";

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
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
            className="rounded-xl border border-border p-6"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

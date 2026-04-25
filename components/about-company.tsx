"use client";

import { motion } from "motion/react";
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
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About Company</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">About Cab Way Services</h2>
        <p className="mt-4 max-w-4xl text-muted-foreground">
          Cab Way is a local travel partner focused on reliable rides across city routes, airport transfers, and
          outstation trips. We combine transparent pricing, responsive support, and multiple cab options to make every
          ride easy to book and comfortable to complete.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <item.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

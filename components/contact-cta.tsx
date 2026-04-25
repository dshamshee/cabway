"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-2xl border border-border bg-card p-8"
      >
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Need help with booking?</h2>
        <p className="mt-3 text-muted-foreground">
          Contact Cab Way support for urgent pickup, custom routes, and fare assistance.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <PhoneCall className="h-4 w-4" />
            <span>9430856366</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <Mail className="h-4 w-4" />
            <span>cabwayservices@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Patna, Bihar</span>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
            Open full contact page
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

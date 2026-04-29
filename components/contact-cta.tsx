import Link from "next/link";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-500 rounded-2xl border border-border bg-card p-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Need help with booking?</h2>
        <p className="mt-3 text-muted-foreground">
          Contact Cab Way support for urgent pickup, custom routes, and fare assistance.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span>9430856366</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>cabwayservices@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>Patna, Bihar</span>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
            Open full contact page
          </Link>
        </div>
      </div>
    </section>
  );
}

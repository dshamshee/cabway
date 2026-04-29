import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/navbar";

const playfairDisplayHeading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cab Way | City and Outstation Cab Booking in Bihar",
    template: "%s | Cab Way",
  },
  description:
    "Book reliable one-way, round trip, and airport cabs across Patna, Siwan, Gopalganj, Muzaffarpur, Darbhanga and more. Mini, Sedan and SUV at transparent fares with 24x7 booking support.",
  applicationName: "Cab Way Services",
  authors: [{ name: "Cab Way Services" }],
  generator: "Next.js",
  keywords: [
    "cab booking Bihar",
    "Patna cab service",
    "Siwan to Patna cab",
    "outstation cab Bihar",
    "airport taxi Patna",
    "one way taxi Bihar",
    "round trip cab Bihar",
    "Patna to Muzaffarpur cab",
    "Patna to Darbhanga cab",
    "Siwan to Gorakhpur cab",
    "Cab Way Services",
    "book cab online",
    "sedan cab booking",
    "SUV taxi Bihar",
  ],
  category: "travel",
  classification: "Taxi & Cab Booking Service",
  creator: "Cab Way Services",
  publisher: "Cab Way Services",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cab Way | City and Outstation Cab Booking in Bihar",
    description:
      "Book trusted one-way, round trip and airport cabs across Bihar with Cab Way. Mini, Sedan and SUV with quick phone confirmation.",
    type: "website",
    url: "/",
    siteName: "Cab Way",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab Way | Cab Booking in Bihar",
    description:
      "Book one-way, round trip and airport cabs across Bihar with reliable support from Cab Way.",
    creator: "@cabway",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    // Add Google/Bing verification keys here when available
    // google: "your-google-site-verification",
    // other: { "msvalidate.01": "your-bing-verification" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Cab Way Services",
  alternateName: "Cab Way",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Cab Way Services is a Bihar-based cab booking company offering city rides, outstation trips and airport transfers in Mini, Sedan and SUV vehicles.",
  email: "cabwayservices@gmail.com",
  telephone: "+91-9430856366",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9430856366",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Cab Way",
  description:
    "City, outstation and airport cab booking across Bihar - Patna, Siwan, Gopalganj, Muzaffarpur, Darbhanga and more.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10001 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <header>
          <NavigationBar />
        </header>
        <main id="main-content" className="relative z-0 flex-1">
          {children}
        </main>
        <Script
          id="cabway-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="cabway-website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}

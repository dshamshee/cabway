import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/navbar";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in"),
  title: {
    default: "Cab Way | City and Outstation Cab Booking",
    template: "%s | Cab Way",
  },
  description: "Cab Way offers city rides, outstation cabs, and airport transfers with Mini, Sedan, and SUV options.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cab Way",
    description:
      "Book trusted city and outstation cabs with Cab Way. Mini, Sedan, and SUV rides with quick support.",
    type: "website",
    url: "/",
    siteName: "Cab Way",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab Way",
    description: "Book city and outstation cabs with reliable support from Cab Way.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
        >
          <NavigationBar/>
          <main className="relative z-0 flex-1">
            {children}
          </main>
        </ThemeProvider>
        </body>
    </html>
  );
}

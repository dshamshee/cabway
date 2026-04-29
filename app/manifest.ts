import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cab Way Services",
    short_name: "Cab Way",
    description:
      "Book city, outstation and airport cab rides across Bihar with Cab Way - Mini, Sedan and SUV options at transparent fares.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fbbf24",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["travel", "business", "transportation"],
    lang: "en-IN",
  };
}

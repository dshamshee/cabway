import type { MetadataRoute } from "next";

import { serviceCities } from "@/lib/cab-data";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.cabway.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const basePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = serviceCities.map((city) => ({
    url: `${BASE_URL}/services/${city}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...basePages, ...cityPages];
}

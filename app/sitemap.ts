import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jlapps.example.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

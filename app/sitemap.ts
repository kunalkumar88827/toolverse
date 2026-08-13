import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://toolverse-zeta.vercel.app",
      priority: 1,
    },
  ];
}
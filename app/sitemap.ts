import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.senatorahmedwadada.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.senatorahmedwadada.com/media",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.senatorahmedwadada.com/honours",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

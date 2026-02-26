import { MetadataRoute } from 'next';
import { getAllProductions } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://companytheatre.ca';
  const productions = getAllProductions();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic production pages
  const productionPages: MetadataRoute.Sitemap = productions.map((production) => ({
    url: `${baseUrl}/show/${production.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productionPages];
}

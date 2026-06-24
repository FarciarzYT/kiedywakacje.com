import type { MetadataRoute } from 'next';
import { eventPages } from '@/data/event-pages';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: 'https://kiedywakacje.com',
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://kiedywakacje.com/about',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.4,
        },
    ];

    const eventRoutes: MetadataRoute.Sitemap = eventPages.map(ep => ({
        url: `https://kiedywakacje.com/${ep.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...eventRoutes];
}

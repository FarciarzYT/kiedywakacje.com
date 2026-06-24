import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedBackground from '@/components/HeroPage/AnimatedBackground';
import { ThemeToogle } from '@/components/theme-toogle';
import { HomeToggle } from '@/components/home-toggle';
import AlternateCountdown from '@/components/HeroPage/AlternateCountdown';
import AltFooter from '@/components/base/Footer';
import { eventPages } from '@/data/event-pages';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return eventPages.map(ep => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const ep = eventPages.find(e => e.slug === slug);
    if (!ep) return {};

    const url = `https://kiedywakacje.com/${slug}`;
    return {
        title: ep.metaTitle,
        description: ep.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: ep.metaTitle,
            description: ep.metaDescription,
            url,
            siteName: 'Kiedy Wakacje',
            images: [{ url: '/og-image.png', width: 1200, height: 630, alt: ep.metaTitle }],
            locale: 'pl_PL',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: ep.metaTitle,
            description: ep.metaDescription,
            images: ['/og-image.png'],
        },
    };
}

export default async function EventPage({ params }: Props) {
    const { slug } = await params;
    const ep = eventPages.find(e => e.slug === slug);
    if (!ep) notFound();

    const otherEvents = eventPages.filter(e => e.slug !== slug);

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Strona główna',
                item: 'https://kiedywakacje.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: ep.breadcrumbLabel,
                item: `https://kiedywakacje.com/${slug}`,
            },
        ],
    };

    const paragraphs = ep.content.split('\n\n');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <AnimatedBackground />
            <ThemeToogle />
            <HomeToggle />
            <main className="flex flex-col items-center justify-center px-4 pt-48 text-black dark:text-white min-h-screen scroll-auto">
                <div className="z-10 text-outline text-center font-lato select-none pt-6 max-w-2xl w-full">
                    <h1 className="text-5xl sm:text-6xl font-semibold mb-6">{ep.h1}</h1>
                    <p className="text-2xl font-medium text-black dark:text-gray-100 text-outline">
                        Do {ep.label} pozostało
                    </p>
                    <AlternateCountdown toDate={ep.date} />
                </div>

                <article className="z-10 mt-10 max-w-2xl w-full px-4 text-left space-y-4">
                    {paragraphs.map((para, i) => (
                        <p key={i} className="font-lato text-base leading-relaxed text-black dark:text-gray-200">
                            {para}
                        </p>
                    ))}
                </article>

                <nav aria-label="Odliczaj też do" className="z-10 mt-14 mb-24 text-center max-w-3xl w-full px-4">
                    <h2 className="font-lato font-semibold text-2xl mb-5 text-black dark:text-white">
                        Odliczaj też do:
                    </h2>
                    <ul className="flex flex-wrap justify-center gap-3">
                        {otherEvents.map(e => (
                            <li key={e.slug}>
                                <Link
                                    href={`/${e.slug}`}
                                    className="px-4 py-2 rounded-2xl border-2 border-yellow-300 dark:border-blue-600
                                               text-black dark:text-white font-lato font-semibold text-sm
                                               hover:bg-yellow-300 dark:hover:bg-blue-600 transition-colors duration-150"
                                >
                                    {e.breadcrumbLabel}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </main>
            <AltFooter />
        </>
    );
}

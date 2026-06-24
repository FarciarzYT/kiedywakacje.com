import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaCalendarDays } from 'react-icons/fa6';
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

function toGCalDate(date: Date) {
    return date.toISOString().replace(/-|:|\.\d{3}/g, '');
}

export default async function EventPage({ params }: Props) {
    const { slug } = await params;
    const ep = eventPages.find(e => e.slug === slug);
    if (!ep) notFound();

    const otherEvents = eventPages.filter(e => e.slug !== slug);
    const { date } = ep;

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ep.breadcrumbLabel)}&dates=${toGCalDate(date)}/${toGCalDate(date)}&details=${encodeURIComponent(ep.label)}`;

    const paragraphs = ep.content.split('\n\n');

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://kiedywakacje.com' },
            { '@type': 'ListItem', position: 2, name: ep.breadcrumbLabel, item: `https://kiedywakacje.com/${slug}` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <AnimatedBackground />
            <ThemeToogle />
            <HomeToggle />

            {/* ── Hero — identyczny układ jak home page ── */}
            <main className="flex flex-col items-center justify-center px-4 pt-48 text-black dark:text-white min-h-screen scroll-auto">

                {/* Nagłówek */}
                <div className="z-10 text-outline text-center font-lato select-none pt-6">
                    <h1 className="text-5xl sm:text-6xl font-semibold mb-4">
                        {ep.h1}
                    </h1>
                    <p className="text-xl sm:text-2xl text-black dark:text-gray-100 mb-2 text-outline z-10 max-w-md mx-auto">
                        Nie możesz się doczekać? Sprawdź!
                    </p>
                </div>

                {/* Licznik — ten sam styl co HeroButtons */}
                <div className="border-none rounded-lg px-2 py-1 text-center z-10 transition-all font-lato">
                    <p className="text-2xl font-medium text-black dark:text-gray-100 text-outline select-none">
                        Do {ep.label} pozostało
                    </p>
                    <span className="text-lg font-semibold dark:text-white text-outline">
                        <AlternateCountdown toDate={date} />
                    </span>
                    <Link
                        href={gcalUrl}
                        target="_blank"
                        className="flex items-center mt-2 gap-1.5 mx-auto font-lato font-medium text-2xl dark:text-gray-100 text-outline text-black w-fit transition-colors duration-150 group/link"
                    >
                        <span>
                            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                        </span>
                        <FaCalendarDays className="text-medium transition-all duration-150" />
                    </Link>
                </div>

                {/* Spacer jak na home (min-h-[45vh] dla dropdownu — tu jest dla zachowania proporcji) */}
                <div className="min-h-[15vh]" />
            </main>

            {/* ── Treść — karta jak FAQ ── */}
            <section className="px-6 mb-12 text-black dark:text-white">
                <div className="mx-auto max-w-2xl">
                    <div className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 backdrop-blur-2xl border border-yellow-200/70 dark:border-blue-900/60 px-8 sm:px-14 py-10">
                        <span className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400 dark:border-blue-500 rounded-tl-3xl" />
                        <span className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400 dark:border-blue-500 rounded-br-3xl" />
                        <article className="space-y-4">
                            {paragraphs.map((para, i) => (
                                <p key={i} className="font-lato text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                                    {para}
                                </p>
                            ))}
                        </article>
                    </div>
                </div>
            </section>

            {/* ── Nawigacja — buttony jak home page ── */}
            <section className="px-6 mb-24 text-center text-black dark:text-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="font-lato font-semibold text-3xl sm:text-4xl mb-3 select-none">
                        Odliczaj też do…
                    </h2>
                    <p className="font-lato text-sm text-black/60 dark:text-white/60 mb-6 select-none">
                        Dedykowane strony z licznikiem dla każdego wydarzenia
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4">
                        {otherEvents.map(e => (
                            <li key={e.slug}>
                                <Link
                                    href={`/${e.slug}`}
                                    className="flex items-center justify-center gap-2 px-6 py-3 font-lato font-semibold rounded-3xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black
                                               border-yellow-300 text-black focus:ring-yellow-300
                                               dark:border-blue-600 dark:text-white dark:focus:ring-blue-600
                                               bg-gray-100 dark:bg-gray-800
                                               hover:bg-yellow-300 dark:hover:bg-blue-600
                                               hover:text-black dark:hover:text-white
                                               transition-colors duration-150 text-sm"
                                >
                                    {e.breadcrumbLabel}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <AltFooter />
        </>
    );
}

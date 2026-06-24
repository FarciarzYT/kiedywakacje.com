import Link from 'next/link';
import { eventPages } from '@/data/event-pages';

export default function EventLinks() {
    return (
        <section className="px-6 my-16 text-center max-w-3xl mx-auto">
            <h2 className="font-lato font-semibold text-3xl sm:text-4xl text-black dark:text-white mb-3 select-none">
                Odliczaj do…
            </h2>
            <p className="font-lato text-sm text-black/60 dark:text-white/60 mb-6 select-none">
                Dedykowane strony z odliczaniem do każdego wydarzenia
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
                {eventPages.map(ep => (
                    <li key={ep.slug}>
                        <Link
                            href={`/${ep.slug}`}
                            className="inline-block px-5 py-2.5 rounded-2xl border-2
                                       border-yellow-300 dark:border-blue-600
                                       text-black dark:text-white font-lato font-semibold text-sm
                                       hover:bg-yellow-300 dark:hover:bg-blue-600
                                       transition-colors duration-150"
                        >
                            {ep.breadcrumbLabel}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

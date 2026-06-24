import Link from 'next/link';
import { eventPages } from '@/data/event-pages';

export default function EventLinks() {
    return (
        <section className="px-6 mb-12 text-center text-black dark:text-white">
            <div className="mx-auto max-w-3xl">
                <h2 className="font-lato font-semibold text-3xl sm:text-4xl mb-3 select-none">
                    Odliczaj do…
                </h2>
                <p className="font-lato text-sm text-black/60 dark:text-white/60 mb-6 select-none">
                    Dedykowane strony z licznikiem dla każdego wydarzenia
                </p>
                <ul className="flex flex-wrap justify-center gap-4">
                    {eventPages.map(ep => (
                        <li key={ep.slug}>
                            <Link
                                href={`/${ep.slug}`}
                                className="flex items-center justify-center gap-2 px-6 py-3 font-lato font-semibold rounded-3xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black
                                           border-yellow-300 text-black focus:ring-yellow-300
                                           dark:border-blue-600 dark:text-white dark:focus:ring-blue-600
                                           bg-gray-100 dark:bg-gray-800
                                           hover:bg-yellow-300 dark:hover:bg-blue-600
                                           hover:text-black dark:hover:text-white
                                           transition-colors duration-150 text-sm"
                            >
                                {ep.breadcrumbLabel}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

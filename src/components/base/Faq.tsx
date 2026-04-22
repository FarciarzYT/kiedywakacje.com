"use client"

import { useState } from "react"

interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "Co to jest kiedywakacje.com?",
        answer:
            "kiedywakacje.com to serwis z precyzyjnym odliczaniem do najważniejszych dni wolnych od szkoły — wakacji letnich, ferii zimowych, świąt oraz długich weekendów. Znajdziesz tu dokładną liczbę dni, godzin i minut do upragnionego odpoczynku.",
    },
    {
        id: 2,
        question: "Do jakich dat można odliczać?",
        answer:
            "Odliczamy do wakacji letnich, ferii zimowych, Bożego Narodzenia, Wielkanocy, sylwestra, a także do egzaminów ósmoklasisty i matur. Lista wydarzeń jest aktualizowana co roku zgodnie z oficjalnym kalendarzem roku szkolnego MEN.",
    },
    {
        id: 3,
        question: "Skąd pochodzą daty roku szkolnego?",
        answer:
            "Terminy wakacji i dni wolnych pobieramy z oficjalnego kalendarza roku szkolnego publikowanego przez Ministerstwo Edukacji Narodowej. Daty są aktualizowane niezwłocznie po ogłoszeniu nowego kalendarza.",
    },
    {
        id: 4,
        question: "Czy mogę dodać stronę do ekranu głównego telefonu?",
        answer:
            'Tak. W przeglądarce mobilnej (Chrome lub Safari) wybierz opcję „Dodaj do ekranu głównego". Dzięki temu kiedywakacje.com będzie dostępne jak zwykła aplikacja — jednym tapnięciem.',
    },
    {
        id: 5,
        question: "Jak zgłosić błąd lub zaproponować nową funkcję?",
        answer:
            "Napisz do nas przez formularz kontaktowy dostępny w stopce strony. Czytamy każdą wiadomość i staramy się odpowiadać najszybciej jak to możliwe.",
    },
]

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(null)
    const toggle = (id: number) => setOpenId(openId === id ? null : id)

    return (
        <section className="px-6 text-black dark:text-white">
            <div className="mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h3 className="font-lato font-semibold text-4xl sm:text-5xl tracking-tight text-black dark:text-white">
                        FAQ
                    </h3>
                    <p className="font-lato mt-3 text-sm text-black dark:text-white">
                        Najczęściej zadawane pytania o kiedywakacje.com
                    </p>
                </div>

                {/* Accordion */}
                <div
                    className="
                        relative rounded-3xl overflow-hidden
                        bg-gray-100 dark:bg-gray-800
                        backdrop-blur-2xl
                        border border-yellow-200/70 dark:border-blue-900/60
                        px-2 py-2
                    "
                >
                    {/* corner accents */}
                    <span className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400 dark:border-blue-500 rounded-tl-3xl" />
                    <span className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400 dark:border-blue-500 rounded-br-3xl" />

                    <div className="flex flex-col gap-1">
                        {faqs.map((faq, i) => {
                            const isOpen = openId === faq.id
                            return (
                                <div
                                    key={faq.id}
                                    className={`rounded-xl border transition-colors duration-200 ${
                                        isOpen
                                            ? "border-yellow-300/60 dark:border-blue-800/60 bg-yellow-50/60 dark:bg-blue-950/30"
                                            : "border-transparent hover:border-yellow-200/50 dark:hover:border-blue-900/40 hover:bg-yellow-50/30 dark:hover:bg-blue-950/10"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-start gap-4 px-5 py-4 text-left"
                                    >
                                        <span className={`mt-0.5 min-w-5 text-xs font-semibold tabular-nums font-mono transition-colors duration-200 ${
                                            isOpen
                                                ? "text-yellow-500 dark:text-blue-400"
                                                : "text-zinc-300 dark:text-zinc-600"
                                        }`}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="flex-1 text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                                            {faq.question}
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`mt-0.5 shrink-0 transition-all duration-300 ${
                                                isOpen
                                                    ? "rotate-180 text-yellow-500 dark:text-blue-400"
                                                    : "rotate-0 text-zinc-300 dark:text-zinc-600"
                                            }`}
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        {/* accent line left */}
                                        <div className="mx-5 mb-4 flex gap-4">
                                            <div className="w-px shrink-0 self-stretch bg-yellow-400 dark:bg-blue-500 rounded-full ml-[18px]" />
                                            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 pb-1">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
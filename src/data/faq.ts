export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        id: 1,
        question: 'Co to jest kiedywakacje.com?',
        answer: 'kiedywakacje.com to serwis z precyzyjnym odliczaniem do najważniejszych dni wolnych od szkoły — wakacji letnich, ferii zimowych, świąt oraz długich weekendów. Znajdziesz tu dokładną liczbę dni, godzin i minut do upragnionego odpoczynku.',
    },
    {
        id: 2,
        question: 'Do jakich dat można odliczać?',
        answer: 'Odliczamy do wakacji letnich, ferii zimowych, Bożego Narodzenia, Wielkanocy, sylwestra, a także do egzaminów ósmoklasisty i matur. Lista wydarzeń jest aktualizowana co roku zgodnie z oficjalnym kalendarzem roku szkolnego MEN.',
    },
    {
        id: 3,
        question: 'Skąd pochodzą daty roku szkolnego?',
        answer: 'Terminy wakacji i dni wolnych pobieramy z oficjalnego kalendarza roku szkolnego publikowanego przez Ministerstwo Edukacji Narodowej. Daty są aktualizowane niezwłocznie po ogłoszeniu nowego kalendarza.',
    },
    {
        id: 4,
        question: 'Czy mogę dodać stronę do ekranu głównego telefonu?',
        answer: 'Tak. W przeglądarce mobilnej (Chrome lub Safari) wybierz opcję „Dodaj do ekranu głównego". Dzięki temu kiedywakacje.com będzie dostępne jak zwykła aplikacja — jednym tapnięciem.',
    },
    {
        id: 5,
        question: 'Jak zgłosić błąd lub zaproponować nową funkcję?',
        answer: 'Napisz do nas przez mail dostępny w stopce strony. Czytamy każdą wiadomość i staramy się odpowiadać najszybciej jak to możliwe.',
    },
];

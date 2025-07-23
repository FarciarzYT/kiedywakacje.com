
export function getNextWeekend(): Date {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (niedziela) - 6 (sobota)
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    nextSaturday.setHours(0, 0, 0, 0); // Ustawiamy na początek dnia
    // Jeśli dzisiaj jest sobota, zwróć dzisiejszą datę
    if (daysUntilSaturday === 0) return today;
    return nextSaturday;
}


export function getNextSylwester(): Date {
    const today = new Date();
    const currentYear = today.getFullYear();
    return new Date(currentYear, 11, 31);
}


export function getNextWinterBreak(): Date {
    const today = new Date();
    let year = today.getFullYear();
    let thirdMonday = new Date(year, 0, 1);

    // Znajdź pierwszy poniedziałek stycznia
    while (thirdMonday.getDay() !== 1) {
        thirdMonday.setDate(thirdMonday.getDate() + 1);
    }
    // Dodaj 14 dni, aby uzyskać trzeci poniedziałek
    thirdMonday.setDate(thirdMonday.getDate() + 14);

    if (today > thirdMonday) {
        // Jeśli ferie w tym roku już były, oblicz dla następnego
        year++;
        thirdMonday = new Date(year, 0, 1);
        while (thirdMonday.getDay() !== 1) {
            thirdMonday.setDate(thirdMonday.getDate() + 1);
        }
        thirdMonday.setDate(thirdMonday.getDate() + 14);
    }
    return thirdMonday;
}


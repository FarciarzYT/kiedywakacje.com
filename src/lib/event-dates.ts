
export function getNextWeekend(): Date {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = dayOfWeek === 0 ? 6 : (6 - dayOfWeek);
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    nextSaturday.setHours(0, 0, 0, 0);
    return nextSaturday;
}

export function getNextSylwester(): Date {
    const today = new Date();
    const currentYear = today.getFullYear();
    return new Date(currentYear, 11, 31);
}

export function getNextChristmas(): Date {
    const today = new Date();
    const year = today.getFullYear();
    const thisYear = new Date(year, 11, 24); // 24 XII
    return today < thisYear ? thisYear : new Date(year + 1, 11, 24);
}

// Algorytm Anonymous Gregorian
function calculateEaster(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

export function getNextEaster(): Date {
    const today = new Date();
    const thisYearEaster = calculateEaster(today.getFullYear());
    return today < thisYearEaster
        ? thisYearEaster
        : calculateEaster(today.getFullYear() + 1);
}

export function getNextMajowka(): Date {
    const today = new Date();
    const year = today.getFullYear();
    const thisYear = new Date(year, 4, 1); // 1 V
    return today < thisYear ? thisYear : new Date(year + 1, 4, 1);
}

// Daty z harmonogramów CKE/MEN — aktualizować po ogłoszeniu nowego kalendarza
const maturaDates: Date[] = [
    new Date('2026-05-04T00:00:00'),
    new Date('2027-05-04T00:00:00'), // orientacyjny termin
];

const egzaminOsmoklasistyDates: Date[] = [
    new Date('2026-04-14T00:00:00'),
    new Date('2027-04-13T00:00:00'), // orientacyjny termin
];

// Wybrane polskie długie weekendy — aktualizować co roku
const dlugiWeekendDates: Date[] = [
    new Date('2026-11-01T00:00:00'), // Wszystkich Świętych (nd)
    new Date('2026-12-24T00:00:00'), // Wigilia/Boże Narodzenie (czw-sob)
    new Date('2027-01-01T00:00:00'), // Nowy Rok (pt)
    new Date('2027-03-27T00:00:00'), // Wielkanoc (sob-pn)
    new Date('2027-05-01T00:00:00'), // Majówka (sob-pn)
];

function pickNext(dates: Date[]): Date {
    const today = new Date();
    const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
    return sorted.find(d => d > today) ?? sorted[sorted.length - 1];
}

export function getNextMatura(): Date {
    return pickNext(maturaDates);
}

export function getNextEgzaminOsmoklasisty(): Date {
    return pickNext(egzaminOsmoklasistyDates);
}

export function getNextDlugiWeekend(): Date {
    return pickNext(dlugiWeekendDates);
}

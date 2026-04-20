export type WinterBreakGroup = {
    id: string;
    label: string;
    date: Date;
    title: string;
    provinces: string;
};

export const winterBreakGroups: WinterBreakGroup[] = [
    {
        id: 'winter-group-1',
        label: 'ferii',
        date: new Date('2027-01-18T00:00:00'),
        title: '18.01 - 31.01.2027',
        provinces: 'podkarpackie, podlaskie, dolnośląskie, łódzkie, śląskie, opolskie'
    },
    {
        id: 'winter-group-2',
        label: 'ferii',
        date: new Date('2027-02-01T00:00:00'),
        title: '01.02 - 14.02.2027',
        provinces: 'mazowieckie, pomorskie, świętokrzyskie, lubelskie'
    },
    {
        id: 'winter-group-3',
        label: 'ferii',
        date: new Date('2027-02-15T00:00:00'),
        title: '15.02 - 28.02.2027',
        provinces: 'lubuskie, kujawsko-pomorskie, warmińsko-mazurskie, wielkopolskie, zachodniopomorskie, małopolskie'
    }
];
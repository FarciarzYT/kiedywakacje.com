import {Laugh, PartyPopper, TreePalm} from "lucide-react";
import {getNextSylwester, getNextWeekend} from "@/lib/event-dates";
import {IconType} from "react-icons";

export type eventGroup = {
    id: string;
    label: string;
    endLabel: string;
    date: Date;
    endDate?: Date;
    Icon: IconType;
    title: string;
};

export const events:eventGroup[] = [
    {
        id: 'summer',
        label: 'wakacji',
        endLabel: 'końca wakacji',
        date: new Date('2027-06-26T00:00:00'),
        endDate: new Date('2027-08-31T00:00:00'),
        Icon: TreePalm,
        title: 'Wakacje Letnie',
    },
    {
        id: 'newYear',
        label: 'sylwestra',
        endLabel: 'końca sylwestra',
        date: getNextSylwester(),
        Icon: PartyPopper,
        title: 'Sylwester',
    },
    {
        id: 'weekend',
        label: 'weekendu',
        endLabel: 'końca weekendu',
        date: getNextWeekend(),
        Icon: Laugh,
        title: 'Najbliższy Weekend',
    },
];

import {Laugh, PartyPopper, TreePalm} from "lucide-react";
import {getNextSylwester, getNextWeekend} from "@/lib/event-dates";

export const events = [
    { id: 'summer', label: 'wakacji', date: new Date('2025-08-28T00:00:00'), Icon: TreePalm, title: 'Wakacje Letnie' },
    { id: 'newYear', label: 'sylwestra', date: getNextSylwester(), Icon: PartyPopper, title: 'Sylwester' },
    { id: 'weekend', label: 'weekendu', date: getNextWeekend(), Icon: Laugh, title: 'Najbliższy Weekend' },
];
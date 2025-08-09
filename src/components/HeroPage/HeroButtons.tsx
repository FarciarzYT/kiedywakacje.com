"use client"
import {useState} from "react";
import {ChevronDown, ChevronUp,Snowflake} from "lucide-react";
import AlternateCountdown from "@/components/HeroPage/AlternateCountdown";
import { motion, AnimatePresence } from "framer-motion";
import {winterBreakGroups, events, WinterBreakGroup} from '@/data'


export default function HeroButtons() {
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [isWinterMenuOpen, setWinterMenuOpen] = useState(false);

    const handleWinterButtonClick = () => {
        if (!isWinterMenuOpen) {
            setSelectedEvent({...winterBreakGroups[0], Icon: Snowflake});
        }
        setWinterMenuOpen(!isWinterMenuOpen);
    };

    const handleWinterGroupSelect = (group: WinterBreakGroup ) => {
        setSelectedEvent({
            ...group,
            Icon: Snowflake,
        });
    };
    const isWinterSelected = selectedEvent.id.startsWith('winter');

    return (
        <>
            <div className="border-none rounded-lg px-8 py-6 text-center z-10 transition-all font-lato">
                <p className="text-2xl font-medium text-black dark:text-gray-100 mb-2 text-outline select-none">
                    Do {selectedEvent.label} pozostało
                </p>
                <span className="text-lg font-semibold dark:text-white mb-2 text-outline ">
                    <AlternateCountdown toDate={selectedEvent.date}/>
                </span>
            </div>
            <div className="mt-8 z-10 flex flex-col justify-center items-center gap-4 transition-all duration-100">
                <div className="flex flex-col justify-center items-center gap-4 lg:flex-row ">
                    {/*Summer Vibe Buttons*/}
                    {events.map((event) => (
                        <motion.button
                            key={event.id}
                            onClick={() => {
                                setSelectedEvent(event);
                                setWinterMenuOpen(false);
                            }}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`flex items-center text-clip justify-center gap-2 px-6 py-3 font-lato font-semibold rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black min-w-54 border-yellow-300 text-black hover:bg-yellow-300 hover:text-black focus:ring-yellow-300 dark:border-blue-600 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-600 ${selectedEvent.id === event.id ? 'bg-yellow-300 text-black dark:bg-blue-600 dark:text-white' : 'bg-white dark:bg-black'}`}>
                            <event.Icon size={20}/>
                            <span>{event.title}</span>
                        </motion.button>
                    ))}

                    {/*Winter Button*/}
                    <motion.button
                        onClick={handleWinterButtonClick}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className={`flex items-center justify-center gap-2 px-6 py-3 font-lato font-semibold rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black min-w-54 border-yellow-300 text-black hover:bg-yellow-300 hover:text-black focus:ring-yellow-300 dark:border-blue-600 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-600 ${isWinterSelected ? 'bg-yellow-300 text-black dark:bg-blue-600 dark:text-white' : 'bg-white dark:bg-black'}`}>
                        <Snowflake size={20}/>
                        <span>Ferie Zimowe</span>
                        {isWinterMenuOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                    </motion.button>


                </div>
                {/*Winter Break Dropdown*/}
                <AnimatePresence mode="sync">
                    {isWinterMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0 }}
                            transition={{
                                duration: 0.2,
                                ease: [0.25, 0.8, 0.25, 1]
                            }}
                            style={{ originY: 0 }}
                            className="flex flex-col gap-3 mt-4 w-full max-w-4xl font-lato min-h-[45vh] overflow-hidden"
                        >
                            {winterBreakGroups.map((group) => (
                                <button
                                    title={group.id}
                                    key={group.id}
                                    onClick={() => handleWinterGroupSelect(group)}
                                    className={`p-4 rounded-lg font-lato text-left transition-colors w-full ${
                                        selectedEvent.date.getTime() === group.date.getTime()
                                            ? 'bg-yellow-200 dark:bg-blue-800'
                                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    <div className="font-bold text-lg font-lato">{group.title}</div>
                                    <div className="text-sm font-light font-Inter">{group.provinces}</div>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
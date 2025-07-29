"use client"
import { motion } from "framer-motion";

export default function HeroText() {
    return (
        <>
            <div className="z-10 text-outline text-center font-lato select-none pt-6">
                <header>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 100, damping: 10}}
                        className="text-5xl sm:text-6xl font-semibold mb-4  ">
                        <h1>Kiedy Wakacje?</h1>
                    </motion.div>
                </header>
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.5}}
                    className="text-xl sm:text-2xl text-black dark:text-gray-100 mb-2 text-outline z-10  max-w-md text-outline">
                    <h2 className="text-2xl font-medium mb-2 z-10 text-outline">Nie musisz już pytać!</h2>
                </motion.div>
            </div>
        </>
    )
}
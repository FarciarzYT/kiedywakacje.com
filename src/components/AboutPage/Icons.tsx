"use client";
import { motion } from 'framer-motion';

import { FaTiktok, FaInstagram ,FaGithub } from 'react-icons/fa';

export default function AboutText() {

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (

            <motion.footer variants={itemVariants} className="mt-4">
                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://www.instagram.com/bezkompromisowy_lider"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="text-black transition-transform duration-200 hover:scale-110 hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
                    >
                        <FaInstagram size={32} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@bezkompromisowy_lider"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter profile"
                        className="text-black transition-transform duration-200 hover:scale-110 hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
                    >
                        <FaTiktok size={32} />
                    </a>

                    <a
                        href="https://github.com/FarciarzYT"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="text-black transition-transform duration-200 hover:scale-110 hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>
            </motion.footer>
    );
}
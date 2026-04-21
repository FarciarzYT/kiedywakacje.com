"use client";
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram ,FaGithub } from 'react-icons/fa';
import {itemVariants} from "@/components/AboutPage/AboutText";
import {FaLinkedin} from "react-icons/fa6";

export default function AboutText() {



    return (

            <motion.footer variants={itemVariants} className="mt-4">
                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/tomasz-t%C5%82usty-98332b301/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter profile"
                        className="text-black transition-transform duration-200 hover:scale-110 hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
                    >
                        <FaLinkedin size={32} />
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
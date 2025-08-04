
import AnimatedBackground from "@/components/AboutPage/AnimatedBackground";
import { ThemeToogle } from "@/components/theme-toogle";
import { HomeToggle } from "@/components/home-toggle";
import AboutText from "@/components/AboutPage/AboutText";
export default function About() {
    return (
        <>
            <AnimatedBackground/>
            <main className="flex flex-col items-center justify-center px-4 py-12 bg-white dark:bg-black font-inter min-h-screen md:w-screen duration-300">
                <AboutText />
                <ThemeToogle/>
                <HomeToggle/>
            </main>
        </>
    );
}

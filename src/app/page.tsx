import HeroButtons from "@/components/HeroPage/HeroButtons";
import AnimatedBackground from "@/components/HeroPage/AnimatedBackground";
import { ThemeToogle } from "@/components/theme-toogle";
import { HomeToggle} from "@/components/home-toggle";
import HeroText from "@/components/HeroPage/HeroText";


export default function HomePage() {


    return (
        <>
            <AnimatedBackground/>
            <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-black dark:bg-black dark:text-white  font-Helvetica">
                <HeroText/>
                <HeroButtons/>
                <ThemeToogle/>
                <HomeToggle/>

            </main>
        </>
    );
}
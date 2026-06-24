import HeroButtons from "@/components/HeroPage/HeroButtons";
import AnimatedBackground from "@/components/HeroPage/AnimatedBackground";
import { ThemeToogle } from "@/components/theme-toogle";
import { HomeToggle } from "@/components/home-toggle";
import HeroText from "@/components/HeroPage/HeroText";
import { Articles } from "@/components/articles/Articles";
import AltFooter from "@/components/base/Footer";
import FAQpage from "@/components/base/Faq";
import EventLinks from "@/components/HeroPage/EventLinks";
import { faqs } from "@/data/faq";

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
        },
    })),
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <AnimatedBackground />
            <main className="flex flex-col items-center justify-center px-4 pt-48 text-black dark:text-white min-h-screen scroll-auto min-[100vh]">
                <HeroText />
                <HeroButtons />
                <ThemeToogle />
                <HomeToggle />
            </main>
            <EventLinks />
            <Articles />
            <FAQpage />
            <AltFooter />
        </>
    );
}

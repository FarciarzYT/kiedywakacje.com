import "./globals.css"
import {ThemeProvider} from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import React from "react";

export const metadata = {
    title: 'Odliczanie do zasłużonego Odpoczynku - kiedywakacje.com',
    description: 'Nie możesz doczekać się już wakacji? tutaj znajdziesz precyzyjne odliczanie do końca roku szkolnego, ferii zimowych i innych dni wolnych! Sprawdź, ile dokładnie dni, godzin i minut pozostało do upragnionego odpoczynku',
    keywords: [
        'Odliczanie', 'do', 'wakacji', 'końca', 'roku', 'szkolnego',
        'wakacje', 'wolne', 'odpoczynek', 'ferie', 'zimowe',
        'weekend', 'ile', '2025', '2025/2026'
    ],
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
        title: 'Odliczanie do zasłużonego Odpoczynku - kiedywakacje.com',
        description: 'Nie możesz doczekać się już wakacji? tutaj znajdziesz precyzyjne odliczanie do końca roku szkolnego, ferii zimowych i innych dni wolnych! Sprawdź, ile dokładnie dni, godzin i minut pozostało do upragnionego odpoczynku',
        url: 'https://kiedywakacje.com/',
        siteName: 'Kiedy Wakacje',
        images: [
            {
                url: '/android-chrome-192x192.png',
                width: 256,
                height: 256,
                alt: 'Zegar odliczający do wakacji',
            },
        ],
        type: 'website',
        locale: 'pl_PL',

    },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <body className="dark:bg-black sm:overflow-hidden">
                <ThemeProvider attribute="class" enableSystem defaultTheme="system" >{children}</ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}

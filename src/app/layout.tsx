import "./globals.css"
import {ThemeProvider} from "next-themes"
import React from "react";

export const metadata = {
    title: 'kiedy wakacje?',
    description: 'Goggins nie wie co to wakacje?'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" enableSystem defaultTheme="system">{children}</ThemeProvider>
            </body>
        </html>
    );
}

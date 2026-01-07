import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import BookClassButton from "./bookclassbutton";
import { GoogleAnalytics } from "@next/third-parties/google";

const headerFont = Cormorant_Garamond({
    variable: "--font-header",
    subsets: ["latin"],
});

const bodyFont = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Humanities for STEM Brains - 1:1 Tutoring",
    description: "Uncover the hidden structure of the humanities with my logic-based systematic method for essay writing, grammar, and text analysis.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-HQFZGPCBNV" />
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <title>Humanities for STEM Brains - 1:1 Tutoring</title>
            </head>
            <body className={`${headerFont.variable} ${bodyFont.variable} antialiased w-full px-4 py-4`}>
                <div className="max-w-7xl m-auto flex flex-col items-stretch">
                    <Header />
                    <div className="selected rounded-2xl">
                        {children}
                    </div>
                    <BookClassButton />
                </div>
            </body>
        </html>
    );
}

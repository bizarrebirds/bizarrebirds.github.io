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
    title: "Humanities for STEM Brains",
    description: "",
    icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-HQFZGPCBNV" />
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

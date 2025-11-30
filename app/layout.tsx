import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import BookClassButton from "./bookclassbutton";
import { Fragment } from "react/jsx-runtime";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Humanities for STEM Brains",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full px-4 py-4`}>
        <div className="max-w-7xl m-auto flex flex-col items-stretch">
          <Header />
          <div className="selected">
            {children}
          </div>
          <BookClassButton />
        </div>
      </body>
    </html>
  );
}

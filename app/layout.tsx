import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forj",
  description: "Forj is a dating app for verified professionals seeking meaningful relationships.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#FF5E44",
  openGraph: {
    title: "Forj",
    description: "Forj is a dating app for verified professionals seeking meaningful relationships.",
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

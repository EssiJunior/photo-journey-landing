import type { Metadata } from "next";
import { Libre_Bodoni, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const libreBodoniSans = Libre_Bodoni({
  variable: "--font-libre-Bodoni",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Journey Landing",
  description: "This is my solution to transitstay, Next.js developer recruitment test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBodoniSans.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

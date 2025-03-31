import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import { ModalProvider } from "@/providers/ModalContext";

import Modal from "@/components/Modal";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "#ZeroKonkretów",
  description: "Stanowski2025",
  icons: {
    icon: "favicon.png",
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
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ModalProvider>
          <div className="font-sans">
            <main className="container mx-auto">
              <Header />
              <Hero />
              {children}
              <Footer />
            </main>
          </div>
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}

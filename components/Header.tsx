"use client";

import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ZbierajPodpisy from "./ZbierajPodpisy";
import ZglosSieDoKomisji from "./ZglosSieDoKomisji";

export default function Hero() {
  return (
    <header className="bg-white p-6">
      <nav className="flex md:flex-row flex-col items-center justify-between gap-5 md:gap-10">
        <SocialMedia />
        <Link href="/">
          <h1 className="uppercase font-mono text-2xl font-bold tracking-tighter">
            stanowski<span className="text-accent">2025</span>
          </h1>
        </Link>
        <div
          id="nav-right"
          className="flex flex-col xl:flex-row gap-5 items-center"
        >
          <ZglosSieDoKomisji />
          <ZbierajPodpisy />
        </div>
      </nav>
    </header>
  );
}

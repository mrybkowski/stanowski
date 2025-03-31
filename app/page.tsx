"use client";

import ZbierajPodpisy from "@/components/ZbierajPodpisy";
import ZeroKonkretow from "@/components/ZeroKonkretow";
import ZglosSieDoKomisji from "@/components/ZglosSieDoKomisji";

export default function Home() {
  return (
    <section
      id="content"
      className="xl:mx-32 md:mx-10 mx-0 bg-white xl:p-16 p-10 -mt-10 relative md:rounded-xl rounded-none grid md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold">
          Dołącz i pomóż zebrać <span className="text-accent">podpisy</span>!
        </h2>
        <p>
          <span className="text-accent font-bold">
            Krzysztof Jakub Stanowski
          </span>
          &nbsp;wkracza do gry w wyborach prezydenckich 2025. Co obiecuje? Nic,
          czyli okrągłe ZERO konkretów.
        </p>
        <p>
          Chcesz pomóc zebrać 100 tysięcy podpisów i zostać częścią historii
          (przynajmniej polskiego internetu)? Nic prostszego.&nbsp;
          <span className="text-accent font-bold">
            Pobierz listę i wejdź do gry!
          </span>
        </p>
        <div className="flex flex-wrap gap-5">
          <ZbierajPodpisy />
          <ZglosSieDoKomisji />
        </div>
      </div>
      <hr className="my-5 md:pt-0 block md:hidden" />
      <div className="flex flex-col gap-5">
        <p>Wypełniony formularz możesz w łatwy sposób wysłać do Paczkomatu:</p>
        <p>
          <strong>WAW316M</strong>, ul. Magazynowa 18, 02-652 Warszawa
          <br />
          e-mail: <strong>kontakt@stanowski2025.de</strong>
          <br />
          numer telefonu: <strong>+48 883 008 325</strong>
        </p>
        <div className="hidden sm:block">
          <ZeroKonkretow />
        </div>
      </div>
    </section>
  );
}

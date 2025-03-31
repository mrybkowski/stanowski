import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-white">
      <Image
        className="hidden sm:block"
        src="/hero.webp"
        width="2880"
        height="1286"
        alt="Hero"
        loading="lazy"
      />
      <Image
        className="block sm:hidden"
        src="/hero-mobile.webp"
        width="786"
        height="580"
        alt="Hero"
        loading="lazy"
      />
    </section>
  );
}

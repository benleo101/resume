"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  project: string;
  company: string;
};

const slides: Slide[] = [
  { src: "/portfolio/ezyhr1.PNG", alt: "EZYHR dashboard", project: "EZYHR Platform", company: "Orisma Technology" },
  { src: "/portfolio/ezyhr2.PNG", alt: "EZYHR employee list", project: "EZYHR Platform", company: "Orisma Technology" },
  { src: "/portfolio/ezyhr3.PNG", alt: "EZYHR approval flow", project: "EZYHR Platform", company: "Orisma Technology" },
  { src: "/portfolio/ezyhr4.PNG", alt: "EZYHR report", project: "EZYHR Platform", company: "Orisma Technology" },
  { src: "/portfolio/ezyhr5.PNG", alt: "EZYHR module", project: "EZYHR Platform", company: "Orisma Technology" },
  { src: "/portfolio/bizchat1.PNG", alt: "BizChat conversation", project: "BizChat", company: "Orisma Technology" },
  { src: "/portfolio/bizchat2.PNG", alt: "BizChat management", project: "BizChat", company: "Orisma Technology" },
  { src: "/portfolio/taximail1.PNG", alt: "Taximail web application screen one", project: "Taximail Web Application", company: "Taximail" },
  { src: "/portfolio/taximail2.PNG", alt: "Taximail web application screen two", project: "Taximail Web Application", company: "Taximail" },
  { src: "/portfolio/triller1.PNG", alt: "Customer Pos Triller main", project: "Customer Pos (Triller)", company: "Taximail" },
  { src: "/portfolio/triller2.PNG", alt: "Customer Pos Triller detail", project: "Customer Pos (Triller)", company: "Taximail" },
  { src: "/portfolio/triller3.PNG", alt: "Customer Pos Triller mobile", project: "Customer Pos (Triller)", company: "Taximail" },
  { src: "/portfolio/jaijai.PNG", alt: "Jaijai employee benefits screen one", project: "Jaijai", company: "Taximail" },
  { src: "/portfolio/jaijai2.PNG", alt: "Jaijai employee benefits screen two", project: "Jaijai", company: "Taximail" },
  { src: "/portfolio/jaijai3.PNG", alt: "Jaijai employee benefits screen three", project: "Jaijai", company: "Taximail" },
];

function changeIndex(current: number, delta: number) {
  return (current + delta + slides.length) % slides.length;
}

export default function PortfolioShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const activeSlide = slides[index];

  const goNext = () => {
    setDirection("right");
    setIndex((current) => changeIndex(current, 1));
  };

  const goPrev = () => {
    setDirection("left");
    setIndex((current) => changeIndex(current, -1));
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      goNext();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="py-6 md:py-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-stone-300/70 bg-stone-950 shadow-[0_24px_80px_rgba(28,25,23,0.22)]">
        <div className="absolute left-4 top-4 z-20 rounded-full bg-black/45 px-4 py-2 text-xl text-white backdrop-blur">
          {index + 1} / {slides.length}
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur transition hover:bg-white/28"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 5-7 7 7 7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur transition hover:bg-white/28"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
          </svg>
        </button>

        <div className="relative aspect-[16/10] w-full">
          <div
            key={activeSlide.src}
            className={`absolute inset-0 ${direction === "right" ? "portfolio-slide-enter-right" : "portfolio-slide-enter-left"}`}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain bg-stone-950"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

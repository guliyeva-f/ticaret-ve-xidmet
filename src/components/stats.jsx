"use client";

import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
import { NumberTicker } from "./ui/number-ticker";

const Stats = () => {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SimpleParallax scale={1.5} delay={0.5} orientation="down">
          <Image
            src="/images/flag.jpeg"
            alt="background"
            fill
            className="object-cover object-center"
          />
        </SimpleParallax>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/80"></div>
      </div>
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 py-12 xl:px-0 text-white">
        <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl">
          Rəqəmlər danışır
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/95">
          Mərkəzimizin fəaliyyəti və nailiyyətləri rəqəmlərlə daha aydın görünür
        </p>
        <div className="mt-16 grid justify-center gap-x-10 gap-y-16 sm:mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker
              value={2000}
              suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Aktiv tələbə sayı</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker
              value={80}
              suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Müəllim heyəti</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker
              value={25}
              suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Tədris proqramları</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker
              value={85}
              suffix="%"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">İşlə təmin olunan məzunlar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
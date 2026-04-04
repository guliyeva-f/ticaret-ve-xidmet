"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import { NumberTicker } from "./ui/number-ticker";

const Stats = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/images/flag.jpeg', speed: -15 }]}
      className="relative flex h-screen sm:h-[90vh] md:h-[80vh] lg:h-[70vh] xl:h-[60vh] items-center justify-center overflow-hidden"
    ><div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/80" />
      <div className="relative z-10 mx-auto container px-5 text-white">
        <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl">
          Rəqəmlər danışır
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/95">
          Mərkəzimizin fəaliyyəti və nailiyyətləri rəqəmlərlə daha aydın görünür
        </p>
        <div className="mt-10 grid justify-center gap-x-10 gap-y-16 sm:mt-16 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker value={2000} suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Aktiv tələbə sayı</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker value={80} suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Müəllim heyəti</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker value={25} suffix="+"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">Tədris proqramları</p>
          </div>
          <div className="flex flex-col items-center gap-4 transition-transform hover:scale-105">
            <NumberTicker value={85} suffix="%"
              className="text-5xl font-semibold whitespace-pre-wrap md:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
            />
            <p className="text-xl font-medium">İşlə təmin olunan məzunlar</p>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Stats;
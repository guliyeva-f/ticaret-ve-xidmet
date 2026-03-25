
import HeroSection from "@/components/hero-section";
import Feature02 from "@/components/shadcn-space/feature-02";
import Categories from "@/components/shadcn-space/categories";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="min-h-screen pt-[90px] sm:pt-[100px] md:pt-[105px] lg:pt-[110px]">
      <HeroSection />
      <div className="container mx-auto">
        <Feature02 />
      </div>
      <Stats />
      <div className="container mx-auto">
        <Categories />
      </div>
    </main>
  )
}
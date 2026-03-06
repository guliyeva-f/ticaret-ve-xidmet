
import HeroSection from "@/components/hero-section";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="min-h-screen pt-[90px] sm:pt-[100px] md:pt-[105px] lg:pt-[110px]">
      <HeroSection />
      <div className="container mx-auto">
        <Feature02 />
      </div>
      <Stats />
      <section className="h-screen">

      </section>
    </main>
  )
}
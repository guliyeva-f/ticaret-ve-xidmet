
import HeroSection from "@/components/hero-section";
import Feature02 from "@/components/feature";
import Categories from "@/components/categories";
import Stats from "@/components/stats";
import Blog from "@/components/blog";
import ContactSection1 from "@/components/contact-section-1";

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
        <Blog />
        <ContactSection1 />
      </div>
      <section className="h-screen" />
    </main>
  )
}
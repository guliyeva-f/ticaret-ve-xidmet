
import HeroSection from "@/components/hero-section";
import Categories from "@/components/categories";
import Stats from "@/components/stats";
import Blog from "@/components/blog";
import ContactSection1 from "@/components/contact-section";
import Feature from "@/components/feature";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto">
        <Feature />
      </div>
      <Stats />
      <div className="container mx-auto">
        <Categories />
        <Blog />
        <ContactSection1 />
      </div>
    </>
  )
}
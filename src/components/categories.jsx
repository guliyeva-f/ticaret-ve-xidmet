"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Cpu } from "lucide-react";
import { ChartNetwork } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { Utensils } from "lucide-react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const categoriesData = [
  {
    icon: Paintbrush,
    title: "Dizayn və Yaradıcılıq",
    bg: "bg-purple-500/10",
    color: "text-purple-500",
    preview: [
      "Qrafik dizayner",
      "Geyim üzrə dizayner",
    ],
    count: 6,
  },
  {
    icon: Utensils,
    title: "Turizm və Otelçilik",
    bg: "bg-orange-400/10",
    color: "text-orange-400",
    preview: [
      "Turizm təşkilatçısı",
      "Mehmanxana inzibatçısı",
    ],
    count: 4,
  },
  {
    icon: Cpu,
    title: "İKT və Rəqəmsal Texnologiyalar",
    bg: "bg-sky-400/10",
    color: "text-sky-400",
    preview: [
      "Veb-dizayn və proqram təminatı",
    ],
    count: 3,
  },
  {
    icon: Sparkles,
    title: "Gözəllik və Xidmətlər",
    bg: "bg-pink-400/10",
    color: "text-pink-400",
    preview: [
      "Bərbər–vizajist manikürçü",
      "Qənnadçı, şirniyyatçı",
    ],
    count: 5,
  },
  {
    icon: ChartNetwork,
    title: "Biznes və Mühasibatlıq",
    bg: "bg-teal-400/10",
    color: "text-teal-400",
    preview: [
      "Mühasibat uçotu",
      "Əməliyyatçı–mühasib",
    ],
    count: 6,
  },
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 80, }, visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.3, duration: 0.6, ease: "easeInOut", }, }),
  };

  return (
    <section className="bg-background py-16">
      <div className="lg:px-0 sm:px-12 px-6">
        <div className="flex flex-col gap-8 sm:gap-16 justify-center items-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-200 ease-in-out fill-mode-both">
            <Badge variant="outline" className="px-3 py-1 text-sm h-auto">
              İxtisaslar
            </Badge>
            <h1 className="text-3xl md:text-4xl text-center font-semibold tracking-tight">
              Karyeranız üçün doğru ixtisası seçin
            </h1>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center w-full">
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {categoriesData.map((category, index) => {
                const visiblePreviews = category.preview.slice(0, 2);
                return (
                  <motion.div
                    key={index}
                    className=" flex w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)] 2xl:w-[calc((100%-96px)/5)]"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  ><Card className={cn("ring-0 p-6 flex flex-col min-h-[320px] h-full w-full", category.bg)}>
                      <CardContent className="p-0 flex flex-col items-center justify-between gap-6 flex-1">
                        <category.icon size={48} className={cn(category.color)} />
                        <p className={cn("text-2xl font-medium text-center", category.color)}>
                          {category.title}
                        </p>
                        <div className="flex flex-col items-center gap-2">
                          {visiblePreviews.map((item, idx) => (
                            <Badge
                              key={idx}
                              className="text-[13px] px-2 py-1 bg-gray-600 text-white dark:bg-gray-300/20 dark:text-white"
                            >{item}
                            </Badge>
                          ))}
                          <Badge className="text-[13px] px-2 py-1 bg-gray-600 text-white dark:bg-gray-300/20 dark:text-white">
                            {`+${category.count}`}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            <div className="bg-gray-950 border rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-12 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both">
              <div className="text-center md:text-start">
                <p className="text-2xl font-medium text-white">
                  Hansını seçəcəyinə əmin deyilsən?
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <Button className="relative bg-white text-black font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 hover:bg-white w-fit overflow-hidden cursor-pointer">
                  <Link href="/programs" className="flex items-center">
                    <span className="relative z-10 text-[16px] transition-all duration-500">
                      Bütün ixtisaslara bax
                    </span>
                    <div className="absolute right-1 w-10 h-10 text-white bg-gray-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
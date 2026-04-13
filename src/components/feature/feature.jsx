"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { useRef } from "react";

const Feature = ({ featureData }) => {
  const iconRefs = useRef({});

  return (
    <section>
      <div className="lg:py-16 lg:px-0 sm:p-16 p-8">
        <div className="flex flex-col gap-8 md:gap-16">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center gap-4 mx-auto"
          ><Badge variant="outline" className="px-3 py-1 h-auto text-sm">
              Haqqımızda
            </Badge>
            <h1 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
              Ticarət və Xidmət üzrə <br />Gəncə Dövlət Peşə Təhsil Mərkəzi
            </h1>
            <p className="text-[18px] font-normal text-muted-foreground text-center">
              Gəncə şəhərində fəaliyyət göstərən mərkəzimiz xidmət və ticarət
              sahələri üzrə <br /> peşəkar kadrların hazırlanmasını həyata keçirir.
              Təhsil prosesi dövlət təhsil standartlarına <br /> uyğun şəkildə
              təşkil olunur və əmək bazarının real tələblərinə əsaslanır.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          > {featureData.map((value, index) => {
            const isLastOdd =
              featureData.length % 2 === 1 && index === featureData.length - 1;
            return (
              <motion.div
                key={index}
                className={isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              ><Card
                onMouseEnter={() => iconRefs.current[index]?.startAnimation()}
                onMouseLeave={() => iconRefs.current[index]?.stopAnimation()}
                className="h-full border-t-4 border-t-black dark:border-t-white/70 transition-all duration-300 hover:translate-y-[-10px] hover:translate-x-[5px] cursor-pointer hover:shadow-lg"
              ><CardContent className="px-8 flex flex-col">
                    <value.icon
                      ref={(el) => (iconRefs.current[index] = el)}
                      className="w-12 h-12 text-primary dark:text-white/90 self-end"
                      strokeWidth={1}
                    />
                    <div className="flex flex-col gap-3">
                      <h6 className="text-2xl font-semibold">{value.title}</h6>
                      <p className="text-base text-muted-foreground">{value.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
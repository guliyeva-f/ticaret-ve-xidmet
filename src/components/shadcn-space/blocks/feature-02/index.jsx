"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import { Target, Eye, Award } from "lucide-react";

const featureData = [
  {
    icon: Target,
    title: "Missiyamız",
    content:
      "Tələbələrə müasir peşə bilikləri və praktik bacarıqlar qazandırmaq, onları xidmət və ticarət sektorunda rəqabətqabiliyyətli mütəxəssis kimi formalaşdırmaq əsas prioritetimizdir. Tədris prosesi nəzəri biliklərlə praktik bacarıqların balansı əsasında qurulur və real iş mühitinə uyğunlaşdırılmış şəkildə təşkil edilir.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    content:
      "Regionda peşə təhsili sahəsində keyfiyyət və etibarlılıq göstəricisinə çevrilmək, işəgötürənlərlə əməkdaşlıq çərçivəsində əmək bazarının tələblərinə cavab verən ixtisaslı kadrlar yetişdirmək əsas məqsədlərimizdəndir. Məqsədimiz yalnız diplom təqdim edən deyil, peşəkar və rəqabətqabiliyyətli mütəxəssislər formalaşdıran təhsil modeli qurmaqdır.",
  },
  {
    icon: Award,
    title: "Üstünlüklərimiz",
    content:
      "Peşəkar müəllim heyəti, praktik yönümlü təhsil və iş dünyası ilə əməkdaşlıq mərkəzimizin əsas üstünlüklərini təşkil edir. Tədris sahə təcrübəsinə malik müəllimlər tərəfindən aparılır, proqramlar əmək bazarının aktual tələblərinə uyğun yenilənir və tələbələrin real iş mühitinə uyğun praktik bacarıqlar əldə etməsinə xüsusi diqqət yetirilir.",
  },
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
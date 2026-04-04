import Feature from "@/components/feature/feature";
import { CompassIcon } from "@/components/ui/icons/compass-icon";
import { RocketIcon } from "@/components/ui/icons/rocket-icon";
import { TelescopeIcon } from "@/components/ui/icons/telescope-icon";

const featureData = [
  {
    icon: CompassIcon,
    title: "Missiyamız",
    content:
      "Tələbələrə müasir peşə bilikləri və praktik bacarıqlar qazandırmaq, onları xidmət və ticarət sektorunda rəqabətqabiliyyətli mütəxəssis kimi formalaşdırmaq əsas prioritetimizdir.",
  },
  {
    icon: TelescopeIcon,
    title: "Vizyonumuz",
    content:
      "Regionda peşə təhsili sahəsində keyfiyyət və etibarlılıq göstəricisinə çevrilmək, işəgötürənlərlə əməkdaşlıq çərçivəsində əmək bazarının tələblərinə cavab verən ixtisaslı kadrlar yetişdirmək əsas məqsədlərimizdəndir.",
  },
  {
    icon: RocketIcon,
    title: "Üstünlüklərimiz",
    content:
      "Tədris sahə təcrübəsinə malik müəllimlər tərəfindən aparılır, proqramlar əmək bazarının aktual tələblərinə uyğun yenilənir və tələbələrin real iş mühitinə uyğun praktik bacarıqlar əldə etməsinə xüsusi diqqət yetirilir.",
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
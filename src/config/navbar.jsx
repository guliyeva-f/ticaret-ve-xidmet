import { Info, Building2, Target, Cpu, BookOpen, GraduationCap } from "lucide-react";

export const navigation = [
  {
    title: "Haqqımızda",
    type: "dropdown",
    items: [
      {
        title: "Ümumi məlumat",
        href: "/about/general",
        description: "Mərkəzin tarixi və fəaliyyət istiqamətləri.",
        icon: <Info />
      },
      {
        title: "Rektorluq",
        href: "/about/rectorate",
        description: "Rektorun müraciəti və rəhbərlik.",
        icon: <Building2 />
      },
      {
        title: "Missiya & Vizyon",
        href: "/about/mission-vision",
        description: "Strateji məqsədlər və təhsil fəlsəfəsi.",
        icon: <Target />
      }
    ]
  },
  {
    title: "İxtisaslar",
    type: "dropdown",
    items: [
      {
        title: "Yüksək texniki peşə",
        href: "/programs/high-technical",
        description: "Ali texniki bacarıqlar üzrə proqramlar",
        icon: <Cpu />
      },
      {
        title: "Texniki peşə (9 illik)",
        href: "/programs/technical-9",
        description: "9 illik bazada ixtisaslar",
        icon: <BookOpen />
      },
      {
        title: "Texniki peşə (11 illik)",
        href: "/programs/technical-11",
        description: "11 illik bazada ixtisaslar",
        icon: <GraduationCap />
      }
    ]
  },
  {
    title: "Qəbul",
    type: "dropdown",
    items: [
      {
        title: "Qəbul qaydaları",
        href: "/admission/rules"
      },
      {
        title: "Tələb olunan sənədlər",
        href: "/admission/documents"
      },
    ]
  },
  {
    title: "Müəllimlər",
    href: "/teachers"
  },
  {
    title: "Xəbərlər",
    href: "/news"
  },
  {
    title: "Qalereya",
    href: "/gallery"
  },
  {
    title: "Əlaqə",
    href: "/contact"
  }
];
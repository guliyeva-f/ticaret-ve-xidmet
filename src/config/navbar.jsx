import { Cpu, BookOpen, GraduationCap } from "lucide-react";

export const navigation = [
  {
    title: "Haqqımızda",
    href: "/about"
  },
  {
    title: "İxtisaslar",
    type: "dropdown",
    items: [
      {
        title: "Yüksək texniki peşə",
        href: "/programs?type=high-technical",
        icon: <Cpu />
      },
      {
        title: "Texniki peşə (9 illik)",
        href: "/programs?type=technical-9",
        icon: <BookOpen />
      },
      {
        title: "Texniki peşə (11 illik)",
        href: "/programs?type=technical-11",
        icon: <GraduationCap />
      }
    ]
  },
  {
    title: "Xəbərlər",
    href: "/news"
  },
  {
    title: "Qəbul",
    type: "dropdown",
    items: [
      {
        title: "Qəbul qaydaları",
        href: "/admission#rules"
      },
      {
        title: "Tələb olunan sənədlər",
        href: "/admission#documents"
      }
    ]
  },
  {
    title: "Əlaqə",
    href: "/contact"
  }
];
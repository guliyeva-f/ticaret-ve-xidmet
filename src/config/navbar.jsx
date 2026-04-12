import { Cpu, BookOpen, GraduationCap } from "lucide-react";

export const navigation = [
  {
    title: "İxtisaslar",
    type: "dropdown",
    items: [
      {
        title: "Yüksək texniki peşə",
        href: "/programs/high-technical",
        icon: <Cpu />
      },
      {
        title: "Texniki peşə (9 illik)",
        href: "/programs/technical-9",
        icon: <BookOpen />
      },
      {
        title: "Texniki peşə (11 illik)",
        href: "/programs/technical-11",
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
];
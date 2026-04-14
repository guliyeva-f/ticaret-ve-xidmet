
import { ArrowRight, CalendarDays, Dot, Eye, Mails } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const blogPosts = [
  {
    id: 1,
    title: "Mərkəzimizdə peşəyönümü inforturu keçirildi",
    slug: "merkezdə-peseyonumu-inforturu-kecirildi",
    tags: ["Peşəyönümü", "İnfotur"],
    cover_image: "/images/merkez.jpeg",
    views_count: 84,
    created_at: "14.04.2026 10:00",
  },
  {
    id: 2,
    title: "Satış və ödəniş üsulları mövzusunda açıq dərs təşkil edildi",
    slug: "satis-ve-odenish-usullari-aciq-ders-1",
    tags: ["Açıq Dərs", "Satış"],
    cover_image: "/images/merkez.jpeg",
    views_count: 61,
    created_at: "13.04.2026 09:30",
  },
  {
    id: 3,
    title: "Kompüter sistemləri üzrə açıq dərs uğurla keçirildi",
    slug: "komputer-sistemleri-uzre-aciq-ders",
    tags: ["Açıq Dərs", "Kompüter"],
    cover_image: "/images/merkez.jpeg",
    views_count: 47,
    created_at: "12.04.2026 11:00",
  },
  {
    id: 4,
    title: "Satış və ödəniş üsulları mövzusunda açıq dərs təşkil edildi",
    slug: "satis-ve-odenish-usullari-aciq-ders-2",
    tags: ["Açıq Dərs", "Satış"],
    cover_image: "/images/merkez.jpeg",
    views_count: 61,
    created_at: "11.04.2026 09:30",
  },
];

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [datePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split(".");
  return new Date(`${year}-${month}-${day}`).toLocaleDateString("az-AZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function Blog() {
  return (
    <section className="lg:pb-16 lg:pt-0 lg:px-0 sm:p-16 p-8 flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
          Ən son xəbərlər
        </h2>
        <p className="text-[18px] font-normal text-muted-foreground text-center">
          Mərkəzimizdəki son hadisələr və yeniliklər haqqında məlumat əldə edin.
        </p>
      </div>
      <Separator className="" />
      <div className="flex flex-wrap justify-start gap-[16px]">
        {blogPosts.map((post) => (
          <Link href={`/news/${post.slug}`} key={post.id} className="flex w-full md:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)] 2xl:w-[calc((100%-48px)/4)]">
            <div className="overflow-hidden rounded-xl h-full flex flex-col justify-between bg-neutral-100 dark:bg-neutral-800 p-2 pb-4">
              <div className="relative isolate">
                <img alt={post.title} className="aspect-14/9 rounded-lg bg-muted object-cover" src={post.cover_image} />
                <img alt={post.title} className="absolute inset-0 -z-10 aspect-17/9 scale-y-110 rounded bg-muted blur-2xl" src={post.cover_image} />
              </div>
              <div className="p-2 flex flex-col flex-1 gap-3 justify-between">
                <div className="pt-2 flex flex-wrap items-center gap-1">
                  {post.tags.map((tag) => (
                    <Badge
                      className="rounded-full text-[14px] px-3 py-1 bg-linear-to-r border-none from-sky-400 to-indigo-600 text-white"
                      key={tag}
                    ># {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-semibold text-xl">{post.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <CalendarDays className="h-5 w-5" />
                    {formatDate(post.created_at)}
                  </div>
                  <Dot className="text-muted-foreground" />
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Eye className="h-5 w-5" />
                    {post.views_count}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="
        self-end text-[15px] flex items-center gap-1 group
        text-blue-600 hover:text-blue-700
        underline underline-offset-4 decoration-1
        bg-transparent hover:bg-transparent
      ">Ətraflı oxu
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/news" className="cursor-pointer
  bg-orange-800 text-white
  border border-orange-400 border-b-4
  font-medium overflow-hidden relative
  px-4 py-2 rounded-md
  hover:brightness-125 hover:border-t-4 hover:border-b
  active:opacity-75 outline-none duration-300 group
"><span className="
    bg-orange-400
    absolute -top-[150%] left-0
    inline-flex w-80 h-[5px] rounded-md
    opacity-60
    group-hover:top-[150%]
    duration-500
    shadow-[0_0_12px_6px_rgba(251,146,60,0.4)]
  "></span>
        Bütün xəbərlərə bax
      </Link>
    </section>
  );
}

import { ArrowRight, CalendarDays, Dot, Eye, Mails } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const blogPosts = [
  {
    id: 1,
    title: "Mərkəzimizdə peşəyönümü inforturu keçirildi",
    slug: "merkəzimizde-peseyonumu-inforturu-kecirild",
    body: "Ticarət və Xidmət üzrə Gəncə Dövlət Peşə Təhsil Mərkəzi tərəfindən peşəyönümü fəaliyyətləri çərçivəsində infotur təşkil olunmuşdur. Tədbir zamanı ixtisaslar, qəbul qaydaları və məzunların məşğulluq perspektivləri haqqında ətraflı təqdimat edilmişdir.",
    tags: ["Peşəyönümü", "İnfotur"],
    cover_image: "https://instagram.fgyd4-2.fna.fbcdn.net/v/t51.82787-15/658751735_18089222840596679_7935506449677654044_n.heic?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=104&ig_cache_key=Mzg2NzIwODk5NTU2ODQ3ODQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4NC5zZHIuQzMifQ%3D%3D&_nc_ohc=3BrYdyEBpLUQ7kNvwGhAQWd&_nc_oc=Adqpdnpf6XhSHtD14q8zpbEygA0o7Wqh2CLo318iH1Xx0wS-TEkte1Mu_zfRAFYWOEw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgyd4-2.fna&_nc_gid=mMQ9aP_qznjsgjNrxiWy5A&_nc_ss=7a32e&oh=00_Af1Pt6jD95Qy2T1vYNm7BQTaKg8fI4LL8L4Y_kKYmDUnHg&oe=69D840F1",
    images: [],
    views_count: 84,
    created_at: "28.03.2026 10:00",
    edited_at: null,
    author: "Admin",
  },
  {
    id: 2,
    title: "Satış və ödəniş üsulları mövzusunda açıq dərs təşkil edildi",
    slug: "satis-ve-odenish-usullari-movzusunda-aciq-ders",
    body: "\"Qida və qeyri-qida malları satıcısı nəzarətçi-xəzinədar\" ixtisası üzrə müəllim Allahverdiyeva Türkan tərəfindən \"Nağd, elektron və kredit kartları ilə ödənişlərin edilməsi\" mövzusunda açıq dərs keçirilmişdir.",
    tags: ["Açıq Dərs", "Satış"],
    cover_image: "https://instagram.fgyd21-1.fna.fbcdn.net/v/t51.82787-15/657763515_18089220767596679_7377398843922605184_n.heic?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=107&ig_cache_key=Mzg2NzE5OTI1MzQ5MjEzNzMxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=GoNUzjM1MNAQ7kNvwGYKZk8&_nc_oc=AdqTCCsDKo0ztLcotlw22KEUvIQzX0CmfvYp3q5zLo5EkMUYYB63H46VqOp0Y4Lxs4A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgyd21-1.fna&_nc_gid=mMQ9aP_qznjsgjNrxiWy5A&_nc_ss=7a32e&oh=00_Af2hT2ywHEd7EoGXxdgB2hlb3vfMV23zRerZtlRgRVI7wg&oe=69D83220",
    images: [],
    views_count: 61,
    created_at: "02.04.2026 09:30",
    edited_at: null,
    author: "Admin",
  },
  {
    id: 3,
    title: "Kompüter sistemləri üzrə açıq dərs uğurla keçirildi",
    slug: "komputer-sistemleri-uzre-aciq-ders",
    body: "\"Telekommunikasiyada kompüter texnikasının istismarı üzrə operator\" ixtisası üzrə müəllim Həsənova Pərvin tərəfindən \"Ana plata\" mövzusunda açıq dərs təşkil olunmuşdur. Tələbələrə ana platanın quruluşu və funksiyaları ətraflı izah edilmişdir.",
    tags: ["Açıq Dərs", "Kompüter"],
    cover_image: "https://instagram.fgyd4-2.fna.fbcdn.net/v/t51.82787-15/660975850_18089207108596679_4577133826350200504_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzg2NzE0NTg0ODk4Nzk1NDg4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjk2MHg3MjAuc2RyLkMzIn0%3D&_nc_ohc=YG9hu-fAAeYQ7kNvwHtbii_&_nc_oc=AdptWlCtCEYBUkx2OQAffcBoR2H3tzkTCHrmthDYhcd1-Aj7d6lgJHPEjkkpJ55yDKw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgyd4-2.fna&_nc_gid=ylJq7Ys2HB5X_nF9oQhI7Q&_nc_ss=7a32e&oh=00_Af1JCYwdcnj5czGAx0r8p7ASaYsv5JjYSzCXhlvsfmwTsw&oe=69D85F1C",
    images: [],
    views_count: 47,
    created_at: "04.04.2026 11:00",
    edited_at: null,
    author: "Admin",
  },
  {
    id: 4,
    title: "Satış və ödəniş üsulları mövzusunda açıq dərs təşkil edildi",
    slug: "satis-ve-odenish-usullari-movzusunda-aciq-ders",
    body: "\"Qida və qeyri-qida malları satıcısı nəzarətçi-xəzinədar\" ixtisası üzrə müəllim Allahverdiyeva Türkan tərəfindən \"Nağd, elektron və kredit kartları ilə ödənişlərin edilməsi\" mövzusunda açıq dərs keçirilmişdir.",
    tags: ["Açıq Dərs", "Satış"],
    cover_image: "https://instagram.fgyd21-1.fna.fbcdn.net/v/t51.82787-15/657763515_18089220767596679_7377398843922605184_n.heic?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=107&ig_cache_key=Mzg2NzE5OTI1MzQ5MjEzNzMxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=GoNUzjM1MNAQ7kNvwGYKZk8&_nc_oc=AdqTCCsDKo0ztLcotlw22KEUvIQzX0CmfvYp3q5zLo5EkMUYYB63H46VqOp0Y4Lxs4A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgyd21-1.fna&_nc_gid=mMQ9aP_qznjsgjNrxiWy5A&_nc_ss=7a32e&oh=00_Af2hT2ywHEd7EoGXxdgB2hlb3vfMV23zRerZtlRgRVI7wg&oe=69D83220",
    images: [],
    views_count: 61,
    created_at: "02.04.2026 09:30",
    edited_at: null,
    author: "Admin",
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
      <button
        className="cursor-pointer
        bg-orange-800 text-white
        border border-orange-400 border-b-4
        font-medium overflow-hidden relative
        px-4 py-2 rounded-md
        hover:brightness-125 hover:border-t-4 hover:border-b
        active:opacity-75 outline-none duration-300 group
      "
      ><span
        className="
          bg-orange-400
          absolute -top-[150%] left-0
          inline-flex w-80 h-[5px] rounded-md
          opacity-60
          group-hover:top-[150%]
          duration-500
          shadow-[0_0_12px_6px_rgba(251,146,60,0.4)]
        "></span>Bütün xəbərlərə bax
      </button>
    </section>
  );
}
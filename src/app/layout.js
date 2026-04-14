import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import Footer2 from "@/components/ui/footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Ticarət və Xidmət üzrə Gəncə Dövlət Peşə Təhsil Mərkəzi",
  description: "Gəncə Dövlət Peşə Təhsil Mərkəzinin rəsmi saytı",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${roboto.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <header className="sticky top-0 z-99">
            <Navbar />
          </header>
          <main className="flex-1">
            {children}
          </main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
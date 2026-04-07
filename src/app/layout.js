import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ticarət və Xidmət üzrə Gəncə Dövlət Peşə Təhsil Mərkəzi",
  description: "Gəncə Dövlət Peşə Təhsil Mərkəzinin rəsmi saytı",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        <Providers>
          <header className="fixed z-50 top-0 w-full">
            <Navbar />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
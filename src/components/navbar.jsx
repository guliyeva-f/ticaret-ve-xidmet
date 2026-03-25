import Link from "next/link";
import { Logo } from "@/components/logo";
import { NavigationSheet } from "@/components/navigation-sheet";
import NavMenu from "./navigation-menu";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background transition-all duration-500 max-[480px]:h-[90px] sm:h-[100px] md:h-[105px] lg:h-[110px] h-[90px]">
      <div className="container mx-auto flex h-full gap-6 items-center justify-between px-2 sm:px-0 lg:px-1">
        <div className="h-full flex items-center transition-all duration-500">
          <Link href="/" className="h-full cursor-pointer">
            <Logo className="h-full py-1 md:py-2" />
          </Link>
        </div>
        <div className="flex-1 flex flex-col h-full items-center lg:items-end justify-evenly ">
          <AnimatedThemeToggler className={'pr-5 cursor-pointer'} />
          <div className="w-[95%] hidden lg:block border-t border-black/20 dark:border-white/30" />
          <div className="w-full justify-end hidden lg:flex mt-2">
            <NavMenu />
          </div>
        </div>
        <div className="lg:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
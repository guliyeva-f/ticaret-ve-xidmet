import { Logo } from "@/components/logo";
import { NavigationSheet } from "@/components/navigation-sheet";
import NavMenu from "./navigation-menu";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/80 transition-all duration-500 max-[480px]:h-[90px] sm:h-[100px] md:h-[105px] lg:h-[110px] h-[90px]">
      <div className="container mx-auto flex h-full gap-6 items-center justify-between px-2 sm:px-0 lg:px-1">
        <div className="h-full flex items-center transition-all duration-500">
          <Logo className="h-full py-1 md:py-2" />
        </div>
        <div className="flex-1 lg:mt-2 flex flex-col h-full items-center lg:items-end justify-evenly ">
          <AnimatedThemeToggler className={'pr-5'} />
          <div className="w-full hidden lg:block border-t border-black/20 dark:border-white/30" />
          <div className="w-full justify-end hidden lg:flex">
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
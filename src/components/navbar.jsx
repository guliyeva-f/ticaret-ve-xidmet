import { Logo } from "@/components/logo";
import { NavigationSheet } from "@/components/navigation-sheet";
import NavMenu from "./navigation-menu";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/80 transition-all duration-500 max-[480px]:h-[90px] sm:h-[100px] md:h-[105px] lg:h-[110px] h-[90px]">
      <div className="container mx-auto flex h-full items-center justify-between px-2 sm:px-0 lg:px-1">
        <div className="h-full flex items-center transition-all duration-500">
          <Logo className="h-full py-1 md:py-2" />
        </div>
        <NavMenu className="hidden lg:block self-end mb-1" />
        <div className="lg:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
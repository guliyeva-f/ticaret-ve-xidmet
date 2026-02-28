import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/80 transition-all duration-500 max-[480px]:h-[90px] sm:h-[100px] md:h-[105px] lg:h-[110px] h-[90px] flex items-center">
      <div className="container mx-auto flex h-full items-center justify-between px-2 sm:px-0 lg:px-1">
        <div className="h-full flex items-center transition-all duration-500">
          <Logo className="h-full py-1 md:py-2" />
        </div>
        <NavMenu className="hidden md:block" />
        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
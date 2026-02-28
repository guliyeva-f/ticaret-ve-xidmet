"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import HamburgerMenu from "@/components/hamburger-menu";
import { useState, useEffect } from "react";
import { navigation } from "@/config/navbar";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="primary">
          <HamburgerMenu checked={open} size={40} strokeColor="#40294a" onToggle={setOpen} />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-6 overflow-y-auto">
        <div className="space-y-4 text-base">
          {navigation.map((navItem) => (
            <div key={navItem.title}>
              {navItem.type === "dropdown" ? (
                <div>
                  <div className="font-bold">{navItem.title}</div>
                  <ul className="mt-2 ml-2 space-y-2 border-l pl-4">
                    {navItem.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item.icon && (
                            <div className="h-5 w-5 text-muted-foreground">{item.icon}</div>
                          )}
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={navItem.href}
                  className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {navItem.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
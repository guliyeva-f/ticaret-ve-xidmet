"use client";

import * as React from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navigation } from "@/config/navbar";
import Image from "next/image";

export default function NavMenu({ className }) {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu
      viewport={isMobile}
      className={`z-10 ${className || ""}`}
    > <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">Haqqımızda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>İxtisaslar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 w-max">
              {navigation
                .find(nav => nav.title === "İxtisaslar")
                ?.items.map((item) => (
                  <ListItemWithIcon
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    icon={item.icon}
                  ></ListItemWithIcon>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/news">Xəbərlər</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Qəbul</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              {navigation
                .find(nav => nav.title === "Qəbul")
                ?.items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <div className="font-medium">{item.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">Əlaqə</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-[15px] leading-none font-medium">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function ListItemWithIcon({ title, children, href, icon, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-row items-center gap-3 rounded-md"
        ><span className="text-muted-foreground mt-1 [&>svg]:w-5! [&>svg]:h-5!">
            {icon}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none">
              {title}
            </span>
            {children && (
              <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
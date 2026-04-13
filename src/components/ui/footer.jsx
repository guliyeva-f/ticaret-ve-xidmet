"use client";

import React from "react";
import Link from "next/link";

function Footer2() {
    const navLinks = [{
        name: "Haqqımızda",
        href: "#haqqimizda"
    }, {
        name: "İxtisaslar",
        href: "#ixtisaslar"
    }, {
        name: "Xəbərlər",
        href: "#xeberler"
    }, {
        name: "Qəbul",
        href: "#qebul"
    }, {
        name: "Əlaqə",
        href: "#elaqe"
    }];
    const socialIcons = [{
        name: "Facebook",
        href: "#",
        svg: <svg className="size-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
        </svg>
    }, {
        name: "Instagram",
        href: "#",
        svg: <svg className="size-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
        </svg>
    },];

    return <footer className="pb-10 flex flex-col gap-5">
        <div className='border-t' />
        <div className="flex flex-col gap-3 container mx-auto">
            <div className="w-full flex justify-center">
                <div className="w-24 h-24">
                    <img src='/images/logo.png' alt="Logo" />
                </div>
            </div>
            <nav>
                <ul className="flex justify-center gap-5 text-base font-medium">
                    {navLinks.map(link => <li key={link.name}>
                        <Link href={link.href} className="transition-all duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            {link.name}
                        </Link>
                    </li>)}
                </ul>
            </nav>
            <div className="flex justify-center gap-2">
                {socialIcons.map(icon => <Link key={icon.name} target="_blank" rel="noopener noreferrer" aria-label={icon.name} href={icon.href}>
                    {icon.svg}
                </Link>)}
            </div>
        </div>
        <div className='border-t' />
        <div className="flex items-center justify-between container mx-auto text-[15px]">
            <p>&copy; {new Date().getFullYear()} Ticarət və Xidmət üzrə Gəncə Dövlət Peşə Təhsil Mərkəzi</p>
            <p className="flex items-center gap-1 text-sm">
                <span>Developed by</span>
                <Link aria-label="Guliyeva Fatima" className="flex items-center gap-1 font-medium hover:underline" href="https://fatima-guliyeva.vercel.app/" rel="noreferrer" target="_blank"
                >❤️Fatima Guliyeva
                </Link>
            </p>
        </div>
    </footer>;
}
export default Footer2;
'use client';

import { Logo, MenuItem, ThemeSwitch } from "@/components";
import Link from "next/link";

const Menu = () => {
  return (
      <nav className="z-50 lg:border-r-2 lg:border-gray-200 fixed flex lg:flex-col lg:gap-28 lg:h-full lg:top-0 lg:pr-8 pt-14 h-12
      bottom-0 max-lg:inset-x-0 max-lg:mx-auto max-lg:items-center max-lg:justify-evenly max-lg:gap-
      max-lg:bg-bg max-lg:py-8 max-lg:border-t-2 max-lg:border-text">
      <Link href="/" className="border-none lg:self-end max-lg:absolute max-lg:left-4">
        <Logo />
      </Link>
        <ul className="list-none flex flex-col gap-2  max-lg:flex-row max-lg:gap-6 text-end">
          <MenuItem pathname="/about">Sobre</MenuItem>
          <MenuItem pathname="/blog">Blog</MenuItem>
        </ul>
        <div className="lg:hidden absolute right-4">
          <ThemeSwitch />
        </div>
      </nav>
  );
}

export default Menu;

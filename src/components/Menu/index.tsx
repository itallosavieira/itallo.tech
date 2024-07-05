'use client';

import { DropdownLinks, Logo, NavLink, ThemeSwitch } from "@/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Menu = () => {
  const currentPath = usePathname();
  const [isLinksActive, setIsLinksActive] = useState(false);

  return (
    <header className="w-auto max-md:w-full max-md:px-2 px-8 fixed bottom-6 max-md:bottom-0 left-1/2 transform bg-opacity-95 -translate-x-1/2 md:rounded-md border-gray-300 border-2 bg-gray-50 dark:bg-gray-950 dark:border-gray-50 shadow-md">
      <div className="flex max-md:h-[3rem] items-center justify-between gap-14 max-md:gap-2">
        <Link href="/" onMouseEnter={() => setIsLinksActive(false)} className="hover:border-none">
          <Logo />
        </Link>
        <nav className="flex items-center">
          <ul className="ml-0 list-none flex gap-4 [&>li]:mt-0 [&>li>a]:text-xl max-md:[&>li>a]:text-[.85rem] [&>li>a]:font-semibold">
            <NavLink href="/about" label="About" isActive={currentPath === "/"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/blog" label="Blog" isActive={currentPath === "/blog"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/" label="Projects" isActive={currentPath === "/projects"} onMouseEnter={() => setIsLinksActive(false)} />
            <li>
              <Link href='' onMouseEnter={() => setIsLinksActive(true)}>Links</Link>
            </li>
          </ul>
          {isLinksActive && <DropdownLinks onMouseLeave={() => setIsLinksActive(false)} />}
        </nav>
        <div onMouseEnter={() => setIsLinksActive(false)}>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Menu;

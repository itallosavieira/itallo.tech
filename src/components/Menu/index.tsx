'use client';

import { DropdownLinks, Logo, NavLink, ThemeSwitch } from "@/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Menu = () => {
  const currentPath = usePathname();
  const [isLinksActive, setIsLinksActive] = useState(false);

  return (
    <div className="flex items-center justify-between gap-6 max-md:bottom-0 px-4 fixed bottom-6  left-1/2 transform bg-opacity-95 hover:bg-opacity-100 -translate-x-1/2 rounded-md border-gray-300 border-2 bg-gray-50 dark:bg-gray-950 dark:border-gray-50 shadow-md">
        <Link href="/" onMouseEnter={() => setIsLinksActive(false)} className="hover:border-none">
          <Logo />
        </Link>
        <nav className="flex  items-center">
          <ul className="ml-0 my-3 list-none flex gap-4">
            <NavLink href="/about" label="About" isActive={currentPath === "/about"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/blog" label="Blog" isActive={currentPath === "/blog"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/projects" label="Projects" isActive={currentPath === "/projects"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="" label="Links" isActive={isLinksActive}  onMouseEnter={() => setIsLinksActive(true)} />
          </ul>
          {isLinksActive && <DropdownLinks onMouseLeave={() => setIsLinksActive(false)} />}
        </nav>
        <div onMouseEnter={() => setIsLinksActive(false)}>
          <ThemeSwitch />
        </div>
    </div>
  );
}

export default Menu;

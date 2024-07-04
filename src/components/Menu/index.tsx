'use client';

import { DropdownLinks, Logo, NavLink, ThemeSwitch } from "@/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Menu = () => {
  const currentPath = usePathname();
  const [isLinksActive, setIsLinksActive] = useState(false);

  return (
    <header className="w-auto px-8 fixed bottom-12 left-1/2 transform bg-opacity-95 -translate-x-1/2 rounded-lg border-gray-300 border-2 bg-gray-50 dark:bg-gray-950 dark:border-gray-50 shadow-sm">
      <div className="flex items-center justify-between gap-14">
        <Link href="/" onMouseEnter={() => setIsLinksActive(false)} className="hover:border-none">
          <Logo />
        </Link>
        <nav className="flex items-center">
          <ul className="ml-0 list-none flex gap-4 [&>li]:mt-0 [&>li>a]:text-2xl [&>li>a]:font-semibold">
            <NavLink href="/about" label="About" isActive={currentPath === "/"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/blog" label="Blog" isActive={currentPath === "/blog"} onMouseEnter={() => setIsLinksActive(false)} />
            <NavLink href="/projects" label="Projects" isActive={currentPath === "/projects"} onMouseEnter={() => setIsLinksActive(false)} />
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

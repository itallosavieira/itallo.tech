'use client';

import { Logo, MenuItem } from "@/components";
import Link from "next/link";

const Menu = () => {
  return (
      <nav className="fixed flex lg:flex-col lg:gap-28 lg:h-full lg:top-0 lg:pr-8 pt-14 h-12
      max-lg:bottom-0 max-lg:inset-x-0 max-lg:mx-auto max-lg:items-center max-lg:justify-center max-lg:gap-4
      max-lg:bg-white max-lg:py-2 max-lg:border-t-2 max-lg:border-gray-100">
      <Link href="/" className="border-none max-lg:absolute max-lg:left-4">
        <Logo />
      </Link>
        <ul className="list-none flex flex-col gap-2  max-lg:flex-row max-lg:gap-6">
          <MenuItem pathname="/about" text="Sobre" />
          <MenuItem pathname="/blog" text="Blog" />
          {/* <li><Link className={`${pathname === '/projects' && 'text-pink-600'} border-none text-gray-500`} href="/projects"> Projetos </Link></li> */}
        </ul>
      </nav>
  );
}

export default Menu;

'use client';

import { Logo } from "@/components";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="
      text-end pt-14 px-8 fixed border-r-2 border-r-gray-200 lg:h-full lg:top-0
      max-lg:bottom-0 max-lg:border-none max-lg:-translate-x-1/2 max-lg:left-1/2 max-lg:flex max-lg:gap-4 max-lg:bg-white max-lg:py-3 
      max-lg:rounded-tl-md max-lg:rounded-tr-md
    ">
      <Link href="/" className="flex justify-end max-lg:hidden">
        <Logo />
      </Link>
      <nav className="lg:mt-28">
        <ul className="list-none flex flex-col gap-2  max-lg:flex-row max-lg:gap-4">
          <li><Link className="text-gray-500" href="/about"> Sobre </Link></li>
          <li><Link className="text-gray-500" href="/blog"> Blog </Link></li>
          <li><Link className="text-gray-500" href="/projects"> Projetos </Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

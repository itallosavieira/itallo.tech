'use client';

import { Logo } from "@/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const activeClasses = "text-[#FF5757]";
  const linkClasses = "text-gray-500 hover:text-[#FF5757]";  
  return (
    <div className="fixed flex lg:flex-col lg:gap-28 border-r-2 border-gray-200 lg:h-full lg:top-0 lg:pr-8 pt-14 h-12
      max-lg:bottom-0 max-lg:inset-x-0 max-lg:mx-auto max-lg:items-center max-lg:justify-center max-lg:gap-4
      max-lg:bg-white max-lg:py-2 max-lg:border-t-2 max-lg:border-gray-100">
      <Link href="/" className="border-none max-lg:hidden">
        <Logo />
      </Link>
      <nav>
        <ul className="list-none flex flex-col gap-2  max-lg:flex-row max-lg:gap-6">
          <li><Link className={`${pathname === '/about' && activeClasses} ${linkClasses}`} href="/about"> Sobre </Link></li>
          <li><Link className={`${pathname.includes('/blog') && activeClasses} ${linkClasses}`} href="/blog"> Blog </Link></li>
          {/* <li><Link className={`${pathname === '/projects' && 'text-pink-600'} border-none text-gray-500`} href="/projects"> Projetos </Link></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

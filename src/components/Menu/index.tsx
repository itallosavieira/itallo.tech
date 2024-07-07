'use client';
import { Logo } from "@/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const activeClasses = "text-pink-600";
  const linkClasses = "border-none text-gray-500";  
  return (
    <div className="
      text-end pt-14 px-8 fixed lg:h-full lg:top-0
      max-lg:bottom-0 max-lg:-translate-x-1/2 max-lg:left-1/2 max-lg:flex max-lg:gap-4 max-lg:bg-white max-lg:py-3 
      max-lg:rounded-tl-md max-lg:rounded-tr-md
    ">
      <Link href="/" className="flex border-none justify-end max-lg:hidden hover:bg-transparent">
        <Logo />
      </Link>
      <nav className="lg:mt-28">
        <ul className="list-none flex flex-col gap-2  max-lg:flex-row max-lg:gap-4">
          <li><Link className={`${pathname === '/about' && activeClasses} ${linkClasses}`} href="/about"> Sobre </Link></li>
          <li><Link className={`${pathname === '/blog' && activeClasses} ${linkClasses}`} href="/blog"> Blog </Link></li>
          {/* <li><Link className={`${pathname === '/projects' && 'text-pink-600'} border-none text-gray-500`} href="/projects"> Projetos </Link></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

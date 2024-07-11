'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuItem = ({pathname, text}: {pathname: string, text: string}) => {
  const isActivePathname = usePathname() === pathname;
  const activeClasses = "border-accent";
  const linkClasses = "border-transparent hover:text-accent";  
  
  return (
    <li>
      <Link 
        className={isActivePathname ? activeClasses : linkClasses} 
        href={pathname}
      > 
        {text} 
      </Link>
    </li>
  );
}

export default MenuItem;

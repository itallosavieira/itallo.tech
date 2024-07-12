'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuItem = ({pathname, children, className}: {pathname: string, children: React.ReactNode, className?: string}) => {
  const isActivePathname = usePathname().includes(pathname);
  const activeClasses = "border-accent";
  const linkClasses = "border-transparent hover:text-accent";  
  
  return (
    <li className={className}>
      <Link 
        className={isActivePathname ? activeClasses : linkClasses} 
        href={pathname}
      > 
        {children} 
      </Link>
    </li>
  );
}

export default MenuItem;

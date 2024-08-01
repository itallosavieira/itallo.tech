'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuItem = ({pathname, target, children, className}: {pathname: string, target?: string, children: React.ReactNode, className?: string}) => {
  const isActivePathname = usePathname().includes(pathname);
  const activeClasses = "border-accent";
  const linkClasses = "border-transparent hover:text-accent";  
  
  return (
    <li className={className}>
      <Link
        target={target}
        className={isActivePathname ? activeClasses : linkClasses} 
        href={pathname}
      > 
        {children} 
      </Link>
    </li>
  );
}

export default MenuItem;

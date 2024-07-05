'use client';

import Link from "next/link";

interface INavLink {
  href: string;
  label: string;
  isActive?: boolean;
  target?: string;
  onMouseEnter?: () => void;
}

const NavLink = ({ href, label, isActive, target, onMouseEnter }: INavLink) => (
  <li className="m-0">
    <Link 
      href={href} 
      target={target}
      onMouseEnter={onMouseEnter} 
      className={`${isActive ? "text-gray-950 dark:text-gray-100" : ""}`}>
      <span className="text-[1rem] max-md:text-[.85rem] font-semibold ">
        {label}
      </span>
    </Link>
  </li>
);


export default NavLink;
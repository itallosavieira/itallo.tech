import Link from "next/link";

interface INavLink {
  href: string;
  label: string;
  isActive?: boolean;
  target?: string;
  onMouseEnter?: () => void;
}

const NavLink = ({ href, label, isActive, target, onMouseEnter }: INavLink) => (
  <li>
    <Link 
      href={href} 
      target={target}
      onMouseEnter={onMouseEnter} 
      className={`${isActive ? "text-gray-950 dark:text-gray-100" : ""}`}>
      <span className="text-xl max-md:text-[.85rem]">
        {label}
      </span>
    </Link>
  </li>
);


export default NavLink;
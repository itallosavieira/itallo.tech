'use client';

import { NavLink } from "@/components";

interface IDropdownLinks {
  onMouseLeave: () => void;
}

const DropdownLinks = ({ onMouseLeave }: IDropdownLinks) => (
  <div onMouseLeave={onMouseLeave} className="absolute bottom-[6rem] right-0 transform -translate-x-1/2 bg-gray-50 dark:bg-gray-950 shadow-sm rounded-lg border-gray-300 border-2">
    <ul className="ml-0 list-none flex flex-col gap-4 px-8 [&>li]:mt-0 [&>li>a]:text-2xl [&>li>a]:font-semibold">
      <NavLink href="https://github.com/itallosavieira" target="_blank" label="Github" />
      <NavLink href="https://www.linkedin.com/in/itallosavieira/"  target="_blank" label="Linkedin"/>
      <NavLink href="/contact" label="CV" />
    </ul>
  </div>
);

export default DropdownLinks;

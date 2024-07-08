'use client';
import { ThemeSwitch } from "@/components";

const Sidebar = () => {
  return (
    <div className="
      
      max-lg:bottom-0 max-lg:-translate-x-1/2 max-lg:left-1/2 max-lg:flex max-lg:gap-4 max-lg:bg-white max-lg:py-3 
      max-lg:rounded-tl-md max-lg:rounded-tr-md
    ">
      <ThemeSwitch />
    </div>
  );
}

export default Sidebar;

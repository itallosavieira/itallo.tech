'use client';
import { ThemeSwitch } from "@/components";

const Sidebar = () => {
  return (
    <div className="fixed lg:ml-[-2rem] max-lg:hidden">
      <ThemeSwitch />
    </div>
  );
}

export default Sidebar;

"use client";

import { useTheme } from "@/context/theme-context";
import useBreakpoint from "@/hooks/breakpoints";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useBreakpoint();
  
  return (
    <button
      className="transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? 
        <IoSunny className="md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] mt-1" /> : 
        <IoMoon className="md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] mt-1"/>}
    </button>
  );
}

export default ThemeSwitch;
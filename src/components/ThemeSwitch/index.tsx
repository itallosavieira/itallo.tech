"use client";

import { useTheme } from "@/context/theme-context";
import { useBreakpoint } from "@/hooks/breakpoints";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useBreakpoint();
  const size = isMobile ? 28 : 22;
  
  return (
    <button
    className="transition-all flex gap-4 fixed mt-1 ml-[-3rem] max-lg:right-4"
      onClick={toggleTheme}
      >
      {theme === "light" ? 
        <IoSunny size={size} className="fill-[#545454]"/> : 
        <IoMoon size={size} className="fill-white"/>}
      </button>
  );
}

export default ThemeSwitch;
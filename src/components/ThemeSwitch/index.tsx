"use client";

import { useTheme } from "@/context/theme-context";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      className="transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? 
        <IoSunny className="w-[1.35rem] h-[1.35rem] mt-1" /> : 
        <IoMoon className="w-[1.35rem] h-[1.35rem] mt-1"/>}
    </button>
  );
}

export default ThemeSwitch;
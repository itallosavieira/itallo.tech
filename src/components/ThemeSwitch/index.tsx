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
        <IoSunny className="w-[2rem] h-[2rem] mt-1 fill-gray-500"/> : 
        <IoMoon className="w-[2rem] h-[2rem] mt-1 fill-white"/>}
    </button>
  );
}

export default ThemeSwitch;
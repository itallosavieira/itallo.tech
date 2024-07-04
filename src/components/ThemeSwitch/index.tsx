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
        <IoSunny className="w-[2rem] h-[2rem]" /> : 
        <IoMoon className="w-[2rem] h-[2rem]"/>}
    </button>
  );
}

export default ThemeSwitch;
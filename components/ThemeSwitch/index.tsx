"use client";

import { useTheme } from "@/context/theme-context";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 flex items-center justify-center transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? 
        <IoSunny className="fill-yellow-500 w-[1.5rem] h-[1.5rem]" /> : 
        <IoMoon className="w-[1.5rem] h-[1.5rem]"/>}
    </button>
  );
}

export default ThemeSwitch;
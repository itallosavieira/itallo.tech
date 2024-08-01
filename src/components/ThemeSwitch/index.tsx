"use client";

import { useTheme } from "@/context/theme-context";
import { useBreakpoint } from "@/hooks/breakpoints";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMoon, IoSunny } from "react-icons/io5";
import { MenuItem } from "@/components";

import Link from "next/link";
const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useBreakpoint();
  const size = isMobile ? 28 : 22;
  
  return (
    <div className="flex lg:flex-col transition-all lg:fixed mt-1 ml-[-3rem] max-lg:right-4 gap-4">
    <button
      className="max-lg:order-3"
      onClick={toggleTheme}
      >
      {theme === "light" ? 
        <IoSunny size={size} className="fill-[#545454]"/> : 
        <IoMoon size={size} className="fill-white"/>}
      </button>
      <Link className="border-none" href="https://linkedin.com/in/itallosavieira" target="_blank"><FaLinkedin size={size - 2} /></Link>
      <Link className="border-none" href="https://github.com/itallosavieira" target="_blank"><FaGithub size={size - 2} /></Link>
  </div>
);
}

export default ThemeSwitch;

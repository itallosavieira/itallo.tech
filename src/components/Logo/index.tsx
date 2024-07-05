'use client';

import { useTheme } from "@/context/theme-context";
import useBreakpoint from "@/hooks/breakpoints";

interface LogoSvgProps {
  color: string;
}

const LogoSvg = ({ color }: LogoSvgProps) => {
  const isMobile = useBreakpoint();
  const size = !isMobile ? 22 : 18;
  return (
    <svg width={size} height={size} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.11581 22.0002V1.24553L0.355791 0.000244141H0V20.755L6.76002 22.0002H7.11581Z" fill={color}/>
      <path d="M16.6609 22.0002V1.24553L9.90087 0.000244141H9.54508V20.755L16.3051 22.0002H16.6609Z" fill={color}/>
      <path d="M25.998 7.88642L19.4812 7.92683L19.1284 13.8046L19.1304 14.1139L25.6472 14.0735L26 8.19565L25.998 7.88642Z" fill={color}/>
    </svg>
  );
};

const Logo = () => {
  const { theme } = useTheme();

  return (
    theme === 'light' ?
      <LogoSvg color="#000" /> :
      <LogoSvg color="#fff" />
  );
}

export default Logo;
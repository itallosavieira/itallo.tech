'use client';

import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesk, setIsDesk] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsDesk(window.innerWidth > 1023);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isDesk };
};

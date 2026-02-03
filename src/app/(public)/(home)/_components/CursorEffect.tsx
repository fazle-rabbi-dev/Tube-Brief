"use client";

import SplashCursor from '@/components/ui/SplashCursor'
import { isMobileDevice } from '@/lib/utils';
import { useEffect, useState } from 'react';

const CursorEffect = () => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted || isMobileDevice()) return null;

   return (
      <SplashCursor />
   )
}

export default CursorEffect
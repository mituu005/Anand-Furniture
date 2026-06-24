'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';

    // Simulate progress bar loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Fade out preloader after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#14120e] text-[#f5f0eb]"
        >
          <div className="flex flex-col items-center max-w-xs w-full px-6">
            {/* Logo Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-32 h-20 mb-8"
            >
              <Image
                src="/logo-icon-light.png"
                alt="Anand Furnitures"
                fill
                className="object-contain animate-pulse"
                priority
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.4em' }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
              className="text-lg font-bold text-center tracking-[0.4em] mb-6 uppercase text-[#e5dcd3]"
            >
              Anand Furnitures
            </motion.h1>

            {/* Loading Bar Container */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-accent to-[#e5c18e] rounded-full"
              />
            </div>

            {/* Loading Text */}
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground text-center font-medium">
              Loading {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

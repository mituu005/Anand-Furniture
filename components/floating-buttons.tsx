'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=919421467198&text=Hello%20Anand%20Furniture%2C%20I%20would%20like%20to%20inquire%20about%20your%20furniture%20and%20PVC%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl flex"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} />
        </Link>
      </motion.div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

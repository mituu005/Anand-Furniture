'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt="Anand Furnitures Logo"
              width={48}
              height={28}
              className="h-9 w-auto object-contain"
              priority
            />
            <span className="font-bold text-lg hidden sm:block">Anand Furnitures</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const href = isHome ? item.href : `/${item.href}`;
              return (
                <Link
                  key={item.href}
                  href={href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={isHome ? '#contact' : '/#contact'}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => {
              const href = isHome ? item.href : `/${item.href}`;
              return (
                <Link
                  key={item.href}
                  href={href}
                  className="block px-4 py-2 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={isHome ? '#contact' : '/#contact'}
              className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

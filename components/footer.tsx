'use client';

import Link from 'next/link';
import NextImage from 'next/image';
import { Heart, Image, Share2, Link as LinkIcon, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <NextImage
                src="/logo-icon-light.png"
                alt="Anand Furnitures Logo"
                width={48}
                height={28}
                className="h-9 w-auto object-contain"
              />
              <span className="font-bold text-lg">Anand Furnitures</span>
            </div>
            <p className="text-background/70 text-sm">
              Premium furniture and PVC solutions for your dream home and office spaces.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Heart, label: 'Facebook', href: '#' },
                { icon: Image, label: 'Instagram', href: '#' },
                { icon: Share2, label: 'Twitter', href: '#' },
                { icon: LinkIcon, label: 'LinkedIn', href: '#' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-accent flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              {['Home', 'Products', 'Gallery', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Collections</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              {['Custom Sofas', 'Dining Sets', 'Bedroom Furniture', 'Office Desks', 'PVC Panels', 'Wardrobes'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#products" className="hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1 text-accent" />
                <a href="tel:+919421467198" className="hover:text-accent transition-colors">
                  +91 94214 67198
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1 text-accent" />
                <a href="mailto:jainajay2882@gmail.com" className="hover:text-accent transition-colors">
                  jainajay2882@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-accent" />
                <span>Anand Interior, Dongaon Road, Near Jagu Motor Garage, Mehkar - Maharashtra 443301</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/60 text-sm">
          <p>&copy; 2024 Anand Furnitures & PVC Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

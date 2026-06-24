'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { 
    id: 1, 
    src: '/gallery-1.png', 
    alt: 'Modern Living Room Panels', 
    category: 'Living Room', 
    style: 'Contemporary WPC Fluted Wood', 
    designer: 'Anand Design Studio', 
    tags: ['WPC Wall Panels', 'Linear LED Seams', 'Warm Oak'] 
  },
  { 
    id: 2, 
    src: '/gallery-2.png', 
    alt: 'Contemporary Media Wall Bedroom', 
    category: 'Bedroom', 
    style: 'Minimalist Walnut Suite', 
    designer: 'Anand Design Studio', 
    tags: ['Marble Backing Slab', 'Floating Console', 'Ambient Backlight'] 
  },
  { 
    id: 3, 
    src: '/gallery-3.png', 
    alt: 'Luxury Dining Ceiling & Spaces', 
    category: 'Dining', 
    style: 'Seamless Interlocking Ceilings', 
    designer: 'Anand Design Studio', 
    tags: ['Glossy PVC Panels', 'Warm Spotlights', 'Anti-Mould'] 
  },
  { 
    id: 4, 
    src: '/gallery-4.png', 
    alt: 'Office Executive Workspace', 
    category: 'Office', 
    style: 'Ergonomic Premium Workstation', 
    designer: 'Anand Design Studio', 
    tags: ['Melamine Oak Desk', 'Cable Grommets', 'Steel Support'] 
  },
  { 
    id: 5, 
    src: '/gallery-5.png', 
    alt: 'Elegant Classical Study Library', 
    category: 'Study', 
    style: 'Luxury Teak Wood Cabinetry', 
    designer: 'Anand Design Studio', 
    tags: ['Veneer Bookcases', 'Solid Brass Pulls', 'LED Shelf Lights'] 
  },
  { 
    id: 6, 
    src: '/gallery-6.png', 
    alt: 'High-Gloss Modular Kitchen', 
    category: 'Kitchen', 
    style: 'L-Shaped Premium Acrylic', 
    designer: 'Anand Design Studio', 
    tags: ['Acrylic Cabinets', 'Marine Plywood Core', 'Tandem Drawers'] 
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Study', 'Kitchen'];

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === 'All' || image.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance-custom">
            Interior Inspirations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of beautifully designed interiors showcasing our craftsmanship.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-nowrap md:justify-center gap-2 bg-[#1a1610]/5 dark:bg-[#f5f0eb]/5 p-1.5 rounded-full max-w-max md:max-w-4xl mx-auto border border-foreground/10 min-w-max"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 cursor-pointer z-10"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryGallery"
                    className="absolute inset-0 bg-accent text-accent-foreground rounded-full -z-10 shadow-md shadow-accent/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`transition-colors duration-300 ${
                    activeCategory === cat ? 'text-accent-foreground' : 'text-foreground/75 hover:text-foreground'
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  idx % 3 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`relative w-full ${
                  idx % 3 === 0 
                    ? 'h-64 md:h-[41.5rem] lg:h-[48rem]' 
                    : 'h-64 md:h-80 lg:h-[23rem]'
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Modern Editorial Overlay */}
                <div className="absolute inset-0 bg-black/20 dark:bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 z-10">
                  <div className="bg-background/95 dark:bg-[#1a1610]/95 backdrop-blur-md border border-border/40 p-5 rounded-xl shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-3">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-2 py-0.5 rounded-full">
                        {image.category}
                      </span>
                      <span className="text-[9px] text-muted-foreground font-semibold">
                        {image.designer}
                      </span>
                    </div>
                    
                    {/* Title & Style */}
                    <div>
                      <h4 className="text-foreground font-extrabold text-base tracking-tight leading-snug">
                        {image.alt}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                        Style: {image.style}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {image.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-semibold text-foreground/80 bg-foreground/5 dark:bg-foreground/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/15 cursor-pointer"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

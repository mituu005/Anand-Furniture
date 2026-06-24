'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { products } from '@/lib/products-data';

const categories = [
  'All',
  'PVC Furniture',
  'Modular Kitchen',
  'Wardrobes',
  'TV Units',
  'Office Furniture',
  'Interior Panels',
  'Accessories',
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance-custom">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of premium furniture and PVC solutions designed to elevate your interior spaces.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-md mx-auto mb-8 relative"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by name or category..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 shadow-sm"
          />
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
                onClick={() => setSelectedCategory(cat)}
                className="relative px-5 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 cursor-pointer z-10"
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryProduct"
                    className="absolute inset-0 bg-accent text-accent-foreground rounded-full -z-10 shadow-md shadow-accent/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`transition-colors duration-300 ${
                    selectedCategory === cat ? 'text-accent-foreground' : 'text-foreground/75 hover:text-foreground'
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="min-h-[400px]">
          {filteredProducts.length === 0 ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16 bg-muted/30 rounded-xl border border-dashed border-border"
              >
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/15 cursor-pointer"
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.04, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 hover:border-accent/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 bg-card/60 backdrop-blur-sm flex flex-col h-full"
                  >
                    <Link href={`/products/${product.slug}`} className="flex flex-col h-full flex-grow">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-muted">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority={idx < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14120e]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Premium Material Badge */}
                        <div className="absolute top-4 right-4 z-10 glass-effect text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 text-foreground border border-white/20 rounded-md shadow-sm">
                          {product.materialInfo.includes('WPC') ? 'WPC Composite' :
                           product.materialInfo.includes('Plywood') ? 'BWP Plywood' :
                           product.materialInfo.includes('Blockboard') ? 'BWR Blockboard' :
                           product.materialInfo.includes('PVC') && product.materialInfo.includes('MDF') ? 'PVC & MDF' :
                           product.materialInfo.includes('PVC') ? 'Premium PVC' :
                           product.materialInfo.includes('Wood') ? 'Engineered Wood' :
                           product.materialInfo.includes('Brass') || product.materialInfo.includes('Alloy') ? 'Premium Alloy' :
                           product.materialInfo.includes('Stainless Steel') ? 'SS 304 Steel' : 'Premium Material'}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          {/* Category and Swatches Header */}
                          <div className="flex items-center justify-between mb-3.5">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                                {product.category}
                              </span>
                            </div>
                            
                            {/* Color Swatches */}
                            <div className="flex gap-1.5">
                              {product.colors?.slice(0, 3).map((col, cIdx) => (
                                <div
                                  key={cIdx}
                                  title={col.name}
                                  className="w-3.5 h-3.5 rounded-full border border-border/85 shadow-sm hover:scale-125 transition-transform duration-200"
                                  style={{ backgroundColor: col.hex || '#ccc' }}
                                />
                              ))}
                              {product.colors && product.colors.length > 3 && (
                                <span className="text-[10px] text-muted-foreground font-semibold self-center ml-0.5">
                                  +{(product.colors.length - 3)}
                                </span>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl font-extrabold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight">
                            {product.name}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Technical Highlights */}
                          <ul className="mb-6 space-y-1.5 text-xs text-muted-foreground/80 font-medium">
                            {product.features.slice(0, 2).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-accent/70" />
                                <span className="line-clamp-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Premium Footer CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                          <span className="text-[10px] text-muted-foreground/70 font-bold uppercase tracking-wider">
                            Handcrafted Quality
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-extrabold text-accent group-hover:text-accent/90 transition-colors uppercase tracking-wider">
                            <span>Explore Design</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Can&apos;t find what you&apos;re looking for?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer"
              >
                Customize Your Design
              </motion.button>
            </Link>
            <a href="/catalog.pdf" download="Anand_Furnitures_uPVC_Catalog.pdf">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 shadow-md cursor-pointer"
              >
                Download Sample Catalog
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

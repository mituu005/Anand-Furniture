'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about-image.png"
              alt="Anand Furnitures showroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-semibold text-sm">About Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance-custom">
              Crafting Excellence Since 2012
            </h2>

            <p className="text-lg text-muted-foreground">
              Anand Furnitures & PVC Solutions was founded with a passion for creating beautiful, 
              functional spaces. What started as a small workshop has grown into a trusted name 
              in premium furniture and interior design solutions.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver exceptional furniture and design solutions that elevate living 
                    spaces while maintaining the highest standards of quality and craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Quality, integrity, sustainability, and customer satisfaction are at the 
                    heart of everything we do. We believe in creating pieces that last generations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Our Expertise</h3>
                  <p className="text-muted-foreground">
                    With over a decade of experience, our team combines traditional woodworking 
                    techniques with modern design trends to create timeless pieces.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

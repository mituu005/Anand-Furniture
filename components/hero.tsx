'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-gradient-to-br from-background via-warm-beige/10 to-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full"
            >
              <span className="text-accent font-semibold text-sm">Premium Furniture & PVC Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance-custom"
            >
              Elevate Your Space with Timeless Design
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Discover handcrafted furniture and premium PVC solutions that transform your home or office into a sanctuary of elegance and comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link
                href="#products"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl hover:shadow-accent/20 text-center"
              >
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all hover:scale-[1.03] active:scale-[0.97] text-center"
              >
                Schedule Consultation
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-8 pt-8"
            >
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '10+', label: 'Years Experience' },
                { number: '1000+', label: 'Designs' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-accent">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
            }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hero-furniture.png"
              alt="Premium furniture showcase"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    image: '/testimonial-1.png',
    text: 'The furniture quality is exceptional. Every piece is a masterpiece. The customer service was outstanding throughout the process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Verma',
    role: 'Interior Designer',
    image: '/testimonial-2.png',
    text: 'I recommend Anand Furnitures to all my clients. Their attention to detail and craftsmanship is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Office Manager',
    image: '/testimonial-3.png',
    text: 'Transformed our office space completely. The furniture is not only beautiful but incredibly comfortable and durable.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance-custom">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers who have transformed their spaces with Anand Furnitures.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted ring-2 ring-accent/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Join hundreds of satisfied customers</p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/15 cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

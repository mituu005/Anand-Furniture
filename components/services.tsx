'use client';

import { motion } from 'framer-motion';
import { Hammer, Pencil, Truck, Wrench } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Pencil,
    title: 'Custom Design',
    description: 'Work with our expert designers to create furniture tailored to your space and preferences.',
  },
  {
    id: 2,
    icon: Hammer,
    title: 'Premium Craftsmanship',
    description: 'Each piece is handcrafted using the finest materials and traditional woodworking techniques.',
  },
  {
    id: 3,
    icon: Truck,
    title: 'Free Delivery',
    description: 'Professional delivery and installation services included for all orders.',
  },
  {
    id: 4,
    icon: Wrench,
    title: 'Lifetime Support',
    description: 'Comprehensive warranty and maintenance support for all our products.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance-custom">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing exceptional service and quality at every step of your journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center mb-6 transition-all">
                  <Icon size={32} className="text-accent group-hover:text-accent-foreground group-hover:rotate-12 transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 pt-20 border-t border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center">Our Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Create custom designs just for you' },
              { step: '03', title: 'Crafting', desc: 'Build with premium materials' },
              { step: '04', title: 'Delivery', desc: 'Professional installation included' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>

                {/* Connector Line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+16px)] w-12 h-1 bg-accent/20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

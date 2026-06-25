'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/send-email';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        console.error('Email send failed:', result.error);
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance-custom">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to transform your space? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 94214 67198',
                href: 'tel:+919421467198',
                target: undefined,
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'jainajay2882@gmail.com',
                href: 'mailto:jainajay2882@gmail.com',
                target: undefined,
              },
              {
                icon: MapPin,
                title: 'Address',
                content: 'Anand Interior, Dongaon Road, Near Jagu Motor Garage, Mehkar - Maharashtra 443301',
                href: 'https://www.google.com/maps/place/Anand+interior+and+PVC+furniture/@20.1575155,76.5821445,17z/data=!4m10!1m2!2m1!1sanand+furniture+mehakar!3m6!1s0x3bd099450a9811e5:0xf4c7811ff401b80b!8m2!3d20.1575155!4d76.5866506!15sChZhbmFuZCBmdXJuaXR1cmUgbWVoa2FykgEKd2hvbGVzYWxlcuABAA!16s%2Fg%2F11rc495zbp',
                target: '_blank',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 bg-accent/5 rounded-lg border border-accent/20"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: 11:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 space-y-6 bg-card p-8 rounded-xl border border-border"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                {...register('name')}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground transition-all duration-300 hover:border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none shadow-sm"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                {...register('email')}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground transition-all duration-300 hover:border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none shadow-sm"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="+91 94214 67198"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground transition-all duration-300 hover:border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none shadow-sm"
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                {...register('subject')}
                placeholder="What is this about?"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground transition-all duration-300 hover:border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none shadow-sm"
              />
              {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                {...register('message')}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground transition-all duration-300 hover:border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none resize-none shadow-sm"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-200">
                Message sent successfully! We&apos;ll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitStatus === 'loading'}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 shadow-md hover:shadow-lg hover:shadow-accent/15 cursor-pointer"
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 overflow-hidden rounded-xl border border-border shadow-lg bg-card"
        >
          <iframe
            src="https://maps.google.com/maps?q=Anand%20interior%20and%20PVC%20furniture,%20Mehkar&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anand Interior and PVC Furniture Mehkar Showroom Location"
            className="w-full h-[450px] grayscale dark:invert dark:opacity-85 hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/products-data';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';
import { 
  MessageCircle, 
  Phone, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Ruler, 
  Palette, 
  Grid,
  ChevronRight
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(product?.image || '');

  if (!product) {
    return (
      <main className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              The product you are looking for does not exist or has been moved.
            </p>
            <Link href="/#products">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2 mx-auto">
                <ArrowLeft size={18} />
                Back to Collections
              </button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  // Prefilled WhatsApp message
  const waMessage = encodeURIComponent(
    `Hello Anand Furniture, I am interested in inquiring about the "${product.name}" (${product.category}). Please share more details regarding pricing and options.`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919421467198&text=${waMessage}`;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumbs & Back Nav */}
      <div className="pt-24 pb-4 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/#products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
          </div>

          <Link href="/#products" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft size={16} />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Active Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden bg-muted border border-border shadow-lg"
              >
                <Image
                  src={activeImage || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImage === img 
                          ? 'border-accent scale-105 shadow-md shadow-accent/15' 
                          : 'border-border hover:border-accent/40'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} gallery image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications & Details */}
            <div className="space-y-8">
              <div>
                {/* Category tag */}
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-sm shadow-accent/5">
                  {product.category}
                </span>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  {product.detailsDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-accent" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      key={idx} 
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Check size={10} className="stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Specifications Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border pt-6">
                
                {/* Material Info */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground/80 flex items-center gap-2">
                    <Grid size={16} className="text-accent" />
                    Material
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.materialInfo}
                  </p>
                </div>

                {/* Available Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-foreground/80 flex items-center gap-2">
                      <Ruler size={16} className="text-accent" />
                      Available Sizes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2.5 py-1 rounded border border-border text-foreground/80">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2 sm:col-span-2">
                    <h4 className="text-sm font-bold text-foreground/80 flex items-center gap-2">
                      <Palette size={16} className="text-accent" />
                      Available Colors
                    </h4>
                    <div className="flex flex-wrap gap-3 items-center">
                      {product.colors.map((color, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg border border-border/80">
                          {color.hex && (
                            <span 
                              className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-sm"
                              style={{ backgroundColor: color.hex }}
                            />
                          )}
                          <span className="text-xs text-foreground/80 font-medium">{color.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Applications / Use Cases */}
              {product.applications && product.applications.length > 0 && (
                <div className="border-t border-border pt-6 space-y-3">
                  <h4 className="text-sm font-bold text-foreground/80">
                    Recommended Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="text-xs bg-accent/5 text-accent border border-accent/20 px-3 py-1 rounded-full font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="border-t border-border pt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20ba56] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle size={22} />
                  WhatsApp Inquiry
                </a>

                <a
                  href="tel:+911234567890"
                  className="px-8 py-4 border-2 border-accent text-accent rounded-xl font-bold hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}

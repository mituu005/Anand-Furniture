import Preloader from '@/components/preloader';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Products from '@/components/products';
import Gallery from '@/components/gallery';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Preloader />
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Services />
      <Testimonials />
      <About />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

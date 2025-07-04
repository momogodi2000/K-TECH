import React, { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Stats from '@/components/sections/Stats';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

// Simple error boundary for sections
class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Optionally log error
    // console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-center text-red-600 my-8">Une erreur est survenue dans cette section.</div>;
    }
    return this.props.children;
  }
}

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Accueil"
        description="K-TECH MULTI SERVICES - Votre partenaire technologique de confiance à Douala. Services informatiques professionnels: maintenance PC, réparation smartphones, vidéosurveillance, infographie."
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionErrorBoundary>
          {/* Hero Section */}
          <Hero />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* Stats Section */}
          <Stats />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* Services Section */}
          <Services />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* About Section */}
          <About />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* Testimonials Section */}
          <Testimonials />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* FAQ Section */}
          <FAQ />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* CTA Section */}
          <CTA />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* Contact Section */}
          <Contact />
        </SectionErrorBoundary>
        
        <SectionErrorBoundary>
          {/* WhatsApp Floating Button */}
          <Suspense fallback={null}>
            <WhatsAppButton />
          </Suspense>
        </SectionErrorBoundary>
      </motion.div>
    </>
  );
};

export default Home;
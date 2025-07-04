import React, { useEffect } from 'react';
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
        {/* Hero Section */}
        <Hero />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Services Section */}
        <Services />
        
        {/* About Section */}
        <About />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <CTA />
        
        {/* Contact Section */}
        <Contact />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </motion.div>
    </>
  );
};

export default Home;
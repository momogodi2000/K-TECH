import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { ArrowRight, CheckCircle, Zap, Shield, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';
import TechModel from '@/components/3d/TechModel';

const Hero = () => {
  const features = [
    { icon: Zap, text: 'Service Rapide', color: 'text-yellow-500' },
    { icon: Shield, text: 'Garantie 3 Mois', color: 'text-green-500' },
    { icon: Clock, text: '7j/7 Urgences', color: 'text-blue-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-gradient" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInDown}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Services Professionnels Certifiés
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="text-gradient">{COMPANY_INFO.name}</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700">
                {COMPANY_INFO.slogan}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Solutions informatiques complètes à Douala. Maintenance PC, réparation smartphones, 
              vidéosurveillance et design graphique. Service professionnel avec garantie.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/quote"
                className="btn-accent group"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                className="btn-outline"
              >
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                Appel d'Urgence
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-primary-600">500+</h4>
                  <p className="text-sm text-gray-600">Clients Satisfaits</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary-600">24/7</h4>
                  <p className="text-sm text-gray-600">Support Disponible</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary-600">100%</h4>
                  <p className="text-sm text-gray-600">Satisfaction Garantie</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-radial-light rounded-full blur-3xl" />
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                <Float
                  speed={4}
                  rotationIntensity={1}
                  floatIntensity={2}
                >
                  <TechModel />
                </Float>
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={2}
                />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
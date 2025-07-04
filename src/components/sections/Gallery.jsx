import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image, 
  Monitor, 
  Smartphone, 
  Camera, 
  Palette,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ANIMATION_VARIANTS } from '@/utils/constants';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'Tous', icon: Image },
    { id: 'computer-maintenance', label: 'Maintenance', icon: Monitor },
    { id: 'phone-repair', label: 'Smartphones', icon: Smartphone },
    { id: 'video-surveillance', label: 'Surveillance', icon: Camera },
    { id: 'graphic-design', label: 'Design', icon: Palette }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Maintenance PC Entreprise',
      category: 'computer-maintenance',
      description: 'Maintenance préventive et curative pour entreprises',
      image: '/images/gallery/computer-maintenance-1.jpg',
      tags: ['PC', 'Maintenance', 'Entreprise']
    },
    {
      id: 2,
      title: 'Réparation iPhone',
      category: 'phone-repair',
      description: 'Remplacement d\'écran iPhone professionnel',
      image: '/images/gallery/phone-repair-1.jpg',
      tags: ['iPhone', 'Écran', 'Réparation']
    },
    {
      id: 3,
      title: 'Système de Surveillance',
      category: 'video-surveillance',
      description: 'Installation caméras IP haute définition',
      image: '/images/gallery/surveillance-1.jpg',
      tags: ['Caméras', 'Surveillance', 'Installation']
    },
    {
      id: 4,
      title: 'Logo Entreprise',
      category: 'graphic-design',
      description: 'Création logo moderne et professionnel',
      image: '/images/gallery/design-1.jpg',
      tags: ['Logo', 'Design', 'Entreprise']
    },
    {
      id: 5,
      title: 'Réseau Local',
      category: 'computer-maintenance',
      description: 'Configuration réseau WiFi entreprise',
      image: '/images/gallery/network-1.jpg',
      tags: ['Réseau', 'WiFi', 'Configuration']
    },
    {
      id: 6,
      title: 'Réparation Samsung',
      category: 'phone-repair',
      description: 'Changement batterie Samsung Galaxy',
      image: '/images/gallery/phone-repair-2.jpg',
      tags: ['Samsung', 'Batterie', 'Réparation']
    },
    {
      id: 7,
      title: 'Caméras Extérieures',
      category: 'video-surveillance',
      description: 'Installation caméras extérieures résistance',
      image: '/images/gallery/surveillance-2.jpg',
      tags: ['Extérieur', 'Résistance', 'Installation']
    },
    {
      id: 8,
      title: 'Carte de Visite',
      category: 'graphic-design',
      description: 'Design carte de visite professionnelle',
      image: '/images/gallery/design-2.jpg',
      tags: ['Carte', 'Visite', 'Design']
    },
    {
      id: 9,
      title: 'Serveur Entreprise',
      category: 'computer-maintenance',
      description: 'Configuration serveur de fichiers',
      image: '/images/gallery/server-1.jpg',
      tags: ['Serveur', 'Fichiers', 'Configuration']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, filteredItems]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Notre Portfolio
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos réalisations et la qualité de nos services 
            à travers notre galerie de projets.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                ${selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }
              `}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => openLightbox(item, index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 p-3 rounded-full shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Aucun projet trouvé pour cette catégorie.</p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl w-full">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedImage.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  {currentImageIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Logo animé */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
          K
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-lg"
        />
      </motion.div>

      {/* Texte de chargement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          K-TECH MULTI SERVICES
        </h3>
        <div className="flex items-center space-x-1">
          <span className="text-gray-600">Chargement</span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-1 h-1 bg-primary-600 rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Barre de progression */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-1 bg-primary-600 rounded-full max-w-xs"
      />
    </div>
  );
};

export default Loader;
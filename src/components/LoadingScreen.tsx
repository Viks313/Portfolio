import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl font-poppins font-bold bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
        >
          VS
        </motion.div>
        <div className="mt-4">
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="w-full h-full bg-gradient-to-r from-accent-blue to-accent-green"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
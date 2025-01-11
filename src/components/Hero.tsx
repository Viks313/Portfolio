import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
          >
            Vikas Sana
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Building Scalable Solutions with Code & Cloud',
                1000,
              ]}
              wrapper="h2"
              className="text-2xl md:text-4xl font-poppins mb-8 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-accent-blue to-accent-green text-primary font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-accent-blue" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
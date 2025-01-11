import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Cloud, Database } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Cloud Solutions Architect',
                2000,
                'System Design Specialist',
                2000
              ]}
              wrapper="h3"
              className="text-xl md:text-2xl font-semibold text-accent-blue mb-4"
              repeat={Infinity}
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 3 years of specialized experience in Java backend development and cloud solutions,
              I craft scalable, efficient applications that solve real-world problems.
              My expertise spans across modern web technologies, cloud platforms, and enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-accent-blue mb-4" />,
                title: "Backend Development",
                description: "Specialized in Java, Spring Boot, and Python for robust server-side solutions"
              },
              {
                icon: <Cloud className="w-8 h-8 text-accent-blue mb-4" />,
                title: "Cloud Architecture",
                description: "Expert in AWS and Azure cloud services for scalable infrastructure"
              },
              {
                icon: <Database className="w-8 h-8 text-accent-blue mb-4" />,
                title: "System Design",
                description: "Focus on scalable, maintainable architectures for enterprise applications"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                {item.icon}
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = {
    Backend: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 80 }
    ],
    Frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5/CSS3', level: 85 }
    ],
    Cloud: [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 80 }
    ],
    Database: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 }
    ]
  };

  return (
    <section id="skills" className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-accent-blue mb-4">{category}</h3>
              {items.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-accent-blue">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="skill-progress"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "RecruitEdgeAI",
      role: "Senior Full Stack Developer",
      period: "2023 - Present",
      description: "Leading the development of AI-powered recruitment solutions using Java Spring Boot and React.js. Implementing cloud-native architectures on AWS.",
      achievements: [
        "Architected and implemented microservices-based backend system",
        "Reduced infrastructure costs by 40% through cloud optimization",
        "Led a team of 5 developers in agile development cycles"
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description: "Developed enterprise solutions for banking clients using Java and Angular. Managed cloud deployments on Azure.",
      achievements: [
        "Implemented secure payment processing system",
        "Improved application performance by 60%",
        "Mentored junior developers in best practices"
      ]
    },
    {
      company: "Smart Tutor",
      role: "Software Developer",
      period: "2020 - 2021",
      description: "Built educational technology solutions using Python and React. Implemented real-time features and database optimizations.",
      achievements: [
        "Developed real-time collaboration features",
        "Optimized database queries reducing load times by 50%",
        "Integrated third-party education APIs"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-8">
                <div className="flex items-center space-x-2 text-accent-blue mb-4 md:mb-0">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>

                <div className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-4">
                    <Briefcase className="w-5 h-5 text-accent-blue" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg text-accent-blue mb-4">{exp.role}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="text-accent-blue mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456"
    },
    {
      title: "Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-204-789012"
    }
  ];

  const achievements = [
    "Led development of high-performance microservices architecture",
    "Reduced cloud infrastructure costs by 40%",
    "Mentored 10+ junior developers",
    "Implemented CI/CD pipelines reducing deployment time by 60%"
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-accent-blue mb-8 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{cert.title}</h4>
                <p className="text-accent-blue mb-2">{cert.issuer}</p>
                <div className="flex justify-between text-gray-400">
                  <span>Issued: {cert.date}</span>
                  <span>ID: {cert.credentialId}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-accent-blue mb-8 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Key Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <span className="text-accent-blue">•</span>
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
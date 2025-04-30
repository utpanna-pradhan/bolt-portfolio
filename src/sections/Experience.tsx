import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <motion.div 
      className="py-20 bg-white"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and the skills I've developed along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10"></div>
              
              {/* Timeline content */}
              <div className="md:w-1/2 p-6">
                <div
                  className={`glass-card p-6 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{experience.title}</h3>
                  <div className="mb-4">
                    <div className="flex items-center text-neutral-700 mb-1">
                      <Briefcase size={16} className="mr-2 text-primary-500" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center text-neutral-600 mb-1">
                      <MapPin size={16} className="mr-2 text-primary-500" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Calendar size={16} className="mr-2 text-primary-500" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <ul className="mb-4 list-disc list-inside space-y-1 text-neutral-700">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 rounded-full bg-secondary-100 text-secondary-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
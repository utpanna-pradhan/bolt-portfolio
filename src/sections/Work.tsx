import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github as GitHub, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useThemeStore } from '../store/themeStore';

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const { isDarkMode } = useThemeStore();

  return (
    <motion.div 
      className={`relative z-10 py-20 ${isDarkMode ? 'bg-neutral-900/80' : 'bg-white/80'} backdrop-blur-sm`}
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
          <h2 className={`section-title ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Featured Projects
          </h2>
          <p className={`section-subtitle mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Explore some of my recent work and creative endeavors
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className="lg:w-3/5 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode 
                      ? 'from-neutral-900/80 to-transparent' 
                      : 'from-black/50 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-6 left-6 flex space-x-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <GitHub size={20} className="text-white" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-neutral-700 text-neutral-200' 
                            : 'bg-neutral-200 text-neutral-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 text-lg font-medium ${
                      isDarkMode ? 'text-primary-400' : 'text-primary-500'
                    } hover:underline`}
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <ArrowRight size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
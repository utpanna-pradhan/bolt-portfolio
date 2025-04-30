import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handleSelectPost = (id: number) => {
    setSelectedPost(id === selectedPost ? null : id);
  };

  return (
    <motion.div 
      className="py-20 bg-neutral-50"
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
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle mx-auto">
            Thoughts, ideas, and insights about technology and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`glass-card overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedPost === post.id ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleSelectPost(post.id)}
              layoutId={`post-${post.id}`}
            >
              <div className={`flex flex-col ${selectedPost === post.id ? 'md:flex-row' : ''}`}>
                <div className={`${selectedPost === post.id ? 'md:w-1/3' : 'w-full'} h-48 md:h-60 overflow-hidden`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className={`p-6 ${selectedPost === post.id ? 'md:w-2/3' : 'w-full'}`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-accent-100 text-accent-700">
                      {post.category}
                    </span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{post.title}</h3>
                  
                  <p className="text-neutral-600 mb-4">
                    {selectedPost === post.id ? post.content : post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-neutral-700">By {post.author}</span>
                    <motion.div 
                      className="flex items-center text-primary-500 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedPost === post.id ? "Read less" : "Read more"}
                      <ChevronRight size={16} className="ml-1" />
                    </motion.div>
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

export default Blog;
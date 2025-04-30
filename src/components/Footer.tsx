import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Portfolio</h3>
            <p className="text-neutral-400 mb-4">
              Building beautiful digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#work" className="text-neutral-400 hover:text-white transition-colors">Work</a></li>
              <li><a href="#experience" className="text-neutral-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#blog" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-neutral-400">
              <p className="mb-2">Email: hello@example.com</p>
              <p className="mb-2">Phone: +1 (123) 456-7890</p>
              <p>Location: San Francisco, CA</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
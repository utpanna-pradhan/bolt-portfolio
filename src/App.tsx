import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ThemeToggle from './components/ThemeToggle';
import { useThemeStore } from './store/themeStore';
import DayBackground from './components/DayBackground';
import NightBackground from './components/NightBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'dark bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-800'
    }`}>
      <ThemeToggle />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main className="relative">
        {isDarkMode ? <NightBackground /> : <DayBackground />}
        
        <div className="relative z-10">
          <section id="home">
            <Home />
          </section>
          
          <section id="work">
            <Work />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="blog">
            <Blog />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      
      <Footer />
      <Chatbot isOpen={isChatbotOpen} onToggle={toggleChatbot} />
    </div>
  );
}

export default App;
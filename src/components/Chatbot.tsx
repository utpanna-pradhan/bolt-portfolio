import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm your virtual assistant. How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'll get back to you soon.",
        "That's an interesting question! Let me provide some information.",
        "I appreciate your inquiry. I'll be happy to help with that.",
        "Got it! Is there anything else you'd like to know?",
        "Thanks for reaching out. Let me know if you need anything else."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="fixed bottom-5 right-5 z-50 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200"
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      
      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-5 z-50 w-80 md:w-96 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col bg-white border border-neutral-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Chatbot Header */}
            <div className="bg-primary-500 text-white p-4">
              <h3 className="font-medium">Chat with me</h3>
              <p className="text-xs opacity-80">I'll respond within a few seconds</p>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-primary-500 text-white ml-auto rounded-br-none' 
                      : 'bg-neutral-100 rounded-bl-none'
                  }`}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {message.text}
                </motion.div>
              ))}
            </div>
            
            {/* Input Field */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-neutral-200 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                type="submit"
                className="bg-primary-500 text-white p-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
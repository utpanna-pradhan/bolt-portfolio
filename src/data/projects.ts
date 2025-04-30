interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://project1.com",
    github: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Travel Companion App",
    description: "A travel companion app that helps users plan their trips, discover attractions, and track expenses. Built with React Native and Firebase.",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "Firebase", "Google Maps API"],
    link: "https://project2.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered content generator that creates articles, social media posts, and marketing copy based on user prompts. Utilizes OpenAI's GPT model.",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    link: "https://project3.com",
    github: "https://github.com/yourusername/project3"
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness tracking app that monitors workouts, nutrition, and sleep patterns. Provides personalized recommendations.",
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    link: "https://project4.com"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time chat application with features like direct messaging, group chats, file sharing, and read receipts. Built with Socket.io and React.",
    image: "https://images.pexels.com/photos/3876957/pexels-photo-3876957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://project5.com",
    github: "https://github.com/yourusername/project5"
  },
  {
    id: 6,
    title: "Portfolio Website Template",
    description: "A customizable portfolio website template for developers and designers. Features a modern design, animations, and responsive layout.",
    image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "https://project6.com",
    github: "https://github.com/yourusername/project6"
  }
];
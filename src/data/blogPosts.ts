interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Exploring the latest trends and technologies that will shape the future of web development in the coming years.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    author: "John Doe",
    date: "April 15, 2025",
    category: "Web Development",
    image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt: "Learn advanced patterns and best practices for using React Hooks in your applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    author: "Jane Smith",
    date: "March 22, 2025",
    category: "React",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Complete Guide to Three.js for Interactive Web Graphics",
    excerpt: "Everything you need to know about creating stunning 3D graphics on the web using Three.js.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    author: "Alex Johnson",
    date: "February 18, 2025",
    category: "Three.js",
    image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "Designing for Accessibility: Best Practices for Inclusive Websites",
    excerpt: "How to create websites that are accessible to all users, including those with disabilities.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    author: "Sarah Williams",
    date: "January 30, 2025",
    category: "Accessibility",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readTime: "6 min read"
  }
];
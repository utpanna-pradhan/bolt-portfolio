interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    description: [
      "Led the frontend development team in building a new customer-facing dashboard that increased user engagement by 35%",
      "Architected and implemented a component library that reduced development time by 40%",
      "Optimized application performance, reducing load time by 60% and improving Core Web Vitals metrics"
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "New York, NY",
    period: "Mar 2021 - Dec 2022",
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Built responsive web applications with React and Redux",
      "Implemented automated testing strategies that improved code quality and reduced bugs by 45%"
    ],
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Redux"]
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    company: "WebSolutions",
    location: "Remote",
    period: "Jun 2020 - Feb 2021",
    description: [
      "Collaborated with the design team to implement UI components and animations",
      "Participated in code reviews and contributed to the improvement of development practices",
      "Assisted in the development of a progressive web application with offline capabilities"
    ],
    skills: ["HTML", "CSS", "JavaScript", "SASS", "React", "Git"]
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "DesignCraft Studio",
    location: "Boston, MA",
    period: "Jan 2020 - May 2020",
    description: [
      "Created wireframes and prototypes for web and mobile applications",
      "Conducted user research and usability testing",
      "Collaborated with developers to ensure design implementation accuracy"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI Design"]
  }
];
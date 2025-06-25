import { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    title: "WOWcher ",
    description: "WOWcher is an Android application that consolidates nearby restaurant and store vouchers and displays them on an interactive Google Map for users to easily find and redeem deals in their area. The app also includes a rewards system that allows users to earn points by using vouchers and engaging with partner stores.",
    image: "/wowcher.png",
    technologies: ["Java", "Android"],
    githubUrl: "https://github.com/michaeljrr/2025-Term-4/tree/main/50-001",
    demoUrl: "https://youtube.com/shorts/GAiAbLjVLLg"
  },
  {
    title: "Portfolio Website",
    description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.",
    image: "/mountain.jpg",
    technologies: ["React", "Next.js", "TailwindCss", "Typescript", "Vercel"],
    githubUrl: "https://github.com/michaeljrr/2025-Term-4",
  },
  {
    title: "In Progress",
    description: "",
    image: "/mountain.jpg",
    technologies: ["React"],
    githubUrl: ""
  }
];

export default projects;


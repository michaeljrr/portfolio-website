import { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Developed a responsive personal portfolio website to showcase projects and skills with a clean, modern design.",
    image: "/portfolio.png",
    technologies: ["React", "Next.js", "TailwindCss", "Typescript", "Vercel"],
    githubUrl: "https://github.com/michaeljrr/portfolio-website",
  },

  {
    title: "WOWcher ",
    description: "WOWcher is an Android application that consolidates nearby restaurant and store vouchers and displays them on an interactive Google Map for users to easily find and redeem deals in their area. The app also includes a rewards system that allows users to earn points by using vouchers and engaging with partner stores.",
    image: "/wowcher.png",
    technologies: ["Java", "Android"],
    githubUrl: "https://github.com/michaeljrr/2025-Term-4/tree/main/50-001",
    demoUrl: "https://youtube.com/shorts/GAiAbLjVLLg"
  },

  {
    title: "Dab It!",
    description: "Engineered an interactive rhythm game inspired by Piano Tiles using an FPGA board, programmed in Lucid via Alchitry Labs. Integrated LEDs, 7-segment displays and buttons to capture user input with real-time responsiveness.",
    image: "/dabit.png",
    technologies: ["Lucid", "FPGA"],
    githubUrl: "https://github.com/michaeljrr/2025-Term-4/tree/main/50-002",
    demoUrl:"https://youtu.be/cNqpLko6nnA"
  },
  {
    title: "Verdiance",
    description: "An interactive light-emitting prototype placed in the gym, gamifying the gym experience to increase user interactions and interest for a more active and interactive gym environment. Constructed the electronic systems with Arduino, integrating card scanners and creating multiple LED animations.",
    image: "/verdiance.png",
    technologies: ["Arduino", "C++"],
    demoUrl:"https://youtu.be/uzAOjA5p5PY"
  },

  {
    title: "Python Chess Game",
    description: "Developed a Python chess game playable via the command line, supporting algebraic notation input and dynamic board visualisation with Matplotlib.",
    image: "/python-chess.png",
    technologies: ["Python"],
    githubUrl: "https://github.com/michaeljrr/python-chess",
    demoUrl:"https://youtu.be/3-6QrkxhUuA"
  }
];

export default projects;


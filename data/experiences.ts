export interface Experience {
  company: string;
  role: string;
  description: string;
  image: string;
  date: string;
}

export const experiences: Experience[] = [
  {
    company: "SCRT (SUTD Competitive Robotics Team)",
    role: "Software Team Lead",
    description: "Created a custom C++ library incorporating PID control, odometry, and VEX libraries, enhancing the functionality and versatility of our club robots.",
    image: "/soar.png",
    date: "Apr 2023 - Nov 2023"
  },
  {
    company: "Pick Network, subsidiary of IMDA",
    role: "Full-stack Software Engineer Intern",
    description: "Built a full-stack internal operations portal with real-time monitoring, microservices, and geospatial features to manage a nationwide network of 1000+ smart parcel lockers.",
    image: "/pick.png",
    date: "Sep 2025 - Dec 2025"
  }
];

export default experiences;

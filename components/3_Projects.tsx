import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import { ProjectCard, Project } from './ProjectCard';

export default function Projects(){
    return(   
        <section id="projects" className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-12">My Projects</h2>
                <div className="space-y-8">
                {projects.map((project: Project, index: number) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    />
                ))}
                </div>
            </div>
        </section>
    );
}
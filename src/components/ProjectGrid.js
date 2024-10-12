'use client'

import ProjectCard from '@/components/ProjectCard'

export default function ProjectGrid() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application built with React and Firebase.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/task-management-app',
    },
    // Add more projects as needed
  ]

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-text-light dark:text-text-dark">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
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
    <section className="bg-background-light dark:bg-background-dark max-w-2xl mx-auto mt-14">
      <div className="mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center text-text-light dark:text-text-dark">Projects</h2>
          <div className="mb-14 text-center">
          <h3 className="text-6xl font-bold mb-6 text-text-light dark:text-text-dark">Check out my work!</h3>
              <p className="text-lg text-text-darkGrey dark:text-text-lightGrey mb-6">
                These are some of the projects I have worked on. From simple website 
                to complex web application. Hope you guys like it.
              </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
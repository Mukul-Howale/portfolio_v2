'use client'

import ProjectCard from '@/components/ProjectCard'

export default function ProjectGrid() {
  const projects = [
    {
      title: 'Assure',
      description: 'A mobile first insurance booking application used to buy all sorts of insurances. A colaborative project completed in 10 days with a team of 6 members.',
      image: '/images/assure_png.png',
      technologies: ['HTML5', 'CSS3', 'JS', 'Java', 'SpringBoot', 'H2 Database'],
      link: 'https://github.com/MukulHowale/Project_Assure',
      liveLink: 'https://projectassure.netlify.app/html/registration.html',
    },
    {
      title: 'Expedia Clone',
      description: 'A travel booking website where a user can plan their entire journey. A colaborative project completed in 6 days with a team of 3 members.',
      image: '/images/expedia_clone_png.png',
      technologies: ['TML5', 'CSS3', 'JS', 'Json Server'],
      link: 'https://github.com/MukulHowale/expedia-clone',
      liveLink: 'https://expediaclone.netlify.app/',
    },
    // Add more projects as needed
  ]

  return (
    <section className="bg-background-light dark:bg-background-dark max-w-2xl mx-auto mt-16">
      <div className="mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center text-text-light dark:text-text-dark">Projects</h2>
          <div className="mb-14 text-center">
          <h3 className="text-5xl font-bold mb-6 text-text-light dark:text-text-dark">Check out my work!</h3>
              <p className="text-lg text-text-darkGrey dark:text-text-lightGrey mb-6">
                These are some of the projects I have worked on. From simple website 
                to complex web application. Hope you guys like it.
              </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
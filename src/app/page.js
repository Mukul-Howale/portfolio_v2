import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectGrid from '@/components/ProjectGrid'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectGrid />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </main>
  )
}
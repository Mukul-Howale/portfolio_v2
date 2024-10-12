import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectGrid from '@/components/ProjectGrid'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark">
      <Hero />
      <About />
      <ProjectGrid />
      <ContactForm />
    </main>
  )
}
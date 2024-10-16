'use client'

import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import ProjectGrid from '@/components/ProjectGrid'
import ContactMe from '@/components/ContactMe'
import BlurFade from '@/components/BlurFade'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
      <BlurFade delay={0.2}>
        <Hero />
        </BlurFade>
      </section>
      <section id="about">
      <BlurFade delay={0.5}>
        <About />
        </BlurFade>
      </section>
      <section id="experience">
      <BlurFade delay={0.8}>
        <Experience />
        </BlurFade>
      </section>
      <section id="education">
      <BlurFade delay={1.1}>
        <Education />
        </BlurFade>
      </section>
      <section id="skills">
      <BlurFade delay={1.4}>
        <Skills />
        </BlurFade>
      </section>
      <section id="projects">
      <BlurFade delay={1.7}>
        <ProjectGrid />
        </BlurFade>
      </section>
      <section id="contact">
      <BlurFade delay={2.0}>
        <ContactMe />
        </BlurFade>
      </section>
    </main>
  )
}
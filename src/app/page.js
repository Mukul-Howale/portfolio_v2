import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectGrid from '@/components/ProjectGrid'
import ContactForm from '@/components/ContactForm'
import SplineAnimation from '@/components/SplineAnimation'

export default function Home() {
  return (
    <main>
      <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <SplineAnimation sceneUrl="https://prod.spline.design/0MZPOde3VKHsSDVR/scene.splinecode" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
        </div>
      </div>
      <About />
      <ProjectGrid />
      <ContactForm />
    </main>
  )
}
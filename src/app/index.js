import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectGrid from '../components/ProjectGrid'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <ProjectGrid />
      <ContactForm />
    </Layout>
  )
}
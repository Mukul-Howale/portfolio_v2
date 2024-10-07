import Layout from '../components/Layout'
import ProjectGrid from '../components/ProjectGrid'

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="pt-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8 text-center">My Projects</h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            Explore some of the projects I've worked on throughout my career.
          </p>
        </div>
      </div>
      <ProjectGrid />
    </Layout>
  )
}
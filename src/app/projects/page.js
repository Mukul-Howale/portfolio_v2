import ProjectGrid from '@/components/ProjectGrid'

export default function ProjectsPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center text-text-light dark:text-text-dark">My Projects</h1>
        <p className="text-xl text-text-light dark:text-text-dark text-center mb-12">
          Explore some of the projects I've worked on throughout my career.
        </p>
      </div>
      <ProjectGrid />
    </div>
  )
}
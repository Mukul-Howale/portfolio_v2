import About from '@/components/About'

export default function AboutPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center text-text-light dark:text-text-dark">About Me</h1>
        <p className="text-xl text-text-light dark:text-text-dark text-center mb-12">
          Learn more about my background, skills, and passion for software development.
        </p>
      </div>
      <About />
    </div>
  )
}
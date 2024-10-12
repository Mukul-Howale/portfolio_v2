import dynamic from 'next/dynamic'

const AnimatedSkills = dynamic(() => import('./AnimatedSkills'), { ssr: false })

export default function About() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-light dark:text-text-dark">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Who I Am</h3>
            <p className="text-text-light dark:text-text-dark mb-4">
              I&apos;m a passionate software developer with a keen interest in building scalable web applications.
              With a background in computer science and years of industry experience, I love tackling complex
              problems and turning ideas into reality through code.
            </p>
            <p className="text-text-light dark:text-text-dark">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying the great outdoors.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Skills & Technologies</h3>
            <AnimatedSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
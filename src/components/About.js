import dynamic from 'next/dynamic'

const AnimatedSkills = dynamic(() => import('./AnimatedSkills'), { ssr: false })

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-400 mb-4">
              I'm a passionate software developer with a keen interest in building scalable web applications.
              With a background in computer science and years of industry experience, I love tackling complex
              problems and turning ideas into reality through code.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying the great outdoors.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
            <AnimatedSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
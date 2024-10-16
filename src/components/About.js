import { BlurFade } from './BlurFade'

export default function About() {
  return (
    <section className="py-10 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <BlurFade>
            <h3 className="text-3xl font-semibold mb-8 text-center text-text-light dark:text-text-dark">About</h3>
          </BlurFade>
          <div className="space-y-3 text-center">
            <BlurFade delay={0.2}>
              <p className="text-xl text-text-light dark:text-text-dark mb-6">
                I'm a passionate software developer with a keen interest in building scalable web applications.
                With a background in computer science and years of industry experience, I love tackling complex
                problems and turning ideas into reality through code.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p className="text-xl text-text-light dark:text-text-dark mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying the great outdoors.
              </p>
            </BlurFade>
          </div>
          <div className="flex flex-col">
            <BlurFade delay={0.6}>
              <h3 className="text-3xl font-semibold mt-16 text-center text-text-light dark:text-text-dark">Skills & Technologies</h3>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
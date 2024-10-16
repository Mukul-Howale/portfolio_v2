import BoxReveal from '@/components/BoxReveal'
import { IconCloudDemo } from '@/components/IconCloud'

export default function About() {
  return (
    <section className="py-10 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center text-text-light dark:text-text-dark">About</h3>
          <div className="space-y-3 text-center">
            
          <BoxReveal boxColor="#3B82F6" duration={0.5}>
            <p className="text-xl text-text-light dark:text-text-dark mb-6">
              I'm a passionate software developer with a keen interest in building scalable web applications.
              With a background in computer science and years of industry experience, I love tackling complex
              problems and turning ideas into reality through code.
            </p>
          </BoxReveal>
          
          <BoxReveal boxColor="#3B82F6" duration={0.5}>
            <p className="text-xl text-text-light dark:text-text-dark mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying the great outdoors.
            </p>
          </BoxReveal>
  
        </div>
        <div className="flex flex-col">
        <h3 className="text-3xl font-semibold mt-16 text-center text-text-light dark:text-text-dark">Skills & Technologies</h3>
            <div className="w-full">
              <IconCloudDemo />
            </div>
        </div>
          </div>
        </div>
    </section>
  )
}
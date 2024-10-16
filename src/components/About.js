export default function About() {
  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center mb-7">
          <h3 className="text-2xl font-bold mb-8 text-center text-text-light dark:text-text-dark">About</h3>
          <div className="space-y-3 text-center">
              <p className="text-lg text-text-darkGrey dark:text-text-lightGrey mb-6">
                I'm a passionate software developer with a keen interest in building scalable web applications.
                I love tackling complex problems and turning ideas into reality through code.
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying the great outdoors.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}
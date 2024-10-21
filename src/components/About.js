export default function About() {
  return (
    <section className="bg-background-light dark:bg-background-dark max-w-2xl mx-auto">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-xl font-bold mb-4 text-center text-text-light dark:text-text-dark">About</h3>
          <div className="space-y-3 text-center">
              <p className="text-l text-text-darkGrey dark:text-text-lightGrey mb-6">
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
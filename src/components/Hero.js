import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-84 mt-32 mb-14 flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="z-10 flex flex-row items-center justify-center w-full max-w-3xl px-4">
          <Image
            src="/images/profileImg.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        <div className="w-4/2 pl-12 text-left">
            <h1 className="text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
              Hi, I&apos;m Mukul 👋
            </h1>
            <p className="text-xl text-text-darkGrey dark:text-text-lightGrey">
              I&apos;m a Software Developer who love to build things.
            </p>
        </div>
      </div>
    </section>
  )
}
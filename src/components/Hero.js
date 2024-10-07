import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
      <div className="z-10 text-center">
        <Image
          src="/images/profile-picture.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-2xl mb-8">Software Developer & Problem Solver</p>
        <a
          href="#contact"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
  )
}
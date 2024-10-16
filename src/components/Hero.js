'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import HeroSkeleton from './HeroSkeleton'
import { BlurFade } from './BlurFade'

export default function Hero() {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <HeroSkeleton />
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="z-10 text-center">
        <BlurFade delay={0.2}>
          <Image
            src="/images/profile-picture.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8"
          />
        </BlurFade>
        <BlurFade delay={0.4}>
          <h1 className="text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
            Mukul Howale
          </h1>
        </BlurFade>
        <BlurFade delay={0.6}>
          <p className="text-2xl mb-8 text-text-light dark:text-text-dark">
            Software Developer
          </p>
        </BlurFade>
        <BlurFade delay={0.8}>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get in Touch
          </a>
        </BlurFade>
      </div>
    </div>
  )
}
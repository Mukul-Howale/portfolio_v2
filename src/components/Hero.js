'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Ripple from './Ripple'  // Make sure this path is correct
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Theme-aware Ripple background */}
      <Ripple 
        mainCircleSize={300}
        mainCircleOpacity={0.1}
        numCircles={5}
        className="absolute inset-0"
      />
      
      <div className="z-10 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/profile-picture.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl font-bold mb-4 text-text-light dark:text-text-dark"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-2xl mb-8 text-text-light dark:text-text-dark"
        >
          Software Developer & Problem Solver
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
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
          className="bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  )
}
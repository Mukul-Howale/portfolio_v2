'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, image, technologies, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg"
    >
      <Image src={image} alt={title} width={400} height={200} className="w-full object-cover h-48" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
        <p className="text-text-light dark:text-text-dark mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light text-sm rounded-full px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary-dark text-text-dark dark:text-text-light font-bold py-2 px-4 rounded transition duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}
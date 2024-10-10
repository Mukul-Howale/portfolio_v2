'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, image, technologies, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image src={image} alt={title} width={400} height={200} className="w-full object-cover h-48" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-sm rounded-full px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}
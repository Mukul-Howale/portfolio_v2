'use client'

import { GithubIcon, Linkedin, X } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark backdrop-blur-md py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Mukul Howale</h3>
            <p className="text-sm text-text-light dark:text-text-dark opacity-75">Software Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
              <Linkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
              <X />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-text-light dark:text-text-dark opacity-75">
          © {new Date().getFullYear()} Mukul Howale. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
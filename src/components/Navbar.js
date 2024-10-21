'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Home, Sun, Moon, Github, Linkedin, FileText } from 'lucide-react'
import { Dock, DockIcon } from './Dock'

const Separator = () => (
  <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
);

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
  ]

  const socialItems = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
    { name: 'Resume', icon: FileText, href: '/path-to-your-resume.pdf' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-center">
        <Dock
          direction="middle"
          className={`shadow-md dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] bg-white/80 dark:bg-black/80 backdrop-blur-sm border-0 dark:border-0`}
        >
          {navItems.map((item) => (
            <DockIcon key={item.name} className="group relative">
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex flex-col items-center justify-center w-full h-full relative"
              >
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
                <item.icon className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-200 relative z-10" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{item.name}</span>
              </a>
            </DockIcon>
          ))}
          <Separator />
          {socialItems.map((item) => (
            <DockIcon key={item.name} className="group relative">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full relative"
              >
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
                <item.icon className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-200 relative z-10" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{item.name}</span>
              </a>
            </DockIcon>
          ))}
          <Separator />
          <DockIcon className="group relative">
            <button
              onClick={toggleTheme}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 mb-1 text-gray-200 relative z-10" />
              ) : (
                <Moon className="w-6 h-6 mb-1 text-gray-800 relative z-10" />
              )}
              <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
          </DockIcon>
        </Dock>
      </div>
    </nav>
  )
}
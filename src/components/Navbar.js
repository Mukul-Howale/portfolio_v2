'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Home, User, Briefcase, Mail, Sun, Moon, Github } from 'lucide-react'
import { Dock, DockIcon } from './Dock'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '/about' },
    { name: 'Projects', icon: Briefcase, href: '/projects' },
    { name: 'Contact', icon: Mail, href: '/contact' },
  ]

  const socialItems = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20">
      <Dock direction="middle">
        {navItems.map((item) => (
          <DockIcon key={item.name}>
            <Link href={item.href} className="flex flex-col items-center justify-center w-full h-full">
              <item.icon className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-200" />
              <span className="text-xs text-gray-800 dark:text-gray-200"></span>
            </Link>
          </DockIcon>
        ))}
        {socialItems.map((item) => (
          <DockIcon key={item.name}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full">
              <item.icon className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-200" />
              <span className="text-xs text-gray-800 dark:text-gray-200"></span>
            </a>
          </DockIcon>
        ))}
        <DockIcon>
          <button onClick={toggleTheme} className="flex flex-col items-center justify-center w-full h-full">
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 mb-1 text-gray-200" />
            ) : (
              <Moon className="w-6 h-6 mb-1 text-gray-800" />
            )}
            <span className="text-xs text-gray-800 dark:text-gray-200"></span>
          </button>
        </DockIcon>
      </Dock>
    </nav>
  )
}
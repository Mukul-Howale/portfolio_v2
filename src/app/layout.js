'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'
import '@/styles/global.css'
import HeroSkeleton from '@/components/HeroSkeleton'
import { Inter } from 'next/font/google'
import Particles from '@/components/Particles'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

function ParticlesWithTheme() {
  const { theme } = useTheme()
  
  // Use more visible colors for particles
  const particleColor = theme === 'dark' ? "#ffffff" : "#000000"

  return (
    <Particles
      className="absolute inset-0 -z-10"
      quantity={500}
      ease={80}
      // staticity={50}
      color={particleColor}
      // size={1}  // Increased size for better visibility
      refresh
    />
  )
}

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleLoad = () => {
      setIsLoading(false)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {mounted && (
            <div className={`flex flex-col min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
              <Navbar />
              {isLoading ? (
                <HeroSkeleton />
              ) : (
                <main className="flex-grow relative">
                  <ParticlesWithTheme />
                  {children}
                </main>
              )}
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
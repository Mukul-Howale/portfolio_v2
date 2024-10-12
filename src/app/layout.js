'use client'

import '@/styles/global.css'
import { ThemeProvider, useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Particles from '@/components/Particles'
import { useEffect, useState } from 'react'

function ParticlesWithTheme() {
  const { theme } = useTheme()
  const [color, setColor] = useState('#3B82F6')

  useEffect(() => {
    setColor(theme === 'dark' ? '#FFFFFF' : '#000000')
  }, [theme])

  return (
    <Particles
      className="fixed inset-0 -z-10"
      quantity={100}
      staticity={50}
      color={color}
    />
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <ThemeProvider attribute="class">
          <ParticlesWithTheme />
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
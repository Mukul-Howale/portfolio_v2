'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import '@/styles/global.css'

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
'use client'

import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
import '@/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Your Name - Software Developer',
  description: 'Portfolio website of Your Name, a software developer specializing in web technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-text">
        <div className="fixed inset-0 bg-black bg-grain opacity-[0.03] pointer-events-none"></div>
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
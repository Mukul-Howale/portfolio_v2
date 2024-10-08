import '../styles/global.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
        Go back home
      </Link>
    </div>
  )
}
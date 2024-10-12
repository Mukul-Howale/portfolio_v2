import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-8 text-center text-text-light dark:text-text-dark">Contact Me</h1>
          <p className="text-xl text-text-light dark:text-text-dark text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
      </div>
      <ContactForm />
      <div className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">Other Ways to Connect</h2>
          <p className="text-xl text-text-light dark:text-text-dark mb-8">
            You can also find me on these platforms:
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
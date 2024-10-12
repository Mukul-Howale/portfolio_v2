'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-light dark:text-text-dark">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-light dark:text-text-dark">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-light dark:text-text-dark">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-light dark:text-text-dark">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
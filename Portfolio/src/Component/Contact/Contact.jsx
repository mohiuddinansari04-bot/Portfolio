import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16 space-y-4 text-center">
        <p className="text-base font-semibold uppercase tracking-[0.3em] text-gray-400">Get In Touch</p>
        <h2 className="text-4xl font-bold text-white sm:text-5xl">Let&apos;s Connect</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Whether you need a polished web presence or a custom frontend build, I’d be happy to discuss your goals.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left: Contact Info */}
        <div className="space-y-8 lg:col-span-1">
          {/* Full Name */}
          <div className="rounded-xl glass-effect border border-slate-700 p-6 space-y-3 hover:border-red-400/60 transition-all">
            <div className="text-3xl text-red-400">👤</div>
            <h3 className="text-lg font-bold text-white">Full Name</h3>
            <p className="text-slate-300">Ahmed Mohiuddin Zaheeruddin Ansari</p>
          </div>

          {/* Email */}
          <div className="rounded-xl glass-effect border border-slate-700 p-6 space-y-3 hover:border-red-400/60 transition-all">
            <div className="text-3xl text-red-400">📧</div>
            <h3 className="text-lg font-bold text-white">Gmail</h3>
            <a href="mailto:mohiuddinansari@gmail.com" className="text-slate-300 hover:text-red-400 transition-colors break-all">
              mohiuddinansari@gmail.com
            </a>
            <p className="text-sm text-slate-400">Fast email response</p>
          </div>

          {/* Phone */}
          <div className="rounded-xl glass-effect border border-slate-700 p-6 space-y-3 hover:border-red-400/60 transition-all">
            <div className="text-3xl text-red-400">📱</div>
            <h3 className="text-lg font-bold text-white">Phone</h3>
            <a href="tel:+1234567890" className="text-slate-300 hover:text-red-400 transition-colors">
              +91 9860569507
            </a>
            <p className="text-sm text-slate-400">WhatsApp available</p>
          </div>

          {/* Social Links */}
          <div className="rounded-xl glass-effect border border-slate-700 p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Follow me on</h3>
            <div className="flex gap-4">
              <Link to="https://github.com/mohiuddinansari04-bot?tab=overview&from=2026-06-01&to=2026-06-15" className="flex h-10 w-20 items-center justify-center rounded-lg bg-slate-800 text-white hover:bg-red-500 transition-all">
                GitHub
              </Link>
              <Link to="https://www.linkedin.com/in/ahmedmohiuddinansari/" className="flex h-10 w-20 items-center justify-center rounded-lg bg-slate-800 text-white hover:bg-red-500 transition-all">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-8">
            {submitted && (
              <div className="rounded-lg bg-green-500/20 border border-green-500/50 p-4 text-green-400 text-center">
                ✓ Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-200 py-3 font-semibold text-black transition-all hover:bg-white active:scale-95"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-slate-400">
              I typically reply within one business day.
            </p>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact

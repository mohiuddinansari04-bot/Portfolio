import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-88px)] items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gray-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-gray-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6 fade-in-up">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Frontend Developer</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Building thoughtful digital experiences with modern web technologies.
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            I create responsive, high-performing interfaces that blend clean design, strong UX, and reliable development practices.
          </p>

          <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">Tailwind CSS</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">Responsive UI</span>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="rounded-full bg-gray-200 px-8 py-3 font-semibold text-black transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-gray-400 px-8 py-3 font-semibold text-gray-200 transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

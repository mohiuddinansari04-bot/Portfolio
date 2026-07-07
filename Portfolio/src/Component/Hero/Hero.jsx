import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden flex items-center justify-center py-12">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-6 fade-in-up">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg text-red-400 font-medium ">Hey there! </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              I'm <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">Ahmed Mohiuddin Ansari</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A passionate Frontend Developer who loves creating beautiful, interactive web experiences. I build things with React, Tailwind CSS, and a whole lot of creativity! 
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto my-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-red-400/50 transition-all">
              <p className="text-2xl mb-1">⚛️</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">React</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-red-400/50 transition-all">
              <p className="text-2xl mb-1">🟨</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">JavaScript</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-red-400/50 transition-all">
              <p className="text-2xl mb-1">🎨</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Tailwind</p>
            </div>
          </div>

          {/* 3D Languages & Tools Card */}
          <div className="mx-auto max-w-3xl">
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.45)] hero-3">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10 opacity-70 pointer-events-none"></div>
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Languages</p>
                  <div className="mt-4 space-y-3 text-white">
                    <p className="text-2xl font-semibold">JavaScript</p>
                    <p className="text-2xl font-semibold">HTML</p>
                    <p className="text-2xl font-semibold">CSS</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Tools</p>
                  <div className="mt-4 space-y-3 text-white">
                    <p className="text-2xl font-semibold">React</p>
                    <p className="text-2xl font-semibold">Tailwind</p>
                    <p className="text-2xl font-semibold">Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/projects"
              className="px-8 py-3 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition-all hover:scale-105 active:scale-95"
            >
              See My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-red-400 text-red-400 font-semibold rounded-full hover:bg-red-400/10 transition-all hover:scale-105 active:scale-95"
            >
              Let's Chat
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>
    </section>
  )
}

export default Hero

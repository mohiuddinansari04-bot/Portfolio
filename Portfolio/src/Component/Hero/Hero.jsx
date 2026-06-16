import React from 'react'

function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col justify-center gap-10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[40px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl hero-3d">
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Hi, I’m a developer</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            I am <span className="text-red-400">Your Name</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300 sm:mx-0">
            I build beautiful, responsive web experiences with React, Tailwind CSS, and modern JavaScript. I focus on clean interfaces, fast performance, and polished animations.
          </p>
        </div>

        <div className="grid gap-5 rounded-[32px] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-xl shadow-slate-950/20 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center">
            <h3 className="text-sm uppercase tracking-[0.32em] text-slate-400">What I do</h3>
            <p className="mt-4 text-xl font-semibold text-white">Frontend Development</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center">
            <h3 className="text-sm uppercase tracking-[0.32em] text-slate-400">My tools</h3>
            <p className="mt-4 text-xl font-semibold text-white">React + Tailwind</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center">
            <h3 className="text-sm uppercase tracking-[0.32em] text-slate-400">My focus</h3>
            <p className="mt-4 text-xl font-semibold text-white">Interactive UI</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Welcome</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Crafting modern web experiences.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I build polished and responsive interfaces using React, Tailwind CSS, and thoughtful design systems. Explore my work, learn about my process, and get in touch.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

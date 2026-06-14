function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          I am a frontend developer focused on crafting intuitive interfaces and performant user experiences. I enjoy turning ideas into polished applications with React, modern CSS, and clean component architecture.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/80 p-6 border border-slate-800">
            <h3 className="text-xl font-semibold text-cyan-200">What I do</h3>
            <p className="mt-3 text-slate-300">
              Build responsive websites, reusable React components, and accessible UI flows that work across devices.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950/80 p-6 border border-slate-800">
            <h3 className="text-xl font-semibold text-cyan-200">My strengths</h3>
            <p className="mt-3 text-slate-300">
              Problem solving, clean design systems, performance-minded development, and thoughtful front-end architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

import Cards from '../Project/Cards'

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="mt-4 text-slate-300">A selection of work that demonstrates my ability to design and build engaging web applications.</p>
      </section>
      <Cards />
    </div>
  )
}

export default Projects

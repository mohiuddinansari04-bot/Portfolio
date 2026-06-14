function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Want to work together or learn more? Reach out by email and let’s talk about your next web project.
        </p>
        <div className="mt-8 rounded-3xl bg-slate-950/80 p-6 border border-slate-800">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Email</p>
          <p className="mt-3 text-lg font-medium text-white">hello@example.com</p>
          <p className="mt-2 text-slate-400">Or connect through your favorite platform and I’ll reply quickly.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact

import React from 'react'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl rounded-[40px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-red-400">Let’s connect</p>
        <h2 className="text-4xl font-semibold text-white">Contact Me</h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
          I’m available for freelance projects, collaborations, and full-time frontend roles. Send a message and lets build something great together.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
          <h3 className="text-xl font-semibold text-white">Email</h3>
          <p className="mt-3 text-slate-300">your.email@example.com</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
          <h3 className="text-xl font-semibold text-white">Location</h3>
          <p className="mt-3 text-slate-300">City, Country</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-slate-300">
        <p className="text-lg leading-8">
          Want to collaborate? Im happy to discuss your next web project, share design ideas, and bring strong frontend UI work to your team.
        </p>
      </div>
    </section>
  )
}

export default Contact

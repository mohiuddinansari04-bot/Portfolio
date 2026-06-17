import React from 'react'

function Project() {
  const projects = [
    {
      id: 1,
      title: "Smart-Trip",
      description: "A responsive travel booking website where you can explore destinations, check prices, and book your next adventure. Built with React and beautiful UI animations.",
      tech: ["React", "Tailwind CSS"],
      emoji: "✈️",
      link: "#",
    },
    {
      id: 2,
      title: "SocialApp",
      description: "Social media platform where users can create posts, like, comment, and connect with others. Features real-time updates and a smooth feed experience.",
      tech: ["React", "Tailwind CSS", "API"],
      emoji: "👥",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and styled with Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      emoji: "💼",
      link: "#",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-red-400 mb-2">My Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects I've Built</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">Check out some of my recent projects. Each one represents a learning experience and passion for creating great web experiences.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-red-400/50 transition-all hover:-translate-y-2 card-hover"
          >
            {/* Project Header */}
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-8 flex items-center justify-center min-h-180px">
              <div className="text-6xl group-hover:scale-110 transition-transform">{project.emoji}</div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-red-400/20 text-red-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 bg-red-400 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
        <p className="text-slate-300 mb-6 max-w-xl mx-auto">I'm always working on new projects. Follow me on social media to stay updated or reach out to collaborate!</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-red-400 text-white font-medium rounded-lg hover:bg-red-500 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </section>
  )
}

export default Project

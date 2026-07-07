import React from 'react'

function Project() {
  const projects = [
    {
      id: 1,
      title: "Smart-Trip",
      description: "A responsive travel booking website where you can explore destinations, check prices, and book your next adventure. Built with React and beautiful UI animations.",
      tech: ["React", "Tailwind CSS"],
      emoji: "✈️",
      link: "https://smart-trip-9mym.vercel.app/",
    },
    {
      id: 2,
      title: "SocialApp",
      description: "Social media platform where users can create posts, like, comment, and connect with others. Features real-time updates and a smooth feed experience.",
      tech: ["React", "Tailwind CSS", "API"],
      emoji: "👥",
      link: "https://social-app-p5yx.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and styled with Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      emoji: "💼",
      link: "#",
    },
    {
      id: 4,
      title: "Hotle booking",
      description: "LuxeNest is a responsive hotel booking website developed using React.js and Tailwind CSS. It allows users to browse hotels, view room details, pricing, amenities, and experience a modern booking interface with responsive design and smooth navigation.",
      tech: ["React", "Tailwind CSS ", "API"],
      emoji: "🏨",
      link: "#",
    },
  ]

  return (
    <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Selected Work</p>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Projects I&apos;ve Built</h2>
        <p className="mx-auto max-w-2xl text-gray-400">A collection of responsive, user-focused web applications developed with attention to detail, performance, and maintainability.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/70 transition-all hover:-translate-y-2 hover:border-gray-600 card-hover"
          >
            {/* Project Header */}
            <div className="flex min-h-[180px] items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8">
              <div className="text-6xl group-hover:scale-110 transition-transform">{project.emoji}</div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="mt-4 inline-block rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Project

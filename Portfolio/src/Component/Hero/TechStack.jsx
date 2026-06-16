import React from 'react'
import { 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  Wind, 
  LayoutGrid,
  Coffee, 
  Leaf, 
  Database, 
  Table,
  PenTool,
  Pen,
  Layers,
  Image
} from 'lucide-react'

function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      bgColor: "bg-blue-400/5",
      technologies: [
        { name: "HTML5", icon: <FileCode className="w-5 h-5" /> },
        { name: "CSS3", icon: <Palette className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "React.js", icon: <Atom className="w-5 h-5" /> },
      ]
    },
    {
      title: "Styling",
      icon: <Wind className="w-6 h-6" />,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      bgColor: "bg-cyan-400/5",
      technologies: [
        { name: "Tailwind CSS", icon: <Wind className="w-5 h-5" /> },
        { name: "Bootstrap", icon: <LayoutGrid className="w-5 h-5" /> },
      ]
    },
    {
      title: "Backend",
      icon: <Coffee className="w-6 h-6" />,
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      bgColor: "bg-amber-400/5",
      technologies: [
        { name: "Java", icon: <Coffee className="w-5 h-5" /> },
        { name: "Spring Boot", icon: <Leaf className="w-5 h-5" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      bgColor: "bg-emerald-400/5",
      technologies: [
        { name: "MySQL", icon: <Table className="w-5 h-5" /> },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="w-6 h-6" />,
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
      bgColor: "bg-pink-400/5",
      technologies: [
        { name: "Figma", icon: <Pen className="w-5 h-5" /> },
        { name: "Adobe XD", icon: <Layers className="w-5 h-5" /> },
        { name: "Canva", icon: <Image className="w-5 h-5" /> },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0c0a09] flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-5xl font-bold text-[#fbbf24] mb-4"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full opacity-60"></div>
          <p 
            className="mt-4 text-lg text-[#a8a29e] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
          >
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        {/* Tech Grid - 5 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-[#1c1917] border border-[#292524] rounded-2xl p-6 hover:border-[#fbbf24] transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#292524] group-hover:border-[#fbbf24]/30 transition-colors duration-300">
                <div className={`p-2 rounded-lg ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                  {category.icon}
                </div>
                <h3 
                  className="text-xl font-bold text-[#e7e5e4] group-hover:text-[#fbbf24] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0c0a09] border border-[#292524] hover:border-[#44403c] hover:bg-[#1c1917] transition-all duration-300 group/tech"
                  >
                    <div className="text-[#78716c] group-hover/tech:text-[#fbbf24] transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span 
                      className="text-sm font-medium text-[#d6d3d1] group-hover/tech:text-[#fbbf24] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#fbbf24] opacity-0 group-hover:opacity-5 rotate-45 translate-x-8 -translate-y-8 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-40"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-[#fbbf24] opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
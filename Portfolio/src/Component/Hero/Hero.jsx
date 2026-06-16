import React, { useState, useEffect } from 'react'
import { Code2, Server, Database, Cpu, CodeXml } from 'lucide-react'

function Hero() {
  const titles = [
    "UI/UX Designer",
    "Frontend Developer", 
    "Backend Developer",
    "Java Full Stack Developer"
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        if (currentTitleIndex < titles.length - 1) {
          setIsDeleting(true)
        }
      }, 1500)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => prev + 1)
        return
      }
      const deleteTimer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, 50)
      return () => clearTimeout(deleteTimer)
    }

    if (displayText === currentTitle) {
      if (currentTitleIndex < titles.length - 1) {
        setIsPaused(true)
      }
      return
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(currentTitle.slice(0, displayText.length + 1))
    }, 100)
    return () => clearTimeout(typeTimer)
  }, [displayText, isDeleting, isPaused, currentTitleIndex, titles])

  return (
    <div className="h-screen bg-[#0c0a09] flex items-center justify-center overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-20 gap-12 lg:gap-20">
        
        {/* Left Side - Intro */}
        <div className="flex flex-col items-start justify-center text-left">
          <h2 
            className="text-3xl lg:text-5xl font-bold tracking-wide text-[#fbbf24] mb-2"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
             Mubashir Shaikh 
          </h2>
          
          {/* Typewriter Effect Container */}
          <div className="h-12 lg:h-16 mb-6 flex items-center">
            <span 
              className="text-xl lg:text-3xl font-semibold text-[#e7e5e4]"
              style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
            >
              {displayText}
              <span className="animate-pulse text-[#fbbf24]">|</span>
            </span>
          </div>
          
          <p 
            className="text-lg lg:text-xl text-[#a8a29e] mb-8 max-w-xl"
            style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
          >
            Java Full Stack Developer who loves turning ideas into real-world projects using Java, Spring Boot, React, and AI tools.
          </p>
          
          <button 
            className="px-7 py-3 rounded-full bg-[#1c1917] border border-[#44403c] text-[#fbbf24] text-sm font-semibold hover:bg-[#d97706] hover:text-white hover:border-[#f59e0b] hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] active:scale-95 transition-all duration-300"
            style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
          >
            View My Work
          </button>
        </div>

        {/* Right Side - Big Icon */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-[#fbbf24] opacity-10 blur-3xl rounded-full scale-150 animate-pulse"></div>
            
            {/* Main Icon Container */}
            <div className="relative bg-[#1c1917] border border-[#44403c] rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#0c0a09] border border-[#292524] hover:border-[#fbbf24] transition-colors duration-300 group">
                  <Code2 className="w-8 h-8 lg:w-10 lg:h-10 text-[#78716c] group-hover:text-[#fbbf24] transition-colors duration-300" />
                  <span className="text-xs text-[#78716c] group-hover:text-[#fbbf24] transition-colors">Frontend</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#0c0a09] border border-[#292524] hover:border-[#fbbf24] transition-colors duration-300 group">
                  <Server className="w-8 h-8 lg:w-10 lg:h-10 text-[#78716c] group-hover:text-[#fbbf24] transition-colors duration-300" />
                  <span className="text-xs text-[#78716c] group-hover:text-[#fbbf24] transition-colors">Backend</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#0c0a09] border border-[#292524] hover:border-[#fbbf24] transition-colors duration-300 group">
                  <Database className="w-8 h-8 lg:w-10 lg:h-10 text-[#78716c] group-hover:text-[#fbbf24] transition-colors duration-300" />
                  <span className="text-xs text-[#78716c] group-hover:text-[#fbbf24] transition-colors">Database</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#0c0a09] border border-[#292524] hover:border-[#fbbf24] transition-colors duration-300 group">
                  <Cpu className="w-8 h-8 lg:w-10 lg:h-10 text-[#78716c] group-hover:text-[#fbbf24] transition-colors duration-300" />
                  <span className="text-xs text-[#78716c] group-hover:text-[#fbbf24] transition-colors">AI Tools</span>
                </div>
              </div>
              
              {/* Center decorative element - Changed to CodeXml */}
              <div className="absolute -top-4 -right-4 bg-[#fbbf24] text-[#0c0a09] rounded-full p-3 shadow-lg">
                <CodeXml className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave animation styles */}
      <style>{`
        .wave {
          animation: wave-animation 2s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}

export default Hero
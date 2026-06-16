import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 transition-transform">
            Portfolio
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-sm font-medium transition-all ${
                isActive ? 'text-red-400 underline underline-offset-4' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `text-sm font-medium transition-all ${
                isActive ? 'text-red-400 underline underline-offset-4' : 'text-slate-300 hover:text-white'
              }`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-sm font-medium px-4 py-2 rounded-full transition-all ${
                isActive ? 'bg-red-400 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <NavLink 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                isActive ? 'bg-red-400 text-white' : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                isActive ? 'bg-red-400 text-white' : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                isActive ? 'bg-red-400 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

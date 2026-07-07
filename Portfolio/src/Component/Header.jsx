import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950   backdrop-blur-md py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-[0.2em] text-gray-100 ">
            AHMED MOHIUDDIN ANSARI
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-sm font-medium transition-all ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `text-sm font-medium transition-all ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-sm font-medium rounded-full px-4 py-2 transition-all ${
                isActive ? 'bg-gray-200 text-black' : 'bg-white/10 text-gray-100 hover:bg-white/20'
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

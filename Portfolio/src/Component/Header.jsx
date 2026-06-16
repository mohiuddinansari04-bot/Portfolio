import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-slate-950/95 border-b border-slate-800 shadow-xl shadow-slate-950/30 py-4 text-slate-100 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-red-400">Portfolio</h1>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 p-2 text-slate-300 transition hover:border-red-300 hover:text-white md:hidden hover:bg-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">☰</span>
        </button>

        <nav className={`absolute inset-x-4 top-full mt-2 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/20 transition-all duration-200 md:static md:mt-0 md:flex md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="space-y-4 text-right md:space-y-0 md:flex md:items-center md:gap-8">
            <li>
              <NavLink to="/" className={({ isActive }) => `block text-sm font-medium transition ${isActive ? 'text-red-300' : 'text-white hover:text-red-300'}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => `block text-sm font-medium transition ${isActive ? 'text-red-300' : 'text-white hover:text-red-300'}`}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block text-sm font-medium transition ${isActive ? 'text-red-300' : 'text-white hover:text-red-300'}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
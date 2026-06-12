import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className=" bg-white shadow-2xl backdrop-blur-xl ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.2em] text-black">Ahmed Mohiuddin Ansari</a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden hover:bg-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">☰</span>
        </button>

        <nav className={`absolute inset-x-4 top-full mt-2 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/20 transition-all duration-200 md:static md:mt-0 md:flex md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="space-y-4 text-right md:space-y-0 md:flex md:items-center md:gap-8">
            <li>
              <a href="#home" className="block text-sm font-medium text-black transition hover:text-sky-300">Home</a>
            </li>
            <li>
              <a href="#about" className="block text-sm font-medium text-black transition hover:text-sky-300">About</a>
            </li>
            <li>
              <a href="#projects" className="block text-sm font-medium text-black transition hover:text-sky-300">Projects</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
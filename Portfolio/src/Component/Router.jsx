import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Here/Home'
import About from './Here/About'
import Projects from './Here/Projects'
import Contact from './Here/Contact'

function AppRouter() {
  return (
    <main className="pb-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default AppRouter

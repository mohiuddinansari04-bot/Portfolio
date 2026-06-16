import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Hero from '../Hero/Hero'
import Project from '../ProjectPages/Project'
import Contact from '../Contact/Contact'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRouter

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <main className="px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  )
}

export default Layout

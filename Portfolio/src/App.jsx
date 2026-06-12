import './App.css'
import { useState } from 'react'
import Header from './Component/Header'
import Cards from './Component/Project/Cards'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-600">
        <Header />
        <Cards />

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <main>
            <h1>My Portfolio</h1>
            </main>
        </div>
      </div>

    </>
  )
}

export default App;

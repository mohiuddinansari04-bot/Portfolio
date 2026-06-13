import './App.css'
import { useState } from 'react'
import Header from './Component/Header'
import Cards from './Component/Project/Cards'

function App() {

  return (
    <>
      <div className="min-h-screen bg--600">
        <Header />
        <Cards />
      </div>

    </>
  )
}

export default App;

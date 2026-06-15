import './App.css'
import { useState } from 'react'
import Header from './Component/Header'
import Cards from './Component/Cards/Cards'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <Cards />
      

      </div>
    </>
  )
}

export default App;

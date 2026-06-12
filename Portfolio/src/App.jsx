import './App.css'
import Header from './Component/Header'
import Cards from './Component/Project/Cards'

function App() {
  return (
    <>
      <div className="min-h-screen bg-theme text-slate-100">
        <Header />
        <Cards />
      </div>
    </>
  )
}

export default App;

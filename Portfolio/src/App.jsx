import './App.css'
import AppRouter from './Component/Router'
import Header from './Component/Header'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <AppRouter />
    </div>
  )
}

export default App;

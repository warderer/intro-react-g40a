import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Inicializar el estado desde localStorage
    return localStorage.getItem('isAuth') === 'true'
  })

  // Actualizar localStorage cuando el estado cambie
  useEffect(() => {
    localStorage.setItem('isAuth', isLoggedIn)
  }, [isLoggedIn])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar isAuth={isLoggedIn} onLogin={login} onLogout={logout} />
        <AppRoutes isAuth={isLoggedIn} />
      </BrowserRouter>
    </div>
  )
}

export default App

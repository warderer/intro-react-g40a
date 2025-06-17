import { useState } from 'react'
import './App.css'

function App () {
  // Estado para saber si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Funciones para simular el inicio y cierre de sesión
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className='container'>
      <h1>Mi Panel de Control</h1>

      {/* --- RENDERIZADO CONDICIONAL CON OP. TERNARIO */}

      {
        isLoggedIn
          ? (
            <div>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
            )
          : (
            <div>
              <button onClick={handleLogin}>Iniciar sesión</button>
            </div>
            )
      }
    </div>
  )
}

export default App

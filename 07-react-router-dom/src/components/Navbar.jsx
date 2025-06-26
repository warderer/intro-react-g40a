import { NavLink } from 'react-router-dom'

const Navbar = ({ isAuth, onLogin, onLogout }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          {/* NavLink agrega la clase 'active' cuando la URL coincide */}
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Personajes</NavLink>
        </li>

        {/* Renderizado condicional */}
        {isAuth && (
          <li>
            <NavLink to='/secret'>Secreto</NavLink>
          </li>
        )}
      </ul>

      <div className='auth-buttons'>
        {/* Botones de autenticación */}
        {isAuth
          ? (
            <button onClick={onLogout} className='btn btn-link'>
              Cerrar Sesión
            </button>
            )
          : (
            <button onClick={onLogin} className='btn btn-link'>
              Iniciar Sesión
            </button>
            )}
      </div>
    </nav>
  )
}

export default Navbar

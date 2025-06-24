import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
      </ul>
    </nav>
  )
}

export default Navbar

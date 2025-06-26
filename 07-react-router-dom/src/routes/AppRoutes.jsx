import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import CharacterDetail from '../pages/CharacterDetail'
import NotFound from '../pages/NotFound'
import RequireAuth from '../auth/RequireAuth'
import Secret from '../pages/Secret'

const AppRoutes = ({ isAuth }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/character/:id' element={<CharacterDetail />} />

      {/* Ruta protegida */}
      <Route
        path='/secret' element={
          <RequireAuth isAuth={isAuth}>
            <Secret />
          </RequireAuth>
        }
      />

      {/* Ruta para manejar páginas no encontradas (404) */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default AppRoutes

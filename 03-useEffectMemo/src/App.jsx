import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App () {
  const listaDeUsuarios = [
    { id: 1, nombre: 'João', pais: 'Brasil' },
    { id: 2, nombre: 'Ailyn', pais: 'México' },
    { id: 3, nombre: 'Ana', pais: 'Argentina' },
    { id: 4, nombre: 'Daniel', pais: 'Chile' },
    { id: 5, nombre: 'Fanny', pais: 'Colombia' },
    { id: 6, nombre: 'Leonardo', pais: 'Perú' },
    { id: 7, nombre: 'Oscar', pais: 'Venezuela' },
  ]

  // Función que simule una llamada a una API
  const fetchUsuarios = () => {
    return new Promise((resolve) => {
      console.log('API CALL: Obteniendo usuarios...')
      setTimeout(() => {
        resolve(listaDeUsuarios)
      }, 2000)
    })
  }

  // Creamos los estados para manejar usuarios, la carga y el tema
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)
  const [tema, setTema] = useState('light')

  // useEffect lo usamos para cargar los datos (en este caso usuarios) al iniciar el componente
  useEffect(() => {
    fetchUsuarios()
      .then((data) => {
        setUsuarios(data)
        setCargando(false)
      })
  }, []) // El array vacío [] asegura que solo se ejecute una vez en la primera carga del componente

  return (
    <>

    </>
  )
}

export default App

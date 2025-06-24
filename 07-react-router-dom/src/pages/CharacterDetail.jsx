import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CharacterDetail = () => {
  const { id } = useParams() // Extraer el id del personaje de los parámetros de la URL
  const navigate = useNavigate() // Hook para navegación programática

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
      } catch (error) {
        console.error('Error al obtener el detalle del personaje:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  const handleGoBack = () => {
    navigate('/characters') // Navegar a la lista de personajes
    // Si le mando un -1, regresa a la página anterior
    // navigate(-1)
  }

  if (loading) return <p>Cargando detalle...</p>
  if (!character) return <p>Personaje no encontrado.</p>

  return (
    <div className='character-detail'>
      <img src={character.image} alt={character.name} />
      <div className='character-detail-info'>
        <h2>{character.name}</h2>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
      </div>

      <button onClick={handleGoBack} className='btn-back'>
        Volver a Personajes
      </button>
    </div>
  )
}

export default CharacterDetail

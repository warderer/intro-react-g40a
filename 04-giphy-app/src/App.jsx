import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  const sendSearch = async (search) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=20&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
      )
      const results = await response.json()
      setGifs(results.data)
    } catch (error) {
      console.error('Error fetching GIFs:', error)
    }
  }

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20&offset=0&rating=g&bundle=messaging_non_clips`
        )
        const results = await response.json()
        setGifs(results.data)
      } catch (error) {
        console.error('Error fetching GIFs:', error)
      }
    }

    fetchGifs()
  }, [])

  return (
    <>
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                url={gif.images.fixed_height.url}
                title={gif.title || 'Untitled GIF'}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App

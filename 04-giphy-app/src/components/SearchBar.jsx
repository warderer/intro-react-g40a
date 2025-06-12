import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder='Search for GIFs...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button
        className='search-button'
        onClick={() => { handleSearch(searchTerm) }}
      >
        Search
      </button>
    </div>
  )
}
export default SearchBar

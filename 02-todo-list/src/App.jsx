import { useState } from 'react'
import './App.css'

function App () {
  /* 1. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 3. Creo una función que se ejecuta cuando se hace clic a agregar */
  const handleAdd = () => {
    console.log('Añadir tarea:', inputValue)
  }
  return (
    <>
      <h1>Todo List</h1>
      {/* 2. Usar un evento onChange para guardar la información del estado, apenas esta sea tecleada */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Añadir</button>
      {/* ul>li{Item $}*3>button{Eliminar} */}
      <ul>
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App () {
  /* 1. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 4. Creo un nuevo estado para manejar la lista de tareas */
  const [tasks, setTasks] = useState([])

  /* 3. Creo una función que se ejecuta cuando se hace clic a agregar */
  /* 5. Modificar la función para agregar tareas a la lista */
  const handleAdd = () => {
    // console.log('Añadir tarea:', inputValue)
    setTasks([...tasks, inputValue])
    setInputValue('') // Limpiar el input después de añadir la tarea
  }

  /* 6. Crear una función para eliminar tareas */
  const deleteTodo = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
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
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            todoName={task}
            handleDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </>
  )
}

export default App

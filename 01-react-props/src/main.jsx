import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App saludo="Hola" title="G40A, Intro a React, soy un prop" />
    <App saludo="Hi" title="This is another component with diferent props" />
  </StrictMode>,
)

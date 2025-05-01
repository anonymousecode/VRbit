import { useState } from 'react'
import Earth from './components/earth.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Earth />
    </>
  )
}

export default App

import { useState } from 'react'
import Earth from './components/earth.jsx'
import Mars from './components/mars.jsx'
import Mercury from './components/mercury.jsx'
import Venus from './components/venus.jsx'
import Jupiter from './components/jupiter.jsx'
import Saturn from './components/saturn.jsx'
import Uranus from './components/uranus.jsx'
import Neptune from './components/neptune.jsx'
import './App.css'

const planets = [
  { name: 'Mercury', component: <Mercury /> },
  { name: 'Venus', component: <Venus /> },
  { name: 'Earth', component: <Earth /> },
  { name: 'Mars', component: <Mars /> },
  { name: 'Jupiter', component: <Jupiter /> },
  { name: 'Saturn', component: <Saturn /> },
  { name: 'Uranus', component: <Uranus /> },
  { name: 'Neptune', component: <Neptune /> },
]

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  return (
    <div className="app">
      {!selectedPlanet ? (
        <div className="planet-grid">
          {planets.map((planet) => (
            <button
              key={planet.name}
              className="planet-button"
              onClick={() => setSelectedPlanet(planet)}
            >
              {planet.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="planet-view">
          <button className="back-button" onClick={() => setSelectedPlanet(null)}>
            ← Back
          </button>
          {selectedPlanet.component}
        </div>
      )}
    </div>
  )
}

export default App

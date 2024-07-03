import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App

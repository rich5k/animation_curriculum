import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AnimationCurriculum from './animation_curriculum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AnimationCurriculum />
      </div>
    </>
  )
}

export default App

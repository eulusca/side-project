import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Content from './components/main'
import Sidebar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Content/>
     </div>
     </>  
  )
}

export default App

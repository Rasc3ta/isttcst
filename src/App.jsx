import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div className='min-w-[400px]'>
    <Navbar></Navbar>

    <div className='h-[80px]'>
    </div>
    <Outlet></Outlet>
     </div>
    
  )
}

export default App

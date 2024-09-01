import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from "./Components/Backgrounds/Background"
import Aboutus from './Pages/Aboutus'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import AboutBackground from './Components/Backgrounds/AboutBackground'

function App() {
  
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black dark:bg-gray-900 dark:text-white'>
 <Navbar className="fixed" />
     
      <Routes>
       <Route path="/" element={<HomePage/>} />

       <Route path="/about" element={<AboutBackground />} />
       
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from "./Components/Backgrounds/Background"
import Aboutus from './Pages/Aboutus'
import { useState } from 'react'

function App() {
  
  return (
    <div className='min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white'>
 
     
      <Routes>
       <Route path="/" element={<HomePage/>} />

       <Route path="/about-us" element={<Aboutus />} />
       
      </Routes>
    </div>
  )
}

export default App

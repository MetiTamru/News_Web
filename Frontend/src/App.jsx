import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from "./Components/Backgrounds/Background"
import Aboutus from './Pages/Aboutus'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import AboutBackground from './Components/Backgrounds/AboutBackground'
import OurTeam from './Pages/SubPages/OurTeam'
import BoardTeam from './Pages/SubPages/BoardTeam'
import TeamBackground from './Components/Backgrounds/TeamBackground'
import BoardteamBackground from './Components/Backgrounds/BoardteamBackground'
import ActivitiesBackround from './Components/Backgrounds/ActivitiesBackround'
import MeedanBg from './Components/Backgrounds/MeedanBg'
import UnescoBg from './Components/Backgrounds/UnescoBg'
import OsiBg from './Components/Backgrounds/OsiBg'
import BbcBg from './Components/Backgrounds/BbcBg'
import CipesaBg from './Components/Backgrounds/CipesaBg'
import ImsB from './Components/Backgrounds/ImsB'
import FreeBg from './Components/Backgrounds/FreeBg'
import FocusBg from './Components/Backgrounds/FocusBg'

function App() {
  
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black dark:bg-gray-900 dark:text-white'>
 <Navbar className="fixed" />
     
      <Routes>
       <Route path="/" element={<HomePage/>} />

       <Route path="/about" element={<AboutBackground />} />
       <Route path="/about/team" element={<TeamBackground />} />
       <Route path="/about/board-team" element={<BoardteamBackground />} />
       <Route path="/activities" element={<ActivitiesBackround />} />
       <Route path="/activities/meedan-inform-africa" element={<MeedanBg />} />
       <Route path="/activities/unesco-inform-africa" element={<UnescoBg />} />
       <Route path="/activities/osiea-inform-africa" element={<OsiBg />} />
       <Route path="/activities/bbc-inform-africa" element={<BbcBg />} />
       <Route path="/activities/cipesa-inform-africa" element={<CipesaBg />} />
       <Route path="/activities/ims-inform-africa" element={<ImsB />} />
       <Route path="/activities/free-press-unlimited-inform-africa" element={<FreeBg />} />
       <Route path="/focus-areas" element={<FocusBg />} />
      </Routes>
    </div>
  )
}

export default App

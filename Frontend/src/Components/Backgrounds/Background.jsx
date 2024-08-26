import React, { useEffect, useState } from 'react';
import bg1 from '../../assets/bgp6.png';
import bg2 from '../../assets/bg3.jpg';
import bg3 from '../../assets/bgp13.png';
import bg4 from '../../assets/bgp10.png';
import play from '../../assets/play_icon.png';
import pause from '../../assets/pause_icon.png';

import Home from '../../Pages/Home/Home';
import Navbar from '../Navbar';

function Background() {
  let homeData = [
    { text1: "Inform", text2:"Africa", text3: "Hub of Digital Rights, Technology, Media Research, and Development" },
    { text1: "Hello ", text2:"Africa", text3: "Hub of Digital Rights, Technology, Media Research, and Development"},
    { text1: "whats", text2:"Africa", text3: "Hub of Digital Rights, Technology, Media Research, and Development"},
    { text1: "News", text2:"Africa", text3: "Hub of Digital Rights, Technology, Media Research, and Development" }
  ];
  
  const [textCount, setTextcount] = useState(0); // Starting at 2
  const [playStatus, setPlayStatus] = useState(true); // Start in play mode

  // Array to manage background images
  const backgroundImages = [bg1, bg2, bg3, bg4];
  const backgroundImage = backgroundImages[textCount];



  return (
    <>
      <Navbar />
      <div className="relative z-10 ">
        <Home
          setPlayStatus={setPlayStatus}
          homeData={homeData[textCount]}
          textCount={textCount}
          setTextcount={setTextcount}
          playStatus={playStatus}
        />
        {/* Play/Pause Button */}
        
      </div>
      {/* Background Image */}
      <img
        src={backgroundImage}
        className="fade-in absolute inset-0 h-full w-full object-cover z-0"
        alt=""
      />

     
    </>
  );
}

export default Background;

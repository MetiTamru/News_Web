import React, { useEffect, useState } from 'react';
import bg1 from '../../assets/bgp6.png';
import bg2 from '../../assets/boardimg.png';
import bg3 from '../../assets/bgp13.png';
import bg4 from '../../assets/bgp10.png';
import Aboutus from '../../Pages/Aboutus';
import OurTeam from '../../Pages/SubPages/OurTeam';




function TeamBackground() {
 
  




  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <OurTeam/>

        
      </div>

      <img src={bg2} 
      className="fade-in  absolute overflow-scroll inset-0 h-team-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default TeamBackground;


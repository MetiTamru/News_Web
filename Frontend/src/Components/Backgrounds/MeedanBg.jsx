import React, { useEffect, useState } from 'react';
import bg1 from '../../assets/bgp6.png';
import bg2 from '../../assets/meedan3.png';
import bg3 from '../../assets/bgp13.png';
import bg4 from '../../assets/bgp10.png';
import Aboutus from '../../Pages/Aboutus';
import Meedan from '../../Pages/SubPages/Partners/Meedan'




function MeedanBg() {
 
  




  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Meedan/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default MeedanBg;


import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/imsafro.png';

import Unesco from '../../Pages/SubPages/Partners/Unesco';
import Ims from '../../Pages/SubPages/Partners/Ims';




function ImsB() {

  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Ims/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default ImsB;







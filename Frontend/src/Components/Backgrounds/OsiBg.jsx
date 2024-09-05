import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/osiafro.png';

import Unesco from '../../Pages/SubPages/Partners/Unesco';
import Ims from '../../Pages/SubPages/Partners/Ims';
import Osi from '../../Pages/SubPages/Partners/Osi';




function OsiBg() {

  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Osi/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default OsiBg;








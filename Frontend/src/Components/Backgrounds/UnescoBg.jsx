import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/unescoafro.png';

import Unesco from '../../Pages/SubPages/Partners/Unesco';




function UnescoBg() {

  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Unesco/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default UnescoBg;






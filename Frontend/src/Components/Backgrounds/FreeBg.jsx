import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/freeafro.png';


import Free from '../../Pages/SubPages/Partners/Free';




function FreeBg() {

  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Free/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default FreeBg;










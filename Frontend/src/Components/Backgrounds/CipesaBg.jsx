import React, { useEffect, useState } from 'react';
import bg2 from '../../assets/cipesaafro.png';


import Cipesa from '../../Pages/SubPages/Partners/Cipesa';




function CipesaBg() {

  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Cipesa/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-activity-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default CipesaBg










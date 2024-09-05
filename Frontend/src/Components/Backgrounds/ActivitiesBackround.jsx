import React, { useEffect, useState } from 'react';

import bg2 from '../../assets/boardimg.png';
import BoardTeam from '../../Pages/SubPages/BoardTeam';
import Activities from '../../Pages/Activities';






function ActivitiesBackround() {
 
  




  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <Activities/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-team-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default ActivitiesBackround;





import React, { useEffect, useState } from 'react';

import bg2 from '../../assets/team1.png';
import BoardTeam from '../../Pages/SubPages/BoardTeam';






function BoardteamBackground() {
 
  




  return (
    <div className='w-full h-full'>
      <div className="relative z-10 ">
      <BoardTeam/>

        
      </div>

      <img src={bg2} 
      className="fade-in absolute overflow-scroll inset-0 h-team-height w-full object-cover z-0"      alt="" />
     
     
    </div>
  );
}

export default BoardteamBackground;



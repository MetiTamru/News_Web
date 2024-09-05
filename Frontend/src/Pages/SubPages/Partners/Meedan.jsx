import React, { useEffect } from 'react'
import meedan from '../../../assets/Meedan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faHandshake, faBalanceScale, faBriefcase, faCheckCircle, faPersonCircleCheck, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Meedan() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div className=" bg-white rounded-full flex justify-center items-center  lg:top-80 ml-8 lg:ml-32  top-60 h-profile-height w-profile-width relative shadow-2xl">
        <div className="h-28 w-28 border-2  rounded-full border-white  flex justify-center items-center "
        >
          <div className="flex justify-center  items-center w-28 h-28 border-2 border-primary rounded-full">
          <img src={meedan} className= "absolute bg-white  rounded-full  h-20 w-20  " alt="" />
          </div>
        </div>
      </div>
      <Description/>
      <Footer/>
    </div>
  )
}

const Description = () => (
  <div className="mt-80 max-w-4xl mx-auto px-6 lg:px-0 space-y-8">
    <div>
      <div className="flex justify-between">
      <h1 className="text-4xl mb-2 dark:text-gray-100  text-gray-900">Meedan</h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-primary text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl hover:text-pink-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
        Meedan is a global technology not-for-profit that builds software and programmatic initiatives to strengthen journalism, digital literacy, and accessibility of information online and off.
      </p>
    </div>
    
    <div>
      <h1 className="text-4xl mt-16 text-gray-900 dark:text-gray-100">Check Global</h1>
      <p className="text-sm text-gray-500  mt-2">MARCH 2022 – CURRENT</p>
    
      <p className="text-base text-gray-500 mt-6 dark:text-gray-300">
        Inform Africa, under Meedan’s Check Global program, is executing a project to onboard interns and provide on-the-job training on fact-checking, disinformation, misinformation, and media monitoring. Aside from the internship program on this project, Inform Africa will organize online campaigns, panel discussions, and research launches in media literacy and countering disinformation.
      </p>
      <p className="text-base mb-32 dark:text-gray-300 text-gray-500 mt-4">
        Meedan’s Check Global program supports independent journalism, media literacy, and human rights efforts by providing software, training, and networking opportunities to independent media organizations, journalism schools, and human rights activists in the Asia Pacific, Latin America, and the Caribbean, North Africa/Western Asia, and Sub-Saharan Africa regions.
      </p>
    </div>
  </div>
);


export default Meedan
import React, { useEffect } from 'react'
import bbc from '../../../assets/cipesa1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Cipesa() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div className=" bg-white rounded-full flex justify-center items-center  lg:top-80 ml-8 lg:ml-32  top-60 h-profile-height w-profile-width relative shadow-2xl">
        <div className="h-28 w-28 border-2  rounded-full border-white  flex justify-center items-center "
        >
          <div className="flex justify-center  items-center w-28 h-28 border-2 border-primary rounded-full">
          <img src={bbc} className= "absolute bg-white  rounded-full  h-20 w-20  " alt="" />
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
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">CIPESA</h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-orange-500 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-orange-500 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-orange-500 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      CIPESA, the Collaboration on International ICT Policy for East and Southern Africa, is a research and advocacy organization focused on advancing ICT policies that support human rights, digital freedoms, and equitable access to technology in East and Southern Africa. It aims to empower citizens and promote transparent and inclusive digital governance.
      </p>
      <h1 className="text-5xl mb-2 dark:text-gray-100  text-gray-900"></h1>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      
      </p>
    </div>
    
    <div>
      <h1 className=" text-4xl mt-16 text-gray-900 dark:text-gray-100">Disinformations Impact Study</h1>
      <p className="text-sm text-gray-500  mt-2">OCT 21, 2021 – FEB 28, 2021</p>
    
      <p className="text-base  text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa is currently collaborating with CIPESA on a study on disinformation in Ethiopia. CIPESA and partners are conducting the research in five African countries (Cameroon, Ethiopia, Kenya, Nigeria, and Uganda), notably around periods of political contestation such as elections and anti-government protests, as well as that related to hate speech.  
      </p>
      <p className="text-base mb-40 text-gray-500 mt-6 dark:text-gray-300">
      The aim is to understand the nature, perpetrators, strategies, and pathways of disinformation, and its effects on democratic actors including civil society, bloggers, government critics, and activists. Further, the project will study the adequacy and effectiveness of remedial measures by platforms, as well as government responses to disinformation. The project will generate evidence to inform multi-stakeholder advocacy for greater transparency and robust action by platforms to minimize harms and to combat disinformation, and proposals on national regulation that fully protects free expression and democratic values while combating what is indisputably harmful content and practices.
      </p>
    </div>
  </div>
);


export default Cipesa






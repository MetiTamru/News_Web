import React, { useEffect } from 'react'
import bbc from '../../../assets/osiea.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Osi() {

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
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">OSIEA</h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-pink-700 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-pink-700 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-pink-700 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      OSIEA, the Open Society Initiative for Eastern Africa, is dedicated to advancing human rights, democracy, and good governance in Eastern Africa. It supports civil society organizations and initiatives that promote transparency, accountability, and social justice in the region.
      </p>
      <h1 className="text-5xl mb-2 dark:text-gray-100  text-gray-900"></h1>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      
      </p>
    </div>
    
    <div>
      <h1 className=" text-4xl mt-16 text-gray-900 dark:text-gray-100">Disinformation & Human Rights</h1>
      <p className="text-sm text-gray-500  mt-2">OCT 1, 2020 – MARCH 31, 2022</p>
    
      <p className="text-base  text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa and its media partner, Addis Zeybe, are working on a project entitled Combating Disinformation and Human Rights Violation through fact-checking and investigative reporting with the support of the Open Society Initiative for East Africa (OSIEA).  
      </p>
      <p className="text-base mb-40 text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa’s HaqCheck initiative, is a local and multilingual fact-checking initiative from Ethiopia, formed in partnership with Addis Zeybe, dedicated to verifying media content from social to mainstream. HaqCheck has been fact-checking various social and mainstream media content that went viral, misinformed the public on COVID-19, and promoted vaccine hesitancy. Investigative reporting on Human Rights Violations in Ethiopia is the other aspect of the project. 
      </p>
    </div>
  </div>
);


export default Osi




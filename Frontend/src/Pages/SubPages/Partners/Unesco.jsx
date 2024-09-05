import React, { useEffect } from 'react'
import bbc from '../../../assets/unesco2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Unesco() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
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
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">UNESCO </h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-blue-500 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      The United Nations Educational, Scientific and Cultural Organization is a specialized agency of the United Nations with the aim of promoting world peace and security through international cooperation in education, arts, sciences and culture. 
      </p>
      <h1 className="text-5xl mb-2 dark:text-gray-100  text-gray-900"></h1>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      
      </p>
    </div>
    
    <div>
      <h1 className=" text-4xl mt-16 text-gray-900 dark:text-gray-100">Combating COVID Disinfomation</h1>
      <p className="text-sm text-gray-500  mt-2">July 01, 2021 – current</p>
    
      <p className="text-base mb-5 text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa’s Combating Disinformation project is being supported by the United Nations Educational, Scientific and Cultural Organization (UNESCO) with a common objective of providing a long-lasting preventive mechanism and a swift remedy for information pollution by adopting the evolving fact-checking solutions at the national level and beyond. 
      </p>
      <p className="text-base text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa has planned to accomplish its objectives firstly through a partnership with an already existing partnership it has maintained through its media partner Addis Zeybe.  
      </p>
      <p className="text-base mb-40 text-gray-500 mt-6 dark:text-gray-300">
      The Addressing Disinformation project will utilize the in-house HaqCheck initiative to ensure that the reporting it undertakes can be wholly truthful and independent. As a recently established initiative, the project is in a position to act as an example of a new higher standard for combating disinformation.  
      </p>
    </div>
  </div>
);


export default Unesco


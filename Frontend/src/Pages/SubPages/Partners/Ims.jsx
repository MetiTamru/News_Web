import React, { useEffect } from 'react'
import bbc from '../../../assets/ims.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Ims() {

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
        <div className="">
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">Media Literacy Campaign </h1>
      <p className="text-sm text-gray-500  mt-2">JANUARY 2022 – SEPTEMBER 2022</p>
      </div>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-blue-500 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base mb-5 text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa with support from its media partner Addis Zeybe, is in the process of screening and selecting twenty social media influencers to give training on the five competencies of media literacy. They will be trained on a set of skills that will enable them to access media, analyze media content, create new media messages, reflect on existing media content, and take action with media. After concluding their training, the trainees will conduct social media campaigns in four rounds.
      </p>
      <p className="text-base mb-40 text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa will train and equip the influencers with packaged campaign materials prepared by its research team. The social media influencers will run the campaign using the materials by adding their creativity under close supervision and monitoring from the designated facilitator.  
      </p>
      
    </div>
  </div>
);


export default Ims



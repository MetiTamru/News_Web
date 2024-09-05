import React, { useEffect } from 'react'
import bbc from '../../../assets/freepress.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Free() {

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
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">Free Press Unlimited</h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-pink-700 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-pink-700 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-pink-700 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      Free Press Unlimited is an international organization dedicated to promoting and protecting independent journalism and freedom of the press. It supports journalists and media organizations around the world, advocating for media freedom and providing resources to ensure a diverse and vibrant media landscape.
      </p>
      <h1 className="text-5xl mb-2 dark:text-gray-100  text-gray-900"></h1>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      
      </p>
    </div>
    
    <div>
      <h1 className=" text-4xl mt-16 text-gray-900 dark:text-gray-100">Holistic COVID Reporting</h1>
      <p className="text-sm text-gray-500  mt-2">DEC 2020 – SEP 2021</p>
    
      <p className="text-base  text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa has been working with Free Press Unlimited (FPU), a media development organization based in the Netherlands on a holistic reporting of the CoronaVirus pandemic and its socio-political and economic impact in Ethiopia under the Covid-19 response in Africa. The project is funded by the European Commission and Inform Africa has been tracking and monitoring misinformation reports on Covid-19 since Dec of 2020.  
      </p>
      <p className="text-base mb-40 text-gray-500 mt-6 dark:text-gray-300">
      To address misinformation related to COVID-19, Inform Africa has conducted a thorough report on the impact of the pandemic on schooling, health services, the media, and IDPs. In addition, Inform Africa hosted a heated and fruitful Policy Debate on COVID-19 between frontrunner  Political Parties running in the 2021 General Election in Ethiopia.
      </p>
    </div>
  </div>
);


export default Free





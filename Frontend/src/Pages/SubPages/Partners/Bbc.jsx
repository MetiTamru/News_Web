import React, { useEffect } from 'react'
import bbc from '../../../assets/bbc.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../../Components/Footer';

function Bbc() {

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
      <h1 className=" text-4xl mb-2 dark:text-gray-100  text-gray-900">BBC Media Action</h1>
      <div className="flex space-x-4 mt-2">
        <FontAwesomeIcon icon={faTwitter} className="text-pink-700 text-2xl hover:text-blue-700" />
        <FontAwesomeIcon icon={faLinkedin} className="text-pink-700 text-2xl hover:text-blue-800" />
        <FontAwesomeIcon icon={faInstagram} className="text-pink-700 text-2xl hover:text-blue-700" /> {/* Assuming "fain" was meant to be "faInstagram" */}
      </div>
      </div>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      BBC Media Action has been working in Ethiopia since 2001 to provide people with reliable, trusted information to help keep themselves and their families healthy and build the capacity of local public-interest media and journalists.
      </p>
      <h1 className="text-5xl mb-2 dark:text-gray-100  text-gray-900"></h1>
      <p className="text-base dark:text-gray-300 text-gray-500 mt-4">
      
      </p>
    </div>
    
    <div>
      <h1 className=" text-4xl mt-16 text-gray-900 dark:text-gray-100">Countering Disinformation in Ethiopia</h1>
      
    
      <p className="text-base mb-32 text-gray-500 mt-6 dark:text-gray-300">
      Inform Africa, in partnership with  BBC Media Action Ethiopia, organized and delivered training on “Practical experience of countering disinformation in Ethiopia” for journalists and media experts who were chosen from various media institutes and have a variety of educational and professional backgrounds.
      </p>
      
    </div>
  </div>
);


export default Bbc

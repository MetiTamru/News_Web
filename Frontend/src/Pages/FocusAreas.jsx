import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Components/Footer';





function FocusAreas() {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;
    element.classList.add('opacity-0', 'translate-y-4'); 
    setTimeout(() => {
      element.classList.add('animate-fadeIn');
    }, 100); 
  }, []);
  return (
    <div className="">
    <section
    ref={heroRef}
    className=" text-white flex flex-col justify-center items-center py-16 px-4 text-center transition-all duration-700 ease-out"
  >
    <div className="max-w-3xl mx-auto">
    <p className='text-sm mb-4 lg:mt-24 text-primary' >OUR FOCUS</p>
    <h1 className="text-3xl   font-bold mb-4 " style={{ wordSpacing: '6px' }}>
  OUR F<span className="underline-primary">ocus</span> <span className='text-primary'>Areas</span>
  
</h1>
      <p className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
      We focus on empowering Truth, Insight, and Innovation for a Brighter Future.
      </p>
      <div className="mt-5"><Link to={"/"}>
    <button className= 'border-x-2 hover:text-primary rounded-full py-2 px-4 border-primary'>Our Board Team <FontAwesomeIcon icon={faArrowRight} className='ml-5'/></button>
    </Link></div>
    </div>
    
    
  </section>
  <Footer/>
  </div>
  )
}

export default FocusAreas



import React, { useEffect, useState } from 'react';
import bg2 from '../assets/about1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBalanceScale, faBriefcase, faCheckCircle, faPersonCircleCheck, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {  faLock, faBook, faChalkboardTeacher, faSearch, faCogs } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer';
import aboutbg from "../assets/aboutbg.png"

const coreValues = [
  { title: 'Professionalism', icon: faBriefcase, description: 'Upholding the highest standards of conduct and ethics.' },
  { title: 'Accountability', icon: faPersonCircleCheck , description: 'Taking responsibility for our actions and their impact.' },
  { title: 'Independence', icon: faUnlockAlt, description: 'Ensuring unbiased reporting and decision-making.' },
  { title: 'Accuracy', icon: faCheckCircle, description: 'Providing truthful and precise information.' },
];


const Whatwedo = [
  {
    title: 'Fact-Checking',
    icon: faCheckCircle,
    description: 'Ensuring the accuracy of news and information.',
  },
  {
    title: 'Digital Rights Advocacy',
    icon: faLock,
    description: 'Promoting and protecting digital rights and privacy.',
  },
  {
    title: 'Media Literacy',
    icon: faBook,
    description: 'Educating the public on how to critically evaluate media.',
  },
  {
    title: 'Media Training',
    icon: faChalkboardTeacher,
    description: 'Providing training to improve media skills and knowledge.',
  },
  {
    title: 'Media Research',
    icon: faSearch,
    description: 'Conducting research to support informed media practices.',
  },
  {
    title: 'Media Technology Development & Support',
    icon: faCogs,
    description: 'Developing and supporting media technology solutions.',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const WhatwedoSection = ({ title, icon, description }) => {
  const controls = useAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.getElementById(title); 
      if (element && scrollPosition > element.offsetTop) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls, title]);


  return (
    <motion.div
      id={title}
      className=" rounded-lg p-8 flex flex-col items-center"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};


function Aboutus() {
  
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('coreMission');
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      requestAnimationFrame(() => {
        controls.start(i => ({
          opacity: scrollY > (i * 70) ? 1 : 0, 
          y: scrollY > (i * 70) ? 0 : 100,
          transition: { duration: 0.5 }
        }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, controls]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      
  <div className="text-white py-16 h-about-height items-center px-6 md:px-12 lg:px-24 text-center">

<div className='absolute top-48 lg:top-80 mt-10 lg:right-3 flex flex-col gap-4 ml-3 right-4'>



  <FontAwesomeIcon icon={faTwitter} className='text-blue-500'/>

  <FontAwesomeIcon icon={faLinkedin} className='text-primary w-4 h-4 rounded-full'/>
</div>

    <p className="text-3xl font-bold mt-20 lg:mt-36 mb-4 leading-tight">About Us</p>
    
    <p className="text-base max-w-3xl mx-auto leading-relaxed">
      Inform Africa aims to lead in fact-checking and media training by developing in-house media technology and research, supporting local media houses in Ethiopia.
    </p>
    <Link to={"/"}>
    <button className='bg-primary py-2 px-4 mt-8 mr-5'>Contact us</button>
    </Link>
    <Link to={"/"}>
    <button className= 'border-2 py-2 px-4 border-primary'>See our Partners <FontAwesomeIcon icon={faArrowRight}/></button>
    </Link>
  </div>
 

  <div className="absolute hidden md:block top-40 lg:top-72 text-white text-sm  flex-col gap-4 ml-3 right-5">
          <p className="transform rotate-90 origin-right text-sm top-1 ">FOLLOW US HERE  <FontAwesomeIcon icon={faArrowRight} className=''/></p>

        </div>
      <div className="py-16 mt-28 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {coreValues.map((value, index) => (
            <motion.div
            key={index}
            className="p-6 rounded-lg"
            custom={index}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
          >
              <FontAwesomeIcon icon={value.icon} className="tex text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>



      <motion.div
  className="flex flex-col  md:flex-row items-center md:items-start rounded-lg p-6 md:p-8 gap-8 md:gap-12"
  style={{
    backgroundImage: `url(${aboutbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Optional: Prevents the image from repeating
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }} // Adjust amount to trigger earlier
  variants={fadeInVariants}
>
    <div className="flex-shrink-0 md:pt-10 w-full md:w-auto"></div>
    <div className="flex-1 md:mt-10  text-white py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-start mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl  text-white font-bold mb-8">
          About Us
        </h1>
        <p className="text-base leading-7 text-gray-300 ">
        Inform Africa is a hub for digital rights technology, media research and development. Inform Africa is a broad-led, for-non-profit organization that has been registered and accorded legal personality with a registry number 5520 on March 23, 2021, as a local organization under the Ethiopia Civil Society Organizations Proclamation 1113/2019 by FDRE Authority for Civil society Organizations.  13/2019.
        </p>
   </div>
   {/* Tabs Section */}
   <div className="flex  flex-col justify-around md:flex-row text-start px-2 md:px-4 lg:px-8 gap-4 md:gap-8 mb-12">
      {/* Tab for Core Mission */}
      <p
  className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300
    ${activeTab === 'coreMission' 
      ?  'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500  shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
  onClick={() => handleTabClick('coreMission')}
>
  Our Vision
</p>


      {/* Tab for Capacity-Building Initiatives */}
      <p
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'capacityBuilding' ? 
           'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500  shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
        onClick={() => handleTabClick('capacityBuilding')}
      >
      Our Mission
      </p>

      {/* Tab for HaqCheck */}
      <p
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'haqCheck' ? 
           'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500 shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
        onClick={() => handleTabClick('haqCheck')}
      >
       Our Aim
      </p>
      <p
        className={`cursor-pointer py-2 px-3 lg:px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'management' ? 
            'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500  shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
        onClick={() => handleTabClick('management')}
      >
      Our Management
      </p>
    </div>

    {/* Tab Contents */}
    <motion.div
      className={`tab-contents ${activeTab === 'coreMission' ? 'block' : 'hidden'}`}
      variants={descriptionVariants}
      initial="hidden"
      animate={activeTab === 'coreMission' ? 'visible' : 'hidden'}
    >
      <p className="text-base leading-7 text-gray-300 mb-12 px-2 md:px-4 lg:px-8">
      To create a hub for the development of the media industry in Ethiopia and Africa by accounting media innovation and professionalism to create informed, inspired, and empowered society through media education, countering disinformation, research, strategic intervention, and building the capacity of the media for the social, political and economic development of the nation and continent.
      </p>
    </motion.div>

    <motion.div
      className={`tab-contents ${activeTab === 'capacityBuilding' ? 'block' : 'hidden'}`}
      variants={descriptionVariants}
      initial="hidden"
      animate={activeTab === 'capacityBuilding' ? 'visible' : 'hidden'}
    >
      <p className="text-base leading-7 text-gray-300 mb-12 px-2 md:px-4 lg:px-10">
      Facilitating capacity-building initiatives in the African Continent to utilize modern media technologies in a safe and healthy media environment by managing media education and information disorder through professional and high-scale knowledge and tools.


      </p>
    </motion.div>

    <motion.div
      className={`tab-contents ${activeTab === 'haqCheck' ? 'block' : 'hidden'}`}
      variants={descriptionVariants}
      initial="hidden"
      animate={activeTab === 'haqCheck' ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col md:flex-row ml-2 items-start rounded-lg   ">
        <div className="flex-1">
          
        <p className="text-base leading-7 text-gray-300 mb-12 px-2 md:px-4 lg:px-10">
          Inform Africa envisages countering disinformation and media capacity building by filling the gap in media literacy, research, technology, and digital rights.
          </p>
         
        </div>
      </div>
    </motion.div>

    <motion.div
      className={`tab-contents ${activeTab === 'management' ? 'block' : 'hidden'}`}
      variants={descriptionVariants}
      initial="hidden"
      animate={activeTab === 'management' ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col md:flex-row ml-2 items-start rounded-lg   ">
        <div className="flex-1">
          
        <p className="text-base leading-7 text-gray-300 mb-12 px-2 md:px-4 lg:px-10">
          Inform Africa is a Board-led civic society organization where an executive director selected by the board of directors is in charge of the day-to-day activity of the organization. There are five main departments themed based on the focus areas under the Executive Director all with their department head and specific roles and responsibilities. Additional divisions will be operating under the departments.
          </p>
          
        </div>
      </div>
    </motion.div>
    


   </div>
  </motion.div>




<div className='mb-20'>
<h2 className="text-3xl font-bold text-center mt-32 mb-8">What We Do</h2>
<p className="text-center ml-52 mr-52 text-gray-600 dark:text-gray-300 mb-10">
At Inform Africa, we empower communities through media literacy and accurate journalism.
</p> <div></div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
    
      {Whatwedo.map((value, index) => (
        <WhatwedoSection key={index} title={value.title} icon={value.icon} description={value.description} />
      ))}
    </div>
    </div>
    <Footer/>
    </div>
  );
}





export default Aboutus;

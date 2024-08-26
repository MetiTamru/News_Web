import React, { useEffect, useState } from 'react';
import "./Home.css";
import play from '../../assets/play_icon.png';
import pause from '../../assets/pause_icon.png';
import arrow from "../../assets/arrow.png";
import HaqCheck from "../../assets/HaqCheck.png";

import background from "../../assets/background.jpg";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import africa from '../../assets/africa.jpeg'
import footerBg from "../../assets/background.jpg"

import { faSearch, faDatabase, faChartLine, faChalkboardTeacher, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { Link } from 'react-router-dom';
import latestNewsImage from '../../assets/background.jpg'; // Update with the path to your image
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCogs, faTint, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons


const newsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
function Home({ homeData, setTextcount, textCount, setPlayStatus, playStatus }) {
    const handleTextCountChange = (newCount) => {
        setTextcount(newCount);
    };

    useEffect(() => {
        if (!playStatus) return;
        const interval = setInterval(() => {
            setTextcount((count) => (count === 3 ? 0 : count + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [playStatus, setTextcount]);

    const togglePlayStatus = () => {
        setPlayStatus((prevStatus) => !prevStatus);
        if (playStatus) {
            document.documentElement.classList.remove('home-texts');
            document.documentElement.classList.add('paused');
        } else {
            document.documentElement.classList.remove('paused');
            document.documentElement.classList.add('home-texts');
        }
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.6, ease: 'easeOut' } }
    };

    
      const fadeInVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
      };
      const [activeTab, setActiveTab] = useState('coreMission');

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

      const slideInVariants = {
        hidden: {
            x: '100%', 
            opacity: 0
        },
        visible: {
            x: 0, 
            opacity: 1,
            transition: {
                type: 'tween',
                ease: 'easeInOut', 
                duration: 0.8,
            }
        }
    };
    

    return (
        <div className='home relative h-full flex flex-col justify-center items-center md:items-start'>
            <div className={`text-content md:ml-32 text-center flex flex-col gap-7 md:text-start ${playStatus ? 'home-texts' : 'paused'}`}>
                <p className='home-text text-4xl md:text-8xl md:mt-10 '>
                    {homeData.text1} <span className='text-[#F2B616] text-center'>{homeData.text2}</span>
                </p>
                <p className='description text-white md:ml-0 md:mr-0 ml-8 mr-8'>{homeData.text3}</p>
            </div>

            <div className="explore rounded-full md:ml-32 mt-16 md:mt-14 items-center flex justify-center">
                <p className='text-black ml-5 mr-5'>Explore More</p>
                <div>
                    <img src={arrow} className='h-14 w-14 rounded-full' alt="Explore More" />
                </div>
            </div>

            <div className="play md:ml-32 md:mt-16 mt-8">
                <button 
                    onClick={() => togglePlayStatus()} 
                    className="w-16 h-16 text-white rounded"
                >
                    {playStatus ? <img src={pause} alt="Pause" /> : <img src={play} alt="Play" />}
                </button>
                <ul className="dots mt-4 flex gap-2 justify-center">
                    {[0, 1, 2, 3].map((index) => (
                        <li
                            key={index}
                            onClick={() => handleTextCountChange(index)}
                            className={textCount === index ? "dot orange" : "dot"}
                        ></li>
                    ))}
                </ul>
            </div>

            {/* Enhanced HaqCheck UI with Scroll Animation */}
            <motion.div
                ref={ref}
                className="bottom-content mb-32 md:mt-44 mt-28 w-full p-10"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <p className="text-3xl md:mb-20 font-semibold mb-6 text-center">Focus Areas</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* HaqCheck Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-60 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faSearch} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">HaqCheck</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">A multilingual fact-checking initiative to ensure information accuracy.</p>
                        </div>
                       
                    </motion.div>

                    {/* Data Lab Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-60 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faDatabase} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Data Lab</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Providing insightful data analysis for informed decision-making.</p>
                        </div>
                        
                    </motion.div>

                    {/* Information Research Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-60 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Information Research</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Conducting thorough research to support reliable information dissemination.</p>
                        </div>
                       
                    </motion.div>

                    {/* Training Center Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-60 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-[#F2B616] mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Training Center - Media</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Offering training programs to enhance media literacy and skills.</p>
                        </div>
                       
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
            className="flex flex-col md:flex-row items-center md:items-start  shadow-lg rounded-lg p-6 md:p-8 gap-8 md:gap-12 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
           
        >
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    src={africa}
                    alt="About Us"
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                />
            </div>

            <div className="flex-1 dark:bg-black text-white py-10 px-6 md:px-12">
                {/* About Us Section */}
                <div className="text-start mb-12 px-4 md:px-8 lg:px-12">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Us
        </h1>

          {/* Description Section */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Inform Africa analyzes disinformation to manage risks and upholds media integrity in Ethiopia and beyond. 
              Its Disinformation Analysis Initiative leverages advanced technology for media monitoring and research, 
              advocating for digital rights, literacy, and professional excellence.
          </p>
      </div>


                {/* Tabs Section */}
                <div className="flex text-start px-4 md:px-8 lg:px-12 flex-row gap-8 md:gap-12 mb-12">
    {/* Tab for Core Mission */}
                <p
                    className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
                                ${activeTab === 'coreMission' ? 
                                  'dark:text-white text-black  border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-lg' : 
                                  'bg-transparent dark:text-gray-300 text-black border dark:border-gray-300  border-black hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
                    onClick={() => handleTabClick('coreMission')}
                >
                    Core Mission
                </p>

                {/* Tab for Capacity-Building Initiatives */}
                <p
                    className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
                                ${activeTab === 'capacityBuilding' ? 
                                 'dark:text-white text-black  border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-lg' : 
                                  'bg-transparent dark:text-gray-300 text-black border dark:border-gray-300  border-black hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
                    onClick={() => handleTabClick('capacityBuilding')}
                >
                    Capacity-Building Initiatives
                </p>

                {/* Tab for HaqCheck */}
                <p
                    className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
                                ${activeTab === 'haqCheck' ? 
                                 'dark:text-white text-black  border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-lg' : 
                                  'bg-transparent dark:text-gray-300 text-black border dark:border-gray-300  border-black hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
                    onClick={() => handleTabClick('haqCheck')}
                >
                    HaqCheck
                </p>
            </div>

                {/* Tab Contents */}
                <motion.div
                className={`tab-contents ${activeTab === 'coreMission' ? 'block' : 'hidden'}`}
                variants={slideInVariants}
                initial="hidden"
                animate={activeTab === 'coreMission' ? 'visible' : 'hidden'}
            >
               <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12 px-4 md:px-8 lg:px-12">
                    Inform Africa believes that its core mission and capability to carry out innovative projects, together with its motivated and experienced staff, makes it an ideal choice for partnership and collaboration.
                </p>
            </motion.div>

            <motion.div
                className={`tab-contents ${activeTab === 'capacityBuilding' ? 'block' : 'hidden'}`}
                variants={slideInVariants}
                initial="hidden"
                animate={activeTab === 'capacityBuilding' ? 'visible' : 'hidden'}
            >
                 <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12 px-4 md:px-8 lg:px-12">
                    Facilitating capacity-building initiatives in the African Continent to utilize modern media technologies in a safe and healthy media environment by managing media education and information disorder through professional and high-scale knowledge and tools.
                </p>
            </motion.div>

            <motion.div
                className={`tab-contents ${activeTab === 'haqCheck' ? 'block' : 'hidden'}`}
                variants={slideInVariants}
                initial="hidden"
                animate={activeTab === 'haqCheck' ? 'visible' : 'hidden'}
            >
                <div className="md:flex-row ml-5 items-center md:items-start rounded-lg p-6 md:p-8 gap-8">
                   
                    <div className="flex-1">
                        <h2 className="text-2xl   font-semibold text-[#F2B616] mb-4">HaqCheck</h2>
                        <p className="text-md text-gray-800 dark:text-gray-300">
                            HaqCheck is a local and multilingual fact-checking initiative focused on ensuring information accuracy across various media platforms. Our goal is to enhance public trust in media through rigorous verification processes and transparent reporting.
                        </p>
                            <div className="explore rounded-full w-48  mt-10 items-center ">
                        <p className='text-black ml-5 mr-5'>Explore More</p>
                        <div>
                        <img src={arrow} className='h-14 w-14 rounded-full' alt="Explore More" />
                    </div>
                </div>
                    </div>
                </div>
            </motion.div>
            </div>
            </motion.div>
            <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={newsVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Image Section */}
         
        </motion.div>
      </div>
    </section>
<FooterSection/>
            </div>   
      
    );
}

const FooterSection = () => (
    <footer className="bg-gray-900 pl-5 md:pl-20 pr-20 text-white py-12 mt-20"
    style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Optional: Prevents the image from repeating
      }}>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
      
      {/* About Section */}
        <div className="col-span-1">
    <h3 className="text-xl font-semibold mb-4">About Inform Africa</h3>
    <p className="text-gray-400">
        FactCheck News is dedicated to providing accurate and reliable news by thoroughly fact-checking every story we publish. Our mission is to combat misinformation and ensure that our readers are informed with verified and trustworthy information. We strive to uphold the highest standards of journalism to support a well-informed public.
    </p>
    </div>


      {/* Quick Links */}
      <div className="col-span-1">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="text-gray-400 space-y-2">
          <li><a href="/about-us" className="hover:text-[#F2B616]">About Us</a></li>
          <li><a href="/services" className="hover:text-[#F2B616]">Our Services</a></li>
          <li><a href="/services" className="hover:text-[#F2B616]">Projects</a></li>
          <li><a href="/contact-us" className="hover:text-[#F2B616]">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="col-span-1">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <ul className="text-gray-400 space-y-2">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F2B616] mr-3" />
            Dilla, Ethiopia
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-[#F2B616] mr-3" />
            +251 95 223 5222
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#F2B616] mr-3" />
            https://t.me/Degi2121
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="col-span-1">
        <h3 className="text-xl font-semibold mb-4">Get in touch with us</h3>
        <p className="text-gray-400 mb-4">Get the latest news and updates on new post.</p>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded mb-4 text-gray-900"
          />
          <button className="bg-[#F2B616] text-black py-2 px-4 rounded hover:bg-[#fad15f] transition-colors">
           <Link to={"https://t.me/Degi2121"}> Connect</Link>
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="container mx-auto mt-10 border-t border-gray-700 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-[#F2B616] mr-4 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-[#F2B616] mr-4 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-[#F2B616] mr-4 hover:text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="text-[#F2B616] hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} © 2024. Inform Africa. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  );

export default Home;
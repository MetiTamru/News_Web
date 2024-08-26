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

import { faSearch, faDatabase, faChartLine, faChalkboardTeacher, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { Link } from 'react-router-dom';
import latestNewsImage from '../../assets/background.jpg'; // Update with the path to your image

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
                className="bottom-content md:mt-20 mt-28 w-full p-10"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <p className="text-3xl font-semibold mb-6 text-center">Focus Areas</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* HaqCheck Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-72 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faSearch} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">HaqCheck</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">A multilingual fact-checking initiative to ensure information accuracy.</p>
                        </div>
                        <a href="#" className='bg-[#F2B616] text-white py-2 px-6 rounded-full inline-flex items-center hover:bg-[#d9a312] transition-colors duration-300'>
                            Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                    </motion.div>

                    {/* Data Lab Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-72 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faDatabase} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Data Lab</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Providing insightful data analysis for informed decision-making.</p>
                        </div>
                        <a href="#" className='bg-[#F2B616] text-white py-2 px-6 rounded-full inline-flex items-center hover:bg-[#d9a312] transition-colors duration-300'>
                            Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                    </motion.div>

                    {/* Information Research Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-72 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="text-4xl text-[#F2B616]  mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Information Research</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Conducting thorough research to support reliable information dissemination.</p>
                        </div>
                        <a href="#" className='bg-[#F2B616] text-white py-2 px-6 rounded-full inline-flex items-center hover:bg-[#d9a312] transition-colors duration-300'>
                            Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                    </motion.div>

                    {/* Training Center Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center justify-between h-72 hover:shadow-2xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-[#F2B616] mb-4" />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Training Center - Media</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Offering training programs to enhance media literacy and skills.</p>
                        </div>
                        <a href="#" className='bg-[#F2B616] text-white py-2 px-6 rounded-full inline-flex items-center hover:bg-[#d9a312] transition-colors duration-300'>
                            Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
            className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 gap-8 md:gap-12"
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

            <div className="flex-1 bg-gray-900 text-white py-10 px-6 md:px-12">
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
                                  'text-white   border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-[#F2B616]' : 
                                  'bg-transparent text-gray-300 border border-gray-300'}`}
                    onClick={() => handleTabClick('coreMission')}
                >
                    Core Mission
                </p>

                {/* Tab for Capacity-Building Initiatives */}
                <p
                    className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
                                ${activeTab === 'capacityBuilding' ? 
                                  ' text-white border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-[#F2B616]' : 
                                  'bg-transparent text-gray-300 border border-gray-300'}`}
                    onClick={() => handleTabClick('capacityBuilding')}
                >
                    Capacity-Building Initiatives
                </p>

                {/* Tab for HaqCheck */}
                <p
                    className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
                                ${activeTab === 'haqCheck' ? 
                                  ' text-white border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-[#F2B616]' : 
                                  'bg-transparent text-gray-300 border border-gray-300'}`}
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
                <div className="md:flex-row items-center md:items-start bg-gray-800 rounded-lg p-6 md:p-8 gap-8">
                    <div className="flex-shrink-0 mb-5">
                        <img
                            src={HaqCheck}
                            alt="HaqCheck"
                            className="w-full h-56   object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl  font-semibold text-[#F2B616] mb-4">HaqCheck</h2>
                        <p className="text-md text-gray-300">
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
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={latestNewsImage}
              alt="Latest News"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Our Latest News and Updates
            </h1>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Get caught up with the latest company message and news!
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-2">
                Measuring Government Responsiveness in Ethiopia: Implications for Countering Disinformation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Posted on September 23, 2023
              </p>
              <a
                href="https://informafrica.net/wp-content/uploads/2023/09/Measuring-Government-Offices-Responsiveness-and-its-Implication-in-Countering-Disinformation-7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Listen to the Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

            </div>
          
                   
         
           
        
      
      
    
       
      
    );
}

export default Home;

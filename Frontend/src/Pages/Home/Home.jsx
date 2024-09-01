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
import newsBg from "../../assets/africa.jpeg"
import cipesa from "../../assets/cipesa1.png"
import fojo from "../../assets/fojo.jpeg"
import bbc from "../../assets/bbc.png"

import adiszaeybe from "../../assets/adiszeybe.jfif"
import oslomet from "../../assets/oslomet.jpg"
import meedan from "../../assets/Meedan.png"
import unesco from "../../assets/unesco2.jpg"
import africachek from "../../assets/africacheack.jfif"
import OSIEA from "../../assets/OSIEA.png"
import freeunlimited from "../../assets/freepress.jpg"
import { faSearch, faDatabase, faChartLine, faChalkboardTeacher, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { Link } from 'react-router-dom';
import latestNewsImage from '../../assets/background.jpg'; // Update with the path to your image

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from '../../Components/Footer';


const position = [9.0105, 38.7636];

const newsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const newsArticles = [
    {
        id: 1,
        title: "Breaking News: Major Event Unfolds",
        date: "August 26, 2024",
        description: "In a major event today, something significant happened. Read more to find out the details and implications.",
        image: newsBg, // Replace with actual image URLs
    },
    {
        id: 2,
        title: "Technology: New Advancements in AI",
        date: "August 25, 2024",
        description: "AI technology continues to advance at a rapid pace. Discover the latest developments in the field of artificial intelligence.",
        image: HaqCheck,
    },
    {
        id: 3,
        title: "Technology: New Advancements in AI",
        date: "August 25, 2024",
        description: "AI technology continues to advance at a rapid pace. Discover the latest developments in the field of artificial intelligence.",
        image: newsBg,
    },
    // Add more articles as needed
];

const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => (
    <div
        className="slick-prev absolute top-1/2 -left-10 transform -translate-y-1/2 bg-[#ef9505] text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer shadow-lg hover:bg-[#c97e05] transition-colors duration-300"
        onClick={props.onClick}
    >
        <FontAwesomeIcon icon={faArrowLeft} />
    </div>
);

// Custom Next Arrow Component
const CustomNextArrow = (props) => (
    <div
        className="slick-next absolute top-1/2 -right-10 transform -translate-y-1/2 bg-[#ef9505] text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer shadow-lg hover:bg-[#c97e05] transition-colors duration-300"
        onClick={props.onClick}
    >
        <FontAwesomeIcon icon={faArrowRight} />
    </div>
);

export { CustomPrevArrow, CustomNextArrow };


// Custom Previous Arrow Component
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
};


const partnersData = [
  {
    name: "Cipesa",
    logo: cipesa,
    link: "/about"
  },
  {
    name: "Arfica Check",
    logo: africachek,
    link: "/about"
  },
  {
    name: "Adis Zeybe",
    logo: adiszaeybe,
    link: "/about"

  },
  {
    name: "Oslomet",
    logo: oslomet,
    link: "/about"

  },
  {
    name: "Meedan",
    logo: meedan,
    link: "/about"

  },
  {
    name: "Unesco",
    logo: unesco,
    link: "/about"

  },
  {
    name: "Osiea",
    logo: OSIEA,
    link: "/about"

  },
  {
    name: "Free Press Unlimited",
    logo: freeunlimited,
    link: "/about"

  },
  {
    name: "BBC",
    logo: bbc,
    link: "/about"
  },
  {
    name: "Fojo",
    logo: fojo,
    link: "/about"

  },
];


const location = "Gabon St. near Meskel Flower, Woreda 03, Kirkos Sub City, Addis Ababa, Ethiopia";
const encodedLocation = encodeURIComponent(location);


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
      <div className='home relative h-full flex flex-col justify-center items-center md:items-start overflow-hidden'>

            <div className={`text-content md:ml-32 text-center flex flex-col gap-7 md:text-start ${playStatus ? 'home-texts' : 'paused'}`}>
                <p className='home-text md:pt-28 text-4xl md:text-6xl md:mt-10 '>
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
                            <Link className=' px-2 py-2 rounded-full shadow-xl dark:shadow-[#F2B616] dark:shadow-lg' to={"/focus-areas"}>
                            <FontAwesomeIcon className='text-gray-600 dark:text-white transition-transform duration-300 hover:scale-125' icon={faArrowRight}/>
                            </Link>
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
                            <Link className=' px-2 py-2 rounded-full shadow-xl dark:shadow-[#F2B616] dark:shadow-lg' to={"/focus-areas"}>
                            <FontAwesomeIcon className='text-gray-600 dark:text-white transition-transform duration-300 hover:scale-125' icon={faArrowRight}/>
                            </Link>
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
                            <Link className=' px-2 py-2 rounded-full shadow-xl dark:shadow-[#F2B616] dark:shadow-lg' to={"/focus-areas"}>
                            <FontAwesomeIcon className='text-gray-600 dark:text-white transition-transform duration-300 hover:scale-125' icon={faArrowRight}/>
                            </Link>
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
                            <Link className=' px-2 py-2 rounded-full shadow-xl dark:shadow-[#F2B616]  dark:shadow-lg' to={"/focus-areas"}>
                            <FontAwesomeIcon className='text-gray-600 dark:text-white transition-transform duration-300 hover:scale-125' icon={faArrowRight}/>
                            </Link>
                        </div>
                       
                    </motion.div>
                </div>
            </motion.div>
            <LatestNews/>
            <motion.div
  className="flex flex-col md:flex-row items-center md:items-start  rounded-lg p-6 md:p-8 gap-8 md:gap-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
>
  {/* Image Section */}
  <div className="w-full md:w-auto flex-shrink-0">
    <img
      src={africa}
      alt="About Us"
      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
    />
  </div>

  

  {/* Content Section */}
  <div className="flex-1 dark:bg-black text-white py-10 px-4 md:px-6 lg:px-12">
    {/* About Us Section */}
    <div className="text-start mb-12 px-2 md:px-4 lg:px-8">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        About Us
      </h1>

      {/* Description Section */}
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        Inform Africa analyzes disinformation to manage risks and upholds media integrity in Ethiopia and beyond.
        Its Disinformation Analysis Initiative leverages advanced technology for media monitoring and research,
        advocating for digital rights, literacy, and professional excellence.
      </p>
    </div>

    {/* Tabs Section */}
    <div className="flex flex-col md:flex-row text-start px-2 md:px-4 lg:px-8 gap-4 md:gap-8 mb-12">
      {/* Tab for Core Mission */}
      <p
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'coreMission' ? 
            'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500 shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
        onClick={() => handleTabClick('coreMission')}
      >
        Core Mission
      </p>

      {/* Tab for Capacity-Building Initiatives */}
      <p
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'capacityBuilding' ? 
            'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500 shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
        onClick={() => handleTabClick('capacityBuilding')}
      >
        Capacity-Building Initiatives
      </p>

      {/* Tab for HaqCheck */}
      <p
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 
          ${activeTab === 'haqCheck' ? 
            'text-[#F2B616] border-1 border-[#F2B616] shadow-lg shadow-[#F2B616] hover:shadow-xl' : 
            'text-gray-500 shadow-lg  border text-prima hover:border-[#F2B616] hover:text-[#F2B616] hover:shadow-md'}`}
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
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-12 px-2 md:px-4 lg:px-8">
        Inform Africa believes that its core mission and capability to carry out innovative projects, together with its motivated and experienced staff, makes it an ideal choice for partnership and collaboration.
      </p>
    </motion.div>

    <motion.div
      className={`tab-contents ${activeTab === 'capacityBuilding' ? 'block' : 'hidden'}`}
      variants={slideInVariants}
      initial="hidden"
      animate={activeTab === 'capacityBuilding' ? 'visible' : 'hidden'}
    >
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-12 px-2 md:px-4 lg:px-8">
        Facilitating capacity-building initiatives in the African Continent to utilize modern media technologies in a safe and healthy media environment by managing media education and information disorder through professional and high-scale knowledge and tools.
      </p>
    </motion.div>

    <motion.div
      className={`tab-contents ${activeTab === 'haqCheck' ? 'block' : 'hidden'}`}
      variants={slideInVariants}
      initial="hidden"
      animate={activeTab === 'haqCheck' ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col md:flex-row ml-2 items-start rounded-lg p-4 md:p-6 gap-4 md:gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#F2B616] mb-4">HaqCheck</h2>
          <p className="text-md text-gray-800 dark:text-gray-300">
            HaqCheck is a local and multilingual fact-checking initiative focused on ensuring information accuracy across various media platforms. Our goal is to enhance public trust in media through rigorous verification processes and transparent reporting.
          </p>
          <div className='px-4 bg-[#F2B616] hover:bg-[#f6c849]  w-40 py-3 mt-5 rounded-md'>
            <Link to={"/"}>
            Learn more <FontAwesomeIcon className='ml-3' icon={faArrowRight}/>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

        <OurPartners/>  
   <MapSection/>
    <Footer/>

    </div>   
      
    );
}


const LatestNews = () => (
    
    <div className="w-80 md:max-w-7xl  md:w-full mb-28 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest News
        </h2>
        <Slider {...settings}>
            {newsArticles.map((article) => (
                <div key={article.id} className="p-4">
                    <motion.div
                        className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        variants={slideInVariants}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full  md:w-1/2 h-96 object-cover"
                        />
                        <div className="p-6 md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {article.date}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {article.description}
                            </p>
                            <a
                                href="#"
                                className="text-[#F2B616] dark:text-[#F2B616] hover:text-[#dea508] dark:hover:text-[#dea508] font-semibold"
                            >
                                Read More &rarr;
                            </a>
                        </div>
                    </motion.div>
                </div>
            ))}
        </Slider>
    </div>

  );


  
const OurPartners = () => (
    
  <div className="container mx-auto mt-20 mb-40 py-20 px-4 overflow-hidden">
  <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Our Partners</h1>
  <p className='text-gray-600 dark:text-gray-300 mb-12 text-center'>
    We collaborate with trusted organizations to uphold the truth in journalism.
  </p>
  <div className="relative overflow-hidden">
    <div className="slider flex items-center">
      <div className="slide-track flex gap-8">
        {partnersData.concat(partnersData).map((partner, index) => (
          <motion.div
            key={index}
            className="slide rounded-lg flex items-start justify-center px-28 ml-28 hover:shadow-2xl transition-shadow duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <Link to={partner.link} className='flex flex-row items-center text-center'>
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="w-full h-20 rounded-full object-contain mb-2"
              />
              <p className="text-lg md:text-xl ml-10 font-semibold text-gray-800 dark:text-white">{partner.name}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
);


const MapSection = () =>(
  <div style={{ height: '300px', marginLeft:"50px",paddingRight:"100px", width: '100%' }}> {/* Adjusted height */}
  <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>Gabon St., Meskel Flower, Woreda 03, Kirkos Sub City, Addis Ababa, Ethiopia</Popup>
    </Marker>
  </MapContainer>
</div>

);



export default Home;
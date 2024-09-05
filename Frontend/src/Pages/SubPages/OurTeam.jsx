import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import kirainform from "../../assets/kira-inform.jpg"
import hagos from "../../assets/hagos1.jpg"
import meraol from "../../assets/meraol2.jpg"
import belay from "../../assets/belay2.jpg"
import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/Footer';



const teamMembers = [
  {
    name: 'Kirubel Tesfaye',
    role: 'Lead Fact-checker',
    description: 'Oversees the fact-checking team and ensures information accuracy.',
    image: kirainform,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Hagos Gebreamlak',
    role: 'Senior Fact-checker and Editor',
    description: 'Fact-checks and edits content for accuracy and clarity.',
    image: hagos,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Belayneh Solomon',
    role: 'Campaign Manager',
    description: 'Plans and manages campaigns to achieve goals.',
    image: belay,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  ,
  {
    name: 'Meraol Alemayehu',
    role: 'Data Scientist',
    description: 'Analyzes data to provide actionable insights.',
    image: meraol,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  ,
  
  {
    name: 'Abel Wabela',
    role: 'Executives Director',
    description: 'Leads the organization and oversees its operations.',
    image: kirainform,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
]
function OurTeam() {
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
    <p className='text-sm mb-4 lg:mt-24 text-primary' >OUR TEAM</p>
    <h1 className="text-3xl   font-bold mb-4 " style={{ wordSpacing: '6px' }}>
  Meet <span className="underline-primary">Expert</span> <span className='text-primary'>Team</span>
  
</h1>
      <p className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Our diverse team is dedicated to combating misinformation and empowering Africa with accurate.
      </p>
      <div className="mt-5"><Link to={"/"}>
    <button className= 'border-x-2 hover:text-primary rounded-full py-2 px-4 border-primary'>Our Board Team <FontAwesomeIcon icon={faArrowRight} className='ml-5'/></button>
    </Link></div>
    </div>
    <TheTeam/>
  </section>
  <Footer/>
  </div>
  )
}
const TheTeam = () =>(
  <div className="container mt-40  mx-auto p-6">
  {/* Team Grid Container */}
 



  <div className="grid lg:ml-32  lg:pr-32 grid-cols-1 sm:grid-cols-2 gap-6">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        className="flex items-stretch pb-10 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }} 
      >
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl text-gray-800 dark:text-white text-start font-bold mb-2">{member.name}</h3>
            <h4 className="text-sm text-start text-primary mb-4">{member.role}</h4>
            <p className="text-gray-800 text-sm text-start dark:text-gray-400 mb-4">
              {member.description}
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
           
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-primary hover:text-blue-600">
               <FontAwesomeIcon icon={faTwitter}/>
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="text-primary hover:text-pink-700">
               <FontAwesomeIcon icon={faInstagram}/>
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-primary hover:text-blue-800">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
)
export default OurTeam
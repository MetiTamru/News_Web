import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import tedros from "../../assets/tedros.png"
import mekdela from "../../assets/mekdela.png"
import meklit from "../../assets/meklit.png"
import tariku from "../../assets/tariku.png"
import mesay from "../../assets/mesay.png"
import graph from "../../assets/Organization-Structure-1024x681.png"
import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/Footer';



const teamMembers = [
  {
    name: 'Tewodros Gemechu',
    role: 'Lead Fact-checker',
    description: 'Oversees the fact-checking team and ensures information accuracy.',
    image: tedros,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Meklit Berihun',
    role: 'Senior Fact-checker and Editor',
    description: 'Fact-checks and edits content for accuracy and clarity.',
    image: meklit,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Mekedela Mekuria',
    role: 'Campaign Manager',
    description: 'Plans and manages campaigns to achieve goals.',
    image: mekdela,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  ,
  {
    name: 'Tariku Shimelis',
    role: 'Data Scientist',
    description: 'Analyzes data to provide actionable insights.',
    image: tariku,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  ,
  
  {
    name: 'Mesay Shemsu',
    role: 'Executives Director',
    description: 'Leads the organization and oversees its operations.',
    image: mesay,
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
]
function BoardTeam() {
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
  Meet The <span className="text-shadow">Board</span> <span className='text-primary'>Team</span>
  
</h1>
      <p className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Our diverse team is dedicated to combating misinformation and empowering Africa with accurate.
      </p>
      <div className="mt-5"><Link to={"/"}>
    <button className= 'border-x-2 hover:text-primary rounded-full py-2 px-4 border-primary'>Meet Our Team <FontAwesomeIcon icon={faArrowRight} className='ml-5'/></button>
    </Link></div>
    </div>
    <TheTeam/>
    <ManagementPlaning/>
    <OrganizationStracture/>
    
  </section>
  <Footer/>
  </div>
  )
}
const TheTeam = () => (
  <div className="container mt-40 mx-auto p-6">
  {/* Team Grid Container */}
  <div className="grid lg:ml-20 lg:pr-20  grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        className="flex flex-col  items-start rounded-lg overflow-hidden  "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        {/* Image Section */}
        <div className="lg:w-48 w-32 ml-4 lg:h-48">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text and Social Media Section */}
        <div className="w-full p-4 flex flex-col items-start mt-[-4px]">
          <h3 className="text-lg text-gray-800 dark:text-white  mb-2">{member.name}</h3>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-primary hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="text-primary hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-primary hover:text-blue-800">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
);

const ManagementPlaning = () =>(
  <div className=" p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
  <p className="text-sm mb-2 lg:mt-24 mt-32 text-primary font-semibold tracking-wide uppercase">
    Organization
  </p>
  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Management and Planning</h2>
  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
    Inform Africa is a Board-led civic society organization managed daily by an Executive Director appointed by the Board. Under the Executive Director, there are five departments, each with its own head and roles, along with additional divisions.
  </p>
  <p className="text-gray-600 dark:text-gray-300  leading-relaxed mt-4">
    The organization's strategic plan outlines goals, objectives, and necessary actions. It is developed by the Strategic Planning Officer, who compiles input from each department and division. A workshop is held to present and discuss the draft plan, incorporating feedback before it is finalized and reviewed by the Executive Director. The final version is presented to the Board of Directors at the start of the fiscal year for approval.
  </p>
  <p className="text-gray-600 dark:text-gray-300  leading-relaxed mt-4">
    The strategic plan's progress is monitored quarterly and annually by the Monitoring and Evaluation Officer, with reports presented to the Executive Director and Department Heads quarterly, and to the Board of Directors annually.
  </p>
</div>

)
const OrganizationStracture = () => (
  <div className="mt-20 mb-20">
    <img src={graph} alt="" />
    <p className="text-gray-600 dark:text-gray-400 text-sm">Organization Structure</p>
  </div>
)
export default BoardTeam


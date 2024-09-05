import React, { useEffect, useRef } from 'react'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import cipesa from "../assets/cipesa1.png"
import fojo from "../assets/fojo.jpeg"
import bbc from "../assets/bbc.png"
import infoAf from "../assets/Logo2.jpg"
import adiszaeybe from "../assets/adiszeybe.jfif"
import oslomet from "../assets/oslomet.jpg"
import meedan from "../assets/Meedan.png"
import unesco from "../assets/unesco2.jpg"
import africachek from "../assets/africacheack.jfif"
import OSIEA from "../assets/OSIEA.png"
import freeunlimited from "../assets/freepress.jpg"
import ims from "../assets/ims.jpg"

const activityList = [
  {
    name: 'Check Global',
    Date: "MARCH 2022 – CURRENT",
    description: 'Inform Africa, under, Meedan’s Check Global program, is executing a project...',
    image1: meedan,
    image2: infoAf,
    link: "/activities/meedan-inform-africa"
  },
  {
    name: 'Combating COVID Disinfomation',
    Date: "July 01, 2021 – current",
    description: 'Inform Africa’s Combating Disinformation project is being supported by the United...',
    image1: unesco,
    image2: infoAf,
    link: "/activities/unesco-inform-africa"

  },
  {
    name: 'Media Literacy Campaign',
    Date: "JANUARY 2022 – SEPTEMBER 2022",
    description: 'Inform Africa with support from its media partner Addis Zeybe, is in the process of...',
    image1: ims,
    image2: infoAf,
    link: "/activities/ims-inform-africa"

  },
  {
    name: 'Disinformation & Human Rights',
    Date: "OCT 1, 2020 – MARCH 31, 2022",
    description: 'Inform Africa and its media partner, Addis Zeybe, are working on a project entitled...',
    image1: OSIEA,
    image2: infoAf,
    link: "/activities/osiea-inform-africa"

  },
  {
    name: 'Countering Disinformation Ethiopia',
    Date: "",
    description: 'Inform Africa, in partnership with  BBC Media Action Ethiopia, organized and...',
    image1: bbc,
    image2: infoAf,
    link: "/activities/bbc-inform-africa"

  },
  {
    name: 'Holistic COVID Reporting',
    Date: "DEC 2020 – SEP 2021",
    description: 'Inform Africa has been working with Free Press Unlimited (FPU), a media ...',
    image1: freeunlimited,
    image2: infoAf,
    link: "/activities/free-press-unlimited-inform-africa"

  },
  {
    name: "Disinfo's Impact Study",
    Date: "OCT 21, 2021 – FEB 28, 2021",
    description: 'Inform Africa is currently collaborating with CIPESA on a study on disinformation...',
    image1: cipesa,
    image2: infoAf,
    link: "/activities/cipesa-inform-africa"

  },
]


function Activities() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
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
    <p className='text-sm mb-4 lg:mt-24 text-primary' >Our Activities
</p>
    <h1 className="text-3xl   font-bold mb-4 " style={{ wordSpacing: '6px' }}>
    Collaborating with   <span className="underline-primary">Trusted</span> <span className='text-primary'>Partners</span>
  
</h1>
      <p className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
      We partner with trusted organizations to promote accurate information, enhance digital literacy, and support media development, empowering communities with truthful news.
      </p>
      <div className="mt-5">
      <Link to={"/"}>
    <button className= 'border-x-2 hover:text-primary rounded-full py-2 px-4 border-primary'style={{ wordSpacing: '6px' }}>Contact Us <FontAwesomeIcon icon={faArrowRight} className='ml-5'/></button>
    </Link></div>
    </div>
    <Actiity/>
  </section>
  <Footer/>
  </div>
  )
}
const Actiity = () =>(
  <div className=""><div className="mb-10  mt-40 m p-6 ">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
    Partnering with Multiple Stakeholders
  </h2>
  <p className="text-gray-600 lg:ml-96 lg:mr-96 text-sm dark:text-gray-300">
    We have undertaken projects in collaboration with various stakeholders focusing on media literacy, fact-checking, and other related topics.
  </p>
</div>

  <div className="flex flex-wrap justify-center  gap-28 p-6">
  {activityList.map((activity, index) => (
    <div key={index} className="bg-white w-96 h-72 dark:bg-gray-900 dark:shadow-2xl shadow-sm rounded-lg p-6 flex flex-col  duration-300">
      <div className="flex items-start gap-3 mb-4">
        <img src={activity.image1} className='w-20  h-20 rounded-full mr-4' alt="" />
        <div className="flex-1">
          <h3 className="text-xl text-start font-semibold text-gray-800 dark:text-white mb-1">{activity.name}</h3>
          <p className="text-gray-500 text-sm text-start dark:text-gray-300 mb-4">{activity.Date}</p>
        </div>
      </div>
      <p className="text-gray-500  text-start dark:text-gray-300 mb-4">{activity.description}</p>
      <Link to={activity.link} className='hover:text-primary text-gray-600  dark:text-primary  dark:hover:text-primary text-start mt-5'>
        Read More <FontAwesomeIcon icon={faArrowRight}/>
      </Link>
    </div>
  ))}
</div>
</div>
)

export default Activities
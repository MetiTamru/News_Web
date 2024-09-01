import React from 'react'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCogs, faTint, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons
import footerBg from "../assets/footerbg.jpg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
   
      <footer className="bg-gray-900 pl-5 md:pl-20 pr-20 text-white py-12 "
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
      Inform Africa believes that its core mission and capability to carry out innovative projects, together with its motivated and experienced staff, makes it an ideal choice for partnership and collaboration.
      </p>
      <div className="mb-4 mt-8 md:mb-0">
            
            <a href="https://x.com/Inform_Africa%20" className="text-[#F2B616] mr-4 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/informafrica" className="text-[#F2B616] mr-4 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            
          </div>
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
              Jambo Real Estate HQ Building, 6th floor
              Office number 601
              Gabon St. near Meskel flower
              Woreda 03, Kirkos Sub city
              Addis Ababa, Ethiopia.
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-[#F2B616] mr-3" />
              +251 930042578
  
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
        <div className="flex flex-col md:flex-row justify-around items-center">
          
          {/* Social Media Links */}
          
  
          {/* Copyright Notice */}
          <p className="text-gray-400  text-sm">
            &copy; {new Date().getFullYear()}  Inform Africa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
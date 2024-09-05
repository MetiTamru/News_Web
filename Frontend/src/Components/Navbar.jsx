import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo4.png';
import { FaSun, FaMoon, FaBars, FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuHovering, setIsSubmenuHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarBg, setSidebarBg] = useState('bg-transparent');
  const sidebarRef = useRef(null);
  const submenuRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setSidebarBg(scrollPosition > 50 ? (darkMode ? 'bg-black' : 'bg-white') : 'bg-transparent');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        submenuRef.current && !submenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsSubmenuOpen(false); // Close submenu when toggling main menu
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) { // Only for large screens
      clearTimeout(submenuTimeoutRef.current);
      setIsSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // Only for large screens
      submenuTimeoutRef.current = setTimeout(() => {
        setIsSubmenuOpen(false);
      }, 300); // Delay before hiding submenu for smooth transition
    }
  };

  const linkColor = scrolled
    ? (darkMode ? 'text-gray-300' : 'text-gray-800')
    : 'text-white';

  return (
    <nav className={`relative lg:fixed w-full top-0 z-50 lg:backdrop-blur-lg transition-colors duration-300 ease-in-out px-4 lg:pt-5 pt-2 pb-2 ${scrolled ? (darkMode ? 'bg-black' : 'bg-white') : 'bg-transparent'}`}>
       <div className=" lg:ml-24 flex items-center justify-between">
        <Link to="/home" className="">
          <img src={logo} alt="Logo" className="h-16" />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 dark:text-white"
        >
          {isOpen ? <FaTimes className='hidden' /> : <FaBars className="text-3xl mt-3 text-white " />}
        </button>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 pl-5 w-64 h-screen text-black   dark:bg-black lg:dark:bg-transparent transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${sidebarBg} ${isOpen ? '' : 'hidden'} lg:relative lg:translate-x-0 lg:w-auto lg:h-auto lg:flex lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none`}
        >
          {/* Close Button for Sidebar */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 pt-3 left-6 lg:hidden text-white"
          >
            <FaTimes className="text-2xl dark:text-white " />
          </button>

          <ul className="lg:flex flex flex-col lg:flex-row sm:gap-5 lg:items-center lg:space-x-6 space-y-4 lg:space-y-0  py-2 pt-20 lg:pt-0 text-lg  lg:text-mid">
            <li>
              <Link
                to="/"
                className={`nav-link ${linkColor} ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>

            {/* About Us with Submenu */}
            <li
              className="relative group lg:hover:group-hover:visible"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ><Link to={"/about"}>

           
              <button
                onClick={toggleSubmenu}
                className={`nav-link flex items-center ${linkColor} ${location.pathname.includes('/about') ? 'active' : ''}`}
              >
                About Us
                {isSubmenuOpen ? (
                  <FaAngleUp className="ml-1 w-4 h-4" />
                ) : (
                  <FaAngleDown className="ml-1 w-4 h-4" />
                )}
              </button>
              </Link>

              {/* Submenu Items */}
              <ul
                ref={submenuRef}
                className={`${
                  isSubmenuOpen ? 'block' : 'hidden'
                } lg:absolute left-0 mt-2 w-full lg:w-64 bg-white dark:bg-gray-800 shadow-lg transition-opacity duration-300 ease-in-out ${
                  isSubmenuHovering || isSubmenuOpen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <li>
                  <Link
                    to="/about/team"
                    className="block px-4 mt-10 lg:mt-0 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/board-team"
                    className="block px-4 py-2 lg:mt-0  sm:mt-5 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Board Members 
                  </Link>
                </li>
               
              </ul>
            </li>

            {/* Other Links */}
            <li>
              <Link
                to="/activities"
                className={`nav-link ${linkColor} ${location.pathname === '/activities' ? 'active' : ''}`}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/focus-areas"
                className={`nav-link ${linkColor} ${location.pathname === '/focus-areas' ? 'active' : ''}`}
              >
                Focus Areas
              </Link>
            </li>
            <li>
              <Link
                to="/updates"
                className={`nav-link ${linkColor} ${location.pathname === '/updates' ? 'active' : ''}`}
              >
                Updates
              </Link>
            </li>
            <li>
              <Link
                to="/report"
                className={`nav-link ${linkColor} ${location.pathname === '/report' ? 'active' : ''}`}
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link lg:hidden ${linkColor} ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="absolute lg:pr-10 lg:pl-20 lg:static lg:bottom-auto lg:right-auto bottom-4 left-4 flex items-center">
            <Link className='bg-primary hidden lg:block rounded-full py-2 px-4 mr-3'>Contact us</Link>
            <button
              onClick={handleToggle}
              className="relative flex items-center justify-between w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer transition-colors duration-300 ease-in-out"
            >
              <span
                className={`absolute left-2 top-1 w-6 h-6 flex items-center justify-center bg-yellow-400 dark:bg-gray-200 rounded-full transform transition-transform duration-300 ease-in-out ${
                  darkMode ? 'translate-x-full' : ''
                }`}
              >
                {darkMode ? (
                  <FaMoon className="text-gray-800" />
                ) : (
                  <FaSun className="text-yellow-800" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

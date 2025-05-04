import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <div className='bg-white'>

      <div className='w-11/12 mx-auto py-14 space-y-4'>
        <div className='flex gap-1 justify-center items-center'>
          <img src="/logo_love.jpeg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Feni Medical Center</span>
        </div>
        <div className=''>
          <div
            className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-indigo-600 border-b-2' : ''}`}>Home</NavLink>

              </li>
              <li>
                <NavLink to="/my-books" className={({ isActive }) => `${isActive ? 'text-indigo-600 border-b-2' : ''} `}>My Bookings</NavLink>

              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) => `${isActive ? 'text-indigo-600 border-b-2' : ''} `}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contactus" className={({ isActive }) => `${isActive ? 'text-indigo-600 border-b-2' : ''} `}>Contact us</NavLink>
              </li>
            </ul>
          </div>

        </div>
        <hr className='border-gray-400' />
        <div className='flex gap-1.5 justify-center items-center py-4'>
          <a href="https://www.facebook.com/forhadul75/"><FaFacebook className='text-2xl'></FaFacebook></a>
          <a href="https://x.com/forhadul75"><FaTwitter className='text-2xl'></FaTwitter></a>
          <a href="https://www.linkedin.com/in/devforhadul/"><FaLinkedin className='text-2xl'></FaLinkedin></a>

        </div>
      </div>

    </div>
  );
};

export default Footer;
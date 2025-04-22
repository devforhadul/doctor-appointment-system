import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <div className='bg-white'>

      <div className='w-11/12 mx-auto py-4 space-y-4'>
        <div className='flex gap-1 justify-center items-center'>
          <img src="/src/assets/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Feni Medical Center</span>
        </div>
        <div className=''>
          <div
            className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-gray-900' : ''} block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-800 md:dark:text-blue-500`}>Home</NavLink>

              </li>
              <li>
                <NavLink to="/my-books" className={({ isActive }) => `${isActive ? 'bg-indigo-600 text-white' : ''} block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-800 md:dark:text-blue-500`}>My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={({ isActive }) => `${isActive ? 'bg-indigo-600 text-white' : ''} block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-800 md:dark:text-blue-500`}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contactus" className={({ isActive }) => `${isActive ? 'bg-indigo-600 text-white' : ''} block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-800 md:dark:text-blue-500`}>Contact us</NavLink>
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
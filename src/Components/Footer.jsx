import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <>

      <footer className=" bg-white border-gray-200 dark:bg-gray-900">
        <div className='w-11/12 mx-auto justify-center items-center gap-5 flex flex-col  py-4'>
          <div className='flex items-center'>
            <img src="/src/assets/logo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-black text-xl font-semibold whitespace-nowrap dark:text-white">Feni Medical Center</span>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className=' block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500'>Home</NavLink>

              </li>
              <li>
                <NavLink to="/my-books" className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500'>My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500'>Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contactus" className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500'>Contact us</NavLink>
              </li>
            </ul>
          </div>

          
          <div className='flex items-center justify-between gap-2'>
            <a href="#"><FaFacebook className='text-2xl text-blue-600' /></a>
            <a href="#"><FaTwitter className='text-2xl text-blue-600' /></a>
            <a href="#"><FaLinkedin className='text-2xl text-blue-600' /></a>
            <a href="#"><FaYoutube className='text-2xl text-blue-600' /></a>
          </div>

        </div>

      </footer>

    </>
  );
};

export default Footer;
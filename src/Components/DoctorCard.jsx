import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {

    const { name, image, education, experience, registrationNumber, available } = doctor;

    return (
        <div>
            <div className="max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-3xl w-full h-70 mx-auto px-5 pt-5" src={image} alt="" />
                </a>
                <div className="p-5">
                    <div className='flex gap-2 mb-2'>
                        <span className="bg-blue-100 text-green-700 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">{available ? 'Available' : 'Not Available'}</span>

                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">{experience} Experience</span>
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {education}
                    </p>
                    <hr className='border-dashed mb-2' />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Reg No: {registrationNumber}
                    </p>

                    <Link to={`/doctor/${doctor.id}`} ><button className="box-border w-full relative z-30 inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                            
                            View Details
                        </span>
                    </button></Link>


                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
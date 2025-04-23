import React from 'react';
import { Link } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";

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
                        <span className={`bg-blue-100 ${available ? 'text-green-700' : 'text-red-500'} text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300`}>{available ? 'Available' : 'Not Available'}</span>

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
                    <hr className='border-dashed border-gray-400 mb-2' />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                       <FaRegRegistered className='inline-block'/> Reg No: {registrationNumber}
                    </p>

                    <Link to={`/doctor/${doctor.id}`} ><button className="btn w-full btn-outline btn-primary">View Details</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
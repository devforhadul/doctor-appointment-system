import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { Button } from '@mui/material';

const DoctorCard = ({ doctor }) => {
    const { id, name, image, education, speciality, location } = doctor;

    return (
        <div className="max-w-xs bg-white rounded-lg overflow-hidden text-center border border-[#eee] shadow-sm hover:shadow-md transition duration-300">
            <img
                className="w-full h-52 object-cover"
                src={image}
                alt={`${name} profile`}
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600 mt-1">{speciality}</p>
                <div className="flex items-center justify-center gap-1 text-red-600 text-sm mt-2">
                    <FaGraduationCap className="text-base" />
                    <span className="font-medium">{education}</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-red-600 text-sm mt-1">
                    <FaMapMarkerAlt className="text-base" />
                    <span className="font-medium">{location}</span>
                </div>

                {/* View Details Button */}
                <div className="mt-4">
                    <Link to={`/doctor-details/${id}`}>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition cursor-pointer">
                            View Details
                        </button>
                        {/* <Button variant='contained'>View Details</Button> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;

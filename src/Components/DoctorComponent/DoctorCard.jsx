import React from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const DoctorCard = ({ doctor }) => {
  const { _id, name, image, education, speciality, location } = doctor;

  return (
    <div className=" bg-white rounded-lg overflow-hidden border border-[#eee] shadow-sm hover:shadow-md transition duration-300">
      <img
        className="w-full h-75 object-cover"
        src={image}
        alt={`${name} profile`}
      />
      <div className="p-4">
        <p className="flex items-center space-x-1 text-green-600">
          <GoDotFill className="text-lg" />
          <span>Available</span>
        </p>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{speciality}</p>
        <div className="flex items-center  gap-1 text-red-600 text-sm mt-2">
          <FaGraduationCap className="text-base" />
          <span className="font-medium">{education}</span>
        </div>
        <div className="flex items-center  gap-1 text-red-600 text-sm mt-1">
          <FaMapMarkerAlt className="text-base" />
          <span className="font-medium">{location}</span>
        </div>

        {/* View Details Button */}
        <div className="mt-4">
          <Link to={`/doctor/${_id}`}>
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

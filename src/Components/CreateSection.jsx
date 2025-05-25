import React from "react";
import doctorImage from "/doctor-sample.png";

const CreateSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-[#5b65f3] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left text content */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Book Appointment <br />
            With 100+ Trusted <br />
            Doctors
          </h1>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Create account
          </button>
        </div>

        {/* Right image */}
        <div className="mt-6 md:mt-0">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-[300px] md:w-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSection;

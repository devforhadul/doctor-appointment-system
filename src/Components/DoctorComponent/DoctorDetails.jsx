import React, { use, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const DoctorDetails = () => {
  const singleDoctor = useLoaderData();
  //const [singleDoctor, setSingleDoctor] = useState(doctorsData || {});
  const { user } = use(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // const appointmentData = {
  //   chamber: {
  //     name: "",
  //     address: "",
  //     visitDay: "",
  //     visitHour: "",
  //     contact: ["", ""],
  //   },
  // };
  // console.log(appointmentData)

  console.log();

  const handleAppointment = () => {
    const appointmentData = {
      doctorId: singleDoctor?._id,
      user: {
        name: user?.displayName,
        email: user?.email,
        phone: user?.phoneNumber,
      },
      appointmentDate: selectedDate,
    };

    axios
      .post(`${import.meta.env.VITE_S_URL}/appointment`, appointmentData)
      .then((res) => {
        console.log("Appointment successful:", res.data);
        toast.success("Appointment successful")
      })
      .catch(error=>{
         console.log("Appointment Failed:", error);
        toast.success("Appointment Filded")
      })
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* <div className='bg-white rounded-2xl  p-8'>
                <h2 className='text-2xl font-bold text-center'>Doctor’s Profile Details</h2>
                <p className='text-center text-gray-600 px-10 mt-5'>Explore In-Depth Information About the Doctor's Educational Background, Specializations, Years of Experience, Patient Reviews, Consultation Hours, and Contact Information to Help You Make an Informed Choice</p>
            </div> */}

      <div className="max-w-6xl mx-auto p-6  md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={singleDoctor?.image}
              alt={singleDoctor?.name}
              className="w-72 h-78 object-cover border-gray-400 rounded-2xl  border shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="text-left border border-gray-400 p-8 rounded-2xl  space-y-4 w-full">
            <h2 className="text-3xl font-semibold">{singleDoctor?.name}</h2>

            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <span className=" font-medium">{singleDoctor?.education}</span>
                <p className="px-3 border border-gray-400 rounded-3xl">
                  {singleDoctor?.experience}
                </p>
              </div>
              <p>
                {/* <span className="text-gray-600 font-semibold">Speciality: </span> */}
                <span className="font-medium">{singleDoctor?.speciality}</span>
              </p>
              <p>
                <span className="text-gray-600 font-semibold">Location: </span>
                <span className="text-blue-700 font-bold">
                  {singleDoctor?.location}
                </span>
              </p>
              <p>
                <span className="text-gray-600 font-semibold">
                  Working Place:{" "}
                </span>
                <span className="text-blue-700 font-bold">
                  {singleDoctor?.workingPlace}
                </span>
              </p>
              <p>
                <span className="text-gray-600 font-semibold">
                  Designation:{" "}
                </span>
                <span className="text-blue-700 font-bold">
                  {singleDoctor?.designation || "N/A"}
                </span>
              </p>
              <p>
                <span className="text-gray-600 font-semibold">
                  Consultation Fee:{" "}
                </span>
                <span className="text-red-600 font-bold">
                  ৳{singleDoctor?.consultationFee}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Book appointment */}
      <div className="bg-[#eee] rounded-2xl space-y-3 p-8 my-6">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Book an Appointment
        </h2>

        {/* Doctor Chamber */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold mb-2">
            Chamber 01 & Appointment
          </h3>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              {singleDoctor.chamber?.name || "Not Found"}
            </h5>
            <p>Address: {singleDoctor.chamber?.address || "Not Found"}</p>
            <p className="text-lg font-medium">
              Visiting Hour: {singleDoctor.chamber?.visitHour || "Not Found"} (
              {singleDoctor.chamber?.visitDay || "Not Found"})
            </p>
            <h4>
              Appointment:{" "}
              {singleDoctor.chamber?.contact.map((con) => con) || "Not Found"}
            </h4>
            <button className="btn">Call Now</button>
          </div>
        </div>

        {/* ✅ Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Select Appointment Date:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="d MMMM, yyyy"
            className="w-full p-2 rounded border border-gray-300 cursor-pointer"
            minDate={new Date()}
          />
        </div>

        <div className="text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded mt-3">
          Due to high patient volume, we are currently accepting appointments
          for today only.
        </div>

        <button
          onClick={handleAppointment}
          className="btn w-full rounded-full bg-blue-700 text-white mt-5"
        >
          Book Appointment Now
        </button>
      </div>

      {/* Related doctor */}
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Related Doctors</h2>
          <p className="text-gray-600 mb-8">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <div>related doctor card here...</div>
      </div>

      <Toaster></Toaster>
    </div>
  );
};

export default DoctorDetails;

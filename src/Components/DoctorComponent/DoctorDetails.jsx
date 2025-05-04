import React, { use, useEffect, useState } from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGlobe
} from 'react-icons/fa';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { addBookings } from '../../Utils';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';



const DoctorDetails = () => {

    const DoctorsData = useLoaderData();
    const [singleDoctor, setSingleDoctor] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = use(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());








    useEffect(() => {
        const singleDoctor = DoctorsData.find(doctor => doctor.id === parseInt(id));
        setSingleDoctor(singleDoctor);
    }, [DoctorsData, id])




    const handleAppointment = () => {
        const booked = JSON.parse(localStorage.getItem('bookings')) || [];

        const alreadyBooked = booked.some(doc => doc.id === singleDoctor.id);
        // check already booked doctor
        if (alreadyBooked) {
            toast('You have already booked this doctor.', { icon: '⚠️' });
            return;
        }

        addBookings(singleDoctor, user);



        setTimeout(() => {
            user ?
                navigate('/my-bookings')
                
                :
                navigate('/log-in');
                toast("Please login first!!",{icon:'⚠️'})

        }, 500);



    };




    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-white rounded-2xl  p-8'>
                <h2 className='text-2xl font-bold text-center'>Doctor’s Profile Details</h2>
                <p className='text-center text-gray-600 px-10 mt-5'>Explore In-Depth Information About the Doctor's Educational Background, Specializations, Years of Experience, Patient Reviews, Consultation Hours, and Contact Information to Help You Make an Informed Choice</p>
            </div>

            <div className="max-w-6xl mx-auto p-4 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={singleDoctor?.image}
                            alt={singleDoctor?.name}
                            className="w-72 h-78 object-cover rounded-lg border shadow-lg"
                        />
                    </div>

                    {/* Info */}
                    <div className="text-left  space-y-4 w-full">
                        <h2 className="text-3xl font-bold text-blue-800">{singleDoctor?.name}</h2>

                        <div className="space-y-2">
                            <p>
                                <span className="text-gray-600 font-semibold">Education: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.education}</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Speciality: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.speciality}</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Experience: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.experience} years</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Location: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.location}</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Working Place: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.workingPlace}</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Designation: </span>
                                <span className="text-blue-700 font-bold">{singleDoctor?.designation || 'N/A'}</span>
                            </p>
                            <p>
                                <span className="text-gray-600 font-semibold">Consultation Fee: </span>
                                <span className="text-red-600 font-bold">৳{singleDoctor?.consultationFee}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='bg-white rounded-2xl  p-8 mt-4'>
                <div className='flex gap-5 items-center  p-5'>
                    <div>
                        <img className='w-80 h-75 rounded-2xl' src={singleDoctor.image} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-2xl font-bold'>{singleDoctor.name}</h2>
                        <p>{singleDoctor.education}</p>
                        <p>{singleDoctor.speciality}</p>
                        <p>Working at</p>
                        <h2 className='text-xl font-semibold'>{singleDoctor.workingPlace}</h2>
                        <hr className='border-dashed border-gray-400' />
                        <h4><FaRegRegistered className='inline-block' /> Reg NO: {singleDoctor.registrationNumber}</h4>
                        <hr className='border-dashed border-gray-400' />
                        <div className='flex gap-2 mb-2'>
                            <p className='font-semibold'>Availability</p>
                            {singleDoctor.availabilityDays.map(days => (
                                <div className="badge badge-soft badge-warning border" key={days[0]}>
                                    {days}
                                </div>
                            ))}
                        </div>
                        <p className='font-semibold'>Consultation Fee: <span className='font-medium'><span className='text-indigo-600'>Taka : {singleDoctor.consultationFee}</span>  (incl. Vat) Per consultation</span> </p>

                    </div>
                </div>
            </div> */}

            <div className='bg-[#eee] rounded-2xl space-y-3 p-8 my-6'>
                <h2 className='text-2xl font-semibold text-center'>Book an Appointment</h2>

                {/* ✅ Date Picker */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Select Appointment Date:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="d MMMM, yyyy"
                        className="w-full p-2 rounded border border-gray-300 cursor-pointer"
                        minDate={new Date()}
                    />
                </div>

                <div className="text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded mt-3">
                    Due to high patient volume, we are currently accepting appointments for today only.
                </div>

                <button onClick={handleAppointment} className='btn w-full rounded-full bg-blue-700 text-white mt-5'>
                    Book Appointment Now
                </button>
            </div>

            <Toaster></Toaster>
        </div>
    );
};

export default DoctorDetails;
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addBookings } from '../Utils';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegRegistered } from "react-icons/fa";

const Doctor = () => {

    const DoctorsData = useLoaderData();
    const { id } = useParams();


    const singleDoctor = DoctorsData.find(doctor => doctor.id === parseInt(id));


    const handleAppointment = () => {
        addBookings(singleDoctor);
        toast.success(`${singleDoctor.name} Appointment Booked Successfully`)


    }



    return (
        <div className='w-11/12 mx-auto'>

            <div className='bg-white rounded-2xl  p-8'>
                <h2 className='text-2xl font-semibold text-center'>Doctor’s Profile Details</h2>
                <p className='text-center px-10 mt-5'>Explore In-Depth Information About the Doctor's Educational Background, Specializations, Years of Experience, Patient Reviews, Consultation Hours, and Contact Information to Help You Make an Informed Choice</p>

            </div>

            <div className='bg-white rounded-2xl  p-8 mt-4'>
                <div className='flex gap-5 items-center  p-5'>
                    <div>
                        <img className='w-75 h-75 rounded-2xl' src={singleDoctor.image} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-2xl font-bold'>{singleDoctor.name}</h2>
                        <p>{singleDoctor.education}</p>
                        <p>{singleDoctor.speciality}</p>
                        <p>Working at</p>
                        <h2 className='text-xl font-semibold'>{singleDoctor.workingPlace}</h2>
                        <hr className='border-dashed border-gray-400' />
                        <h4><FaRegRegistered className='inline-block'/> Reg NO: {singleDoctor.registrationNumber}</h4>
                        <hr className='border-dashed border-gray-400' />
                        <div className='flex gap-2 mb-2'>
                            <p className='font-semibold'>Availability</p>
                            <p>{singleDoctor.availabilityDays.map(days => <div className="badge badge-soft badge-warning mr-2 " key={days[0]}>{days}</div>)}</p>
                        </div>
                        <p className='font-semibold'>Consultation Fee: <span className='font-medium'><span className='text-indigo-600'>Taka : {singleDoctor.consultationFee}</span>  (incl. Vat) Per consultation</span> </p>

                    </div>
                </div>
            </div>
            <div className='bg-white rounded-2xl space-y-3 p-8 my-6'>
                <h2 className='text-2xl font-semibold text-center'>Book an Appointment</h2>
                <hr className='border-dashed border-gray-400' />
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Availability</p>
                    <div className="badge badge-soft badge-success ">Doctor Available today</div>
                </div>
                <hr className=' border-gray-400' />
                <div className="badge badge-soft badge-warning ">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</div>
                <button onClick={handleAppointment} className='btn w-full rounded-full bg-blue-700 text-white mt-5'>Book Appointment Now</button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default Doctor;
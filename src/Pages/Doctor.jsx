import React from 'react';
import { useLoaderData } from 'react-router';

const Doctor = () => {

    const singleDoctor = useLoaderData();
    console.log(singleDoctor);

    return (
        <div className='w-11/12 mx-auto'>

            <div className='bg-white rounded-2xl  p-8'>
                <h2 className='text-2xl font-semibold text-center'>Doctor’s Profile Details</h2>
                <p className='text-center px-10'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>

            </div>

            <div className='bg-white rounded-2xl  p-8 mt-4'>
                <div className='flex gap-5 items-center  p-5'>
                    <div>
                        <img src="/src/assets/doctor-sample.png" alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Dr Name</h2>
                        <p>MBBS</p>
                        <p>Working at</p>
                        <h2 className='text-xl font-semibold'>Hospita Name</h2>
                        <hr />
                        <h4>Reg NO: </h4>
                        <hr />
                        <div className='flex gap-2 mb-2'>
                            <p>Availability</p>
                            <p>sunday</p>
                        </div>
                        <p>Consultation Fee: </p>

                    </div>
                </div>
            </div>
            <div className='bg-white rounded-2xl  p-8 my-5'>
                <h2 className='text-2xl font-semibold'>Book an Appointment</h2>
                <hr />
                <div className='flex gap-5 justify-between items-center  p-3'>
                    <p>Availability</p>
                    <p>abc</p>
                </div>
                <hr />
                <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <button className='btn w-full rounded-full bg-blue-700 text-white   '>Book Appointment Now</button>
            </div>

        </div>
    );
};

export default Doctor;
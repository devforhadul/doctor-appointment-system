import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
            <div>
                <h2 className='text-3xl text-center font-bold mb-5'>We Provide Best Medical Services</h2>
                <p className='text-center text-gray-600 mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                <div className='bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition duration-300'>
                    <img src="/success-doctor.png" alt="" />
                    <p className='font-extrabold text-2xl'> <CountUp end={199} duration={2.75} />+ </p>
                    <p className='text-gray-600'>Total Doctors</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition duration-300'>
                    <img src="/success-review.png" alt="" />
                    <p className='font-extrabold text-2xl'><CountUp end={446} duration={2.75} />+</p>
                    <p className='text-gray-600'>Total Reviews</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition duration-300'>
                    <img src="/success-patients.png" alt="" />
                    <p className='font-extrabold text-2xl'><CountUp end={1900} duration={2.75} />+</p>
                    <p className='text-gray-600'>Patiens</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition duration-300'>
                    <img src="/success-staffs.png" alt="" />
                    <p className='font-extrabold text-2xl'><CountUp end={300} duration={2.75} />+</p>
                    <p className='text-gray-600'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;
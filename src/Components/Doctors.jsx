import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const Doctors = ({ doctorData }) => {

    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [viewAllDoctor, setViewAllDoctor] = useState(false);
    

    useEffect(()=>{
        if(viewAllDoctor){
            setDisplayDoctors(doctorData);
        }
        else{
            setDisplayDoctors(doctorData.slice(0,6));
        }
    },[doctorData, viewAllDoctor])



    
    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-bold mb-5'>Our Doctors</h2>
            <p className='text-center mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>

                {
                    displayDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)
                }

            </div>
            <div className='text-center'>
            <button onClick={()=>setViewAllDoctor(prv=> !prv)} type="button" className=" text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">{viewAllDoctor ? 'Show Less' : 'View All Doctors'}</button>
            </div>
        </div>
    );
};

export default Doctors;
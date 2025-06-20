import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { useNavigate } from 'react-router';


const DoctorsComponenets = ({ doctorData = []}) => {

    
    

    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [viewAllDoctor, setViewAllDoctor] = useState(false);
    const navigate = useNavigate();
    


   


    // set the doctor data to displayDoctor state
    useEffect(() => {
        if (viewAllDoctor) {
            setDisplayDoctors(doctorData);
        }
        else {
            setDisplayDoctors(doctorData.slice(0, 8));
        }
    }, [doctorData, viewAllDoctor])







    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-semibold mb-5'>Our Doctors</h2>
            <p className='text-center mb-5'>Simply browse through our extensive list of trusted doctors.</p>

            {/* doctor card */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4'>

                {
                    Array.isArray(displayDoctors) && displayDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)
                }

            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/doctors')} type="button" className=" text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">{viewAllDoctor ? 'Show Less' : 'View All Doctors'}</button>
            </div>
        </div>
    );
};

export default DoctorsComponenets;
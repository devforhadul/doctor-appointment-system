import React, { Suspense, useEffect, useState } from 'react';
import DoctorCard from '../Components/DoctorComponent/DoctorCard';
import { Link, useLoaderData } from 'react-router';



const Doctors = () => {

    const doctorData = useLoaderData();
    
    console.log(doctorData)

    
    //console.log(import.meta.env.VITE_S_URL);


    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [viewAllDoctor, setViewAllDoctor] = useState(false);

    // filter option
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [doctorName, setDoctorName] = useState('');





    // // set the doctor data to displayDoctor state
    useEffect(() => {
        if (viewAllDoctor) {
            setDisplayDoctors(doctorData);
        }
        else {
            setDisplayDoctors(doctorData.slice(0, 13));
        }
    }, [doctorData, viewAllDoctor])






    const handleLocation = (e) => {
        setLocation(e.target.value);
        const filteredDoctors = doctorData.filter(doctor => doctor.location === e.target.value || doctor.speciality === department || doctor.name === doctorName);
        setDisplayDoctors(filteredDoctors);
    }

    const handleDepartment = (e) => {
        setDepartment(e.target.value);
        const filteredDoctors = doctorData.filter(doctor => doctor.speciality === e.target.value || doctor.location === location || doctor.name === doctorName);
        setDisplayDoctors(filteredDoctors);
    }

    const handleDoctorName = (e) => {
        setDoctorName(e.target.value);
        const filteredDoctors = doctorData.filter(doctor => doctor.name === e.target.value || doctor.speciality === department || doctor.location === location);
        setDisplayDoctors(filteredDoctors);
    }




    return (
        <div className='w-11/12 mx-auto'>
            <div className=''>
                {/* <h2 className='text-3xl font-bold mb-5'>Doctors</h2> */}
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a>Doctors</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center py-5 bg-[#F9F9F9]">
                    {/* Title */}
                    <h1 className="text-xl font-semibold text-blue-900 mb-2">
                        Search doctor, Make an appointment
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600 mb-8 text-center">
                       Browse through the doctors specialist.
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-wrap gap-4">
                        {/* Location Dropdown */}
                        <select value={location} onChange={handleLocation} className="p-3 px-10 rounded bg-white text-black border-none cursor-pointer">
                            <option>Select Location</option>
                            {
                                doctorData.map((loca, idx) =>
                                    <option value={loca.location} key={idx}>{loca.location}</option>
                                )
                            }

                        </select>

                        {/* Department Dropdown */}
                        <select value={department} onChange={handleDepartment} className="p-3 px-10 rounded bg-white text-black border-2 border-none cursor-pointer">
                            <option>All Department</option>
                            {
                                doctorData.map((dept, idx) =>
                                    <option key={idx} value={dept.speciality}>{dept.speciality}</option>

                                )
                            }
                        </select>

                        {/* Doctor Dropdown */}
                        <select value={doctorName} onChange={handleDoctorName} className="p-3 px-10 rounded bg-white text-black border-none cursor-pointer">
                            <option>All Doctor</option>
                            {
                                doctorData.map((dr, idx) =>
                                    <option key={idx} value={dr.name}>{dr.name}</option>
                                )
                            }

                        </select>


                    </div>
                </div>
                {/* doctor card */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-center justify-center'>

                    {
                        Array.isArray(displayDoctors) && displayDoctors.map((doctor, idx) =>
                            <Suspense key={idx} fallback={<span className="loading loading-spinner loading-md"></span>}>
                                <DoctorCard key={idx} doctor={doctor} />
                            </Suspense>
                        )
                    }

                </div>
                {/* Pagination */}


            </div>

        </div>

    );
};

export default Doctors;
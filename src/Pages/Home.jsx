import React from 'react';
import { useLoaderData } from 'react-router';
import DoctorsComponenets from '../Components/DoctorComponent/DoctorsComponenets';
import Hero from '../Components/Home/Hero';
import Success from '../Components/Home/Success';
import Departments from '../Components/Home/Departments';


const Home = () => {

    const doctorData = useLoaderData();


    return (
        <div className=''>
            <Hero></Hero>
            <div className='w-11/12 mx-auto'>
                <DoctorsComponenets doctorData={doctorData} />

            </div>
            <Departments></Departments>
            <Success></Success>
        </div>
    );
};

export default Home;
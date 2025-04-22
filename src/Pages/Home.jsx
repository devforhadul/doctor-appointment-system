import React from 'react';
import Hero from '../Components/Hero';
import Doctors from '../Components/Doctors';
import { useLoaderData } from 'react-router';
import Success from '../Components/Success';

const Home = () => {

    const doctorData = useLoaderData();
    

    return (
        <div className=''>
            <Hero />
            <div className='w-11/12 mx-auto'>
            <Doctors doctorData={doctorData} />
            </div>
            <Success />
        </div>
    );
};

export default Home;
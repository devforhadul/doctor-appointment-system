import React from 'react';
import Hero from '../Components/Hero';
import Doctors from '../Components/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {

    const doctorData = useLoaderData();
    

    return (
        <div className=''>
            <Hero />
            <div className='w-11/12 mx-auto'>
            <Doctors doctorData={doctorData} />
            </div>
        </div>
    );
};

export default Home;
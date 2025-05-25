import React from 'react';
import { useLoaderData } from 'react-router';
import DoctorsComponenets from '../Components/DoctorComponent/DoctorsComponenets';
import Hero from '../Components/Home/Hero';
import Success from '../Components/Home/Success';
import Departments from '../Components/Home/Departments';
import SpecialitySection from '../Components/SpecialitySection';
import CreateSection from '../Components/CreateSection';


const Home = () => {

    const doctorData = useLoaderData();


    return (
        <div className=''>
            <Hero></Hero>
            <section>
                <SpecialitySection></SpecialitySection>
            </section>
            <div className='w-11/12 mx-auto'>
                <DoctorsComponenets doctorData={doctorData} />

            </div>
            {/* <Departments></Departments> */}
            <CreateSection></CreateSection>
            <Success></Success>
        </div>
    );
};

export default Home;
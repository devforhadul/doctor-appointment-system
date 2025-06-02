import React from 'react';
import { useLoaderData } from 'react-router';

const DoctorList = () => {
    
    const doctors = useLoaderData();
    //  console.log(doctors.data)


    return (
        <div>
            Doctor list show here...
            <p>Total: {doctors.data.length}</p>
        </div>
    );
};

export default DoctorList;
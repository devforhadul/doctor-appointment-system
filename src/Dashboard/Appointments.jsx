import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const Appointments = () => {

    const appointments = useLoaderData();
    //console.log(appointments.data)

    return (
        <div>
            All appintment shows here...
            <p>Total:{appointments.data.length}</p>
        </div>
    );
};

export default Appointments;
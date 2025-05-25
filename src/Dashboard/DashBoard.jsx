import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';


const DashBoard = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between items-center border-b py-2'>
                <h1><Link to={'/'}>Doctor Finder</Link></h1>
                <button className='btn'>Logout</button>
            </div>
            <div className='grid grid-cols-12'>
                <div className="menubar col-span-2">
                    <ul>
                        <li><NavLink to={'/dash'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/dash/appoinments'}>Appointments</NavLink></li>
                        <li><NavLink to={'/dash/add-doctor'}>Add Doctor</NavLink></li>
                        <li><NavLink to={'/dash/doctor-list'}>Doctors List</NavLink></li>
                    </ul>
                </div>
                <div className="rightRoute col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCalendarDateRange } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";


const DashBoard = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center border-b border-gray-200 py-2 p-5'>
                <h1><Link to={'/'}>Doctor Finder</Link></h1>
                <button className='btn'>Logout</button>
            </div>
            <div className='grid grid-cols-12'>
                <div className="menubar col-span-2 pl-5 pt-5 border-r border-gray-200 ">
                    <ul>
                        <li><NavLink to={'/dash'} className="flex items-center gap-1"><MdDashboard /> Dashboard</NavLink></li>
                        <li><NavLink to={'/dash/appoinments'} className="flex items-center gap-1"><HiCalendarDateRange /> Appointments</NavLink></li>
                        <li><NavLink to={'/dash/add-doctor'} className="flex items-center gap-1"><IoMdAddCircleOutline /> Add Doctor</NavLink></li>
                        <li><NavLink to={'/dash/doctor-list'} className="flex items-center gap-1"><CiBoxList /> Doctors List</NavLink></li>
                    </ul>
                </div>
                <div className="rightRoute col-span-10 bg-[#f8f9fd] p-5 h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
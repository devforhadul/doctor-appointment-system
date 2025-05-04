import React, { useEffect, useState } from 'react';
import { getBookings, removeBookings } from '../Utils';
import BookedCard from '../Components/BookedCard';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const MyBookings = () => {
    const [displayBooked, setDisplayBooked] = useState([]);
    const navigate = useNavigate();
    const { pathname } = useLocation();




    



    useEffect(() => {
        const savedBookings = getBookings();
        setDisplayBooked(savedBookings);
    }, []);

    const handleDelete = (id) => {
        removeBookings(id);
        setDisplayBooked(getBookings());
        alert("Are you sure?")
        toast.success('Your appointment has been cancelled successfully.');

    };

    const TriangleBar = ({ fill, x, y, width, height }) => {
        return (
            <path
                d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
                stroke="none"
                fill={fill}
            />
        );
    };

    return (
        <div className="w-11/12 mx-auto">

            {displayBooked.length === 0 ? (
                <>
                    <div className='my-8 p-15'>
                        <p className="text-center text-2xl font-bold my-5 text-gray-600">You Have not Booked any appointment yet</p>
                        <p className="text-center px-10 text-gray-600 my-3">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        <div className='text-center'>
                            <button onClick={() => navigate('/')} className='btn rounded-sm bg-blue-700 text-white mt-5'>Book an Appointment</button>
                        </div>
                    </div>

                </>


            ) : (
                <>
                    <div className='my-8'>
                        <h2 className="text-2xl font-bold">My Today Appointments</h2>
                        <p className=" text-gray-600 my-3">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><a className={pathname == '/my-bookings' ? 'border-b' : ''}>my-books</a></li>
                            </ul>
                        </div>
                    </div>
                </>
            )}

            {displayBooked.length > 0 && (
                <div className="flex items-center justify-center bg-white rounded-2xl py-5 my-8">
                    <BarChart width={900} height={300} data={displayBooked}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="consultationFee" fill="#8884d8" shape={<TriangleBar />} />
                    </BarChart>
                </div>
            )}



            {displayBooked.map((booked) => (
                <BookedCard key={booked.id} booked={booked} handleDelete={handleDelete} />
            ))}

            <Toaster></Toaster>

        </div>
    );
};

export default MyBookings;

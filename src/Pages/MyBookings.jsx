import React, { useEffect, useState } from 'react';
import { getBookings, removeBookings } from '../Utils';
import BookedCard from '../Components/BookedCard';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, BarChart, XAxis, YAxis  } from 'recharts';

const MyBookings = () => {

    const [displayBooked, setDisplayBooked] = useState([]);

    useEffect(() => {
        const savedBookings = getBookings();
        setDisplayBooked(savedBookings);
    }, []);

    const handleDelete = (id) => {
        removeBookings(id);
        setDisplayBooked(getBookings());
        toast.warn('Your appointment has been cancelled successfully.');
    }

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return (
          <path
            d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
            stroke="none"
            fill={fill}
          />
        );
      };
      



    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex items-center justify-center bg-white rounded-2xl space-y-3 py-5 my-8'>
                <BarChart width={900} height={300} data={displayBooked}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="consultationFee" fill="#8884d8" shape={<TriangleBar />} />
                </BarChart>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center'>My Today Appointments</h2>
                <p className='text-center px-10 text-gray-600 my-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                {
                    displayBooked.map(booked=> <BookedCard key={booked.id} booked={booked} handleDelete={handleDelete}></BookedCard>)
                }
                <ToastContainer></ToastContainer>

          

            </div>
        </div>
    );
};

export default MyBookings;
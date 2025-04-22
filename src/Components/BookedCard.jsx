import React from 'react';


const BookedCard = ({booked,handleDelete}) => {

   
    

    return (
        <div>
            <div className='bg-white rounded-2xl space-y-3 p-5 my-6'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                        <h2 className='font-semibold'>{booked.name}</h2>
                        <p className='text-gray-600'>{booked.education}</p>
                    </div>
                    <div>
                        <p className='text-gray-600'>Appointment Fee : {booked.consultationFee} Taka + Vat</p>
                    </div>
                </div>
                <hr className='border-dashed border-gray-400' />
                <button onClick={()=>handleDelete(booked.id)} className="btn btn-outline btn-error w-full hover:text-white">Cancel Appointment</button>
            
            </div>
        </div>
    );
};

export default BookedCard;
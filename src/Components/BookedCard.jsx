import React from "react";

const BookedCard = ({ booked, handleDelete }) => {

  console.log(booked)

  return (
    <div>
      <div className="flex items-center justify-between p-4 rounded-md mb-2">
        {/* Doctor Info */}
        <div className="flex items-center space-x-4">
          <img
            src={booked?.image}
            alt="Doctor"
            className="w-20 h-25 rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold">{booked?.name}</h3>
            <p className="text-sm text-gray-600">{booked.education}</p>
            <div className="mt-2 text-sm text-gray-700">
              <p>
                <strong>Address:</strong> 57th Cross, Richmond Circle, Church
                Road, London
              </p>
              <p>
                <strong>Date & Time:</strong> 25th July, 2024 | 8:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-end space-y-2">
          {status === "unpaid" && (
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm">
              Pay here
            </button>
          )}
          {status === "paid" && (
            <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm cursor-default">
              Paid
            </button>
          )}
          <button
            onClick={() => handleDelete(booked.id)}
            className="border  border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 text-sm cursor-pointer"
          >
            Cancel appointment
          </button>
        </div>
      </div>

      {/* <div className='bg-white rounded-2xl space-y-3 p-5 my-6'>
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
            
            </div> */}
      <hr className="text-gray-200  my-2  border-1" />
    </div>
  );
};

export default BookedCard;

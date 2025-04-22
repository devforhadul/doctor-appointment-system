import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            
            <h2 className='text-2xl font-semibold text-center'>Blogs</h2>
            <p className='text-center px-10'>Let's explore some basics concepts that will make you a good developer.</p>

            <div className='bg-white rounded-2xl space-y-3 p-5 my-6'>
                <h2>Question</h2>
                <hr className='border-dashed border-gray-400'/>
                <div>
                    <p className='text-blue-600'>Answer:</p>
                    <p>Anssss</p>
                </div>
                <hr className='border-dashed border-gray-400'/>
                <p>Added at 20023-11-5</p>
            </div>

        </div>
    );
};

export default Blogs;
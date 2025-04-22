import React from 'react';
import { GrValidate } from "react-icons/gr";

const BlogsCard = ({blog}) => {
    return (
        <div className='bg-white rounded-2xl space-y-3 p-5 my-6'>
            <h2 className='font-bold'>{blog.question}</h2>
            <hr className='border-dashed border-gray-400' />
            <div>
                <p className='text-blue-600'>Answer:</p>
                <p>{blog.answer}</p>
            </div>
            <hr className='border-dashed border-gray-400' />
            <p className='text-gray-600'><GrValidate className='inline-block'/> Added at {blog.date}</p>
        </div>
    );
};

export default BlogsCard;
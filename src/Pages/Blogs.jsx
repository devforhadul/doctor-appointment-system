import React from 'react';
import { useLoaderData } from 'react-router';
import BlogsCard from '../Components/BlogsCard';

const Blogs = () => {

    const blogs = useLoaderData();


    return (
        <div className='w-11/12 mx-auto'>
            
            <h2 className='text-2xl font-semibold text-center'>Blogs</h2>
            <p className='text-gray-600 text-center px-10 mt-5'>Let's explore some basics concepts that will make you a good developer.</p>

            {
                blogs.map(blog => <BlogsCard blog={blog} key={blog.id} ></BlogsCard>)
            }

        </div>
    );
};

export default Blogs;
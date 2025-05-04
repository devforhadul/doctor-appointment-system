import React from 'react';
import { useLoaderData} from 'react-router';
import BlogsCard from '../Components/BlogsCard';

const Blogs = () => {

    const blogs = useLoaderData();
    




    return (

        <div className='w-11/12 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                blogs.map(blog => <BlogsCard blog={blog} key={blog.id} ></BlogsCard>)
            }
        </div>
        </div>

    );
};

export default Blogs;
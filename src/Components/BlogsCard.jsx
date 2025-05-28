import React from 'react';
import { GrValidate } from "react-icons/gr";
import { Link } from 'react-router';

const BlogsCard = ({ blog }) => {

    console.log(blog.id)

    const handleReadBtn = () => {
        // Handle the read button click event here
        
    }

    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={blog.img}
                    alt="Eye Supplements"
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-200 text-red-700 text-xs font-semibold rounded-full px-2 py-1">
                    {blog.category}
                </span>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.blogTitle}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                    {blog.blogDescription}
                </p>
                <Link to={`/blog/${blog.id}`} className="flex items-center text-blue-500 hover:text-blue-700">
                    <button onClick={handleReadBtn} className="text-red-500 font-semibold text-sm hover:text-red-700 cursor-pointer">
                        Continue Reading &raquo;
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogsCard;
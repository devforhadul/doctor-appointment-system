import React from "react";
import { useLoaderData, useParams } from "react-router";

const BlogDetails = () => {
  const blogsData = useLoaderData();
  const { id } = useParams();

  const singleBlog = blogsData?.find((blog) => blog.id == id);
  console.log(singleBlog);
  if (!singleBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4"></h1>
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <span className="mr-2">Published: 2023-04-19</span>
        <span>Author: Health & Wellness Blog</span>
      </div>
      <img
        src={singleBlog?.img}
        alt="Health Check-up"
        className="w-full h-80 rounded-md mb-4"
      />
      <div className="text-gray-700 leading-relaxed">
        <p className="text-2xl font-semibold mb-5">{singleBlog?.blogTitle}</p>
        <p  className="mb-4">
          {singleBlog?.blogDescription}
        </p>
      </div>
      <div className="mt-6 border-t pt-4 text-gray-500 text-sm">
        Tags: <span className="text-blue-500 hover:underline">Health</span>,{" "}
        <span className="text-blue-500 hover:underline">Wellness</span>,{" "}
        <span className="text-blue-500 hover:underline">Prevention</span>
      </div>
    </div>
  );
};

export default BlogDetails;

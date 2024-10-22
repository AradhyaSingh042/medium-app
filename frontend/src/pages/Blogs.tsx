import React from "react";
import BlogCard from "../components/BlogCard";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import { useBlogs } from "../hooks/useBlogs";
import { format } from "date-fns";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <>
      <div className="blogs-page-container w-full flex justify-center items-center">
        <div className="main-container w-10/12 flex flex-col justify-start items-start pb-8">
          <Navbar />
          <TopBar />

          {loading && (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          )}

          {blogs.map((blog, index) => {
            const rawDate = blog.createdAt;
            const formattedDate = format(new Date(rawDate), "MMM d, yyyy");

            return (
              <BlogCard
                key={index}
                blogId={blog.id}
                authorName={blog.author.name}
                createdAt={formattedDate}
                title={blog.title}
                content={blog.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;

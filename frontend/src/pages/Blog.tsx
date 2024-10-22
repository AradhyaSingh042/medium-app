import React from "react";
import { useBlog } from "../hooks/useBlog";
import { useParams } from "react-router-dom";
import BlogContent from "../components/BlogContent";
import AuthorContent from "../components/AuthorContent";
import Navbar from "../components/Navbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="loading-container w-full h-full flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!blog) {
    return <></>;
  }

  return (
    <>
      <div className="blog-page-container w-full h-full flex flex-col items-center">
        <div className="navbar-container w-10/12">
          <Navbar />
        </div>

        <div className="content-container w-10/12  grid grid-cols-12 pt-14">
          <div className="left-container col-span-8">
            <BlogContent blog={blog} />
          </div>
          <div className="right-container col-span-4 pl-10">
            <AuthorContent authorName={blog.author.name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
import React from "react";
import { BlogContentProps } from "../types/types";
import { format } from "date-fns";

const BlogContent = ({ blog }: BlogContentProps) => {
  if (!blog) {
    return <></>;
  }

  const rawDate = blog.createdAt;
  const formattedDate = format(new Date(rawDate), "MMM d, yyyy");
  return (
    <>
      <div className="main-container flex flex-col pb-8">
        <h2 className="text-3xl font-bold">{blog?.title}</h2>
        <span className="mt-2 text-slate-500 font-medium text-sm">
          Posted on {formattedDate} <span>✨</span>
        </span>
        <p className="mt-4 leading-7">{blog?.content}</p>
      </div>
    </>
  );
};

export default BlogContent;

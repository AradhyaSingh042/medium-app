import React from "react";
import { BlogCardProps } from "../types/types";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const BlogCard = ({
  blogId,
  authorName,
  createdAt,
  title,
  content,
}: BlogCardProps) => {
  return (
    <>
      <Link to={`/blog/${blogId}`}>
        <div className="blog-card-container cursor-pointer flex flex-col items-start w-full pt-8">
          <span className="flex flex-row items-center gap-2">
            <Avatar name={authorName} />
            <span className="font-medium text-slate-900">{authorName}</span>
            <div className="dot h-1 w-1 bg-slate-500 rounded-full"></div>
            <span className="text-slate-500">{createdAt}</span>
            <span>✨</span>
          </span>

          <div className="blog-info-container mt-5 flex flex-col gap-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>
              {content.length > 150
                ? content.substring(0, 150) + "..."
                : content}
            </p>
          </div>

          <span className="mt-8 bg-slate-200 rounded-3xl font-medium py-1.5 px-3 text-sm">{`${Math.ceil(
            content.length / 300
          )} min read`}</span>

          <div className="line w-full h-[0.1rem] bg-gray-200 mt-6"></div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;

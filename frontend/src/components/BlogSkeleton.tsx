import React from "react";

const BlogSkeleton = () => {
  return (
    <>
      <div className="skeleton-container w-full flex flex-col py-10">
        <div role="status" className="animate-pulse w-full">
          <div className="h-2 bg-gray-200 rounded-full w-[calc(100%-3rem)] mb-2.5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-[calc(100%-7rem)] mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full w-[calc(100%-7rem)] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-[calc(100%-10rem)] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-[calc(100%-4rem)] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full w-[calc(100%-6rem)]"></div>
        </div>
      </div>
    </>
  );
};

export default BlogSkeleton;

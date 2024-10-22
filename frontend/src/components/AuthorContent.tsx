import React from "react";

const AuthorContent = ({ authorName }: { authorName: string }) => {
  return (
    <>
      <div className="main-container bg-sky-100 w-full rounded-2xl flex flex-col justify-start items-start pl-4 py-3">
        <h3 className="text-xl font-semibold underline font-mono">
          Author
        </h3>
        <h3 className="mt-3 text-2xl font-bold">{authorName}</h3>
        <h3 className="mt-3 font-medium text-slate-600">
          Full Stack Engineer from Lucknow, India
        </h3>
      </div>
    </>
  );
};

export default AuthorContent;

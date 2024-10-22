import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";

const TopBar = () => {
  return (
    <>
      <div className="top-bar pt-10 w-full">
        <span className="flex flex-row items-center gap-6">
          <HiOutlinePlus size={"2rem"} />
          <span className="font-medium text-slate-900">For you</span>
          <span className="text-slate-500">Following</span>
        </span>

        <div className="line w-full h-[0.2rem] rounded-3xl bg-zinc-600 mt-5"></div>
      </div>
    </>
  );
};

export default TopBar;

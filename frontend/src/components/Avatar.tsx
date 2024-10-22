import React from "react";
import { AvatarProps } from "../types/types";

const Avatar = ({ name }: AvatarProps) => {
  let firstLetter: string = name[0];
  let secondLetter: string = "";

  if (name.split(" ").length > 1) {
    firstLetter = name.split(" ")[0][0] || "";
    secondLetter = name.split(" ")[1][0] || "";
  }

  return (
    <>
      <div className="avatar h-8 w-8 rounded-full bg-slate-300 flex justify-center items-center text-sm font-semibold">
        <span>{firstLetter}</span>
        <span>{secondLetter}</span>
      </div>
    </>
  );
};

export default Avatar;

import React from "react";
import { LabelledInputProps } from "../types/types";

const LabelledInput = ({
  id,
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputProps) => {
  return (
    <>
      <label htmlFor={id} className="font-semibold mb-1">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="border-2 border-gray-400 outline-none px-3 py-2 rounded-md mb-5"
      />
    </>
  );
};

export default LabelledInput;

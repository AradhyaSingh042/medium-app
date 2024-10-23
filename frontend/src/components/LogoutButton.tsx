import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {
  const navigate = useNavigate();

  function logout() {
    console.log("eheh");

    localStorage.setItem("token", "");
    navigate("/signin");
  }

  return (
    <>
      <button
        className="avatar h-11 w-11 rounded-full bg-slate-200 shadow-sm flex justify-center items-center text-sm font-semibold"
        onClick={logout}
      >
        <LuLogOut size={"1.25rem"} />
      </button>
    </>
  );
};

export default LogoutButton;

import React from "react";
import logo from "../assets/medium-icon.png";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container pt-5 w-full flex flex-row justify-between items-center">
        <div className="left-container flex flex-row gap-1 items-center pl-1">
          <Link to={"/blogs"}>
            <img src={logo} alt="Logo" width={"36px"} height={"36px"} />
          </Link>
          <Link to={"/blogs"}>
            <h3 className="text-2xl font-semibold">Medium</h3>
          </Link>
        </div>
        <div className="right-container flex flex-row items-center gap-5">
          <Link to={"/publish"}>
            <button
              type="submit"
              className="bg-teal-600 text-white py-1.5 px-4 shadow-md rounded-3xl font-semibold"
            >
              Create
            </button>
          </Link>

          <LogoutButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

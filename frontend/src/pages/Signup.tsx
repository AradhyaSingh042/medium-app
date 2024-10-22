import React from "react";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <>
      <div className="signup-page-container w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <Auth type="signup" />
        <Quote background="slate" type="signup" />
      </div>
    </>
  );
};

export default Signup;

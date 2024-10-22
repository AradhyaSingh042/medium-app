import React from "react";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <>
      <div className="signup-page-container w-full h-full flex flex-row">
        <Auth type="signin" />
        <Quote background="sky" type="signin" />
      </div>
    </>
  );
};
export default Signin;

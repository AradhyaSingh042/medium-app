import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { SignupInput, SigninInput } from "@aradhya042/common-medium";
import { AuthProps } from "../types/types";
import axios from "axios";

const Auth = ({ type }: AuthProps) => {
  const navigate = useNavigate();

  const [authInputs, setAuthInputs] = useState<SignupInput | SigninInput>(
    type === "signup"
      ? {
          name: "",
          email: "",
          password: "",
        }
      : {
          email: "",
          password: "",
        }
  );

  async function sendAuthRequest() {
    try {
      const url: string = import.meta.env.VITE_BACKEND_URL;

      const response = await axios.post(
        `${url}/api/v1/user/${type}`,
        authInputs
      );

      const token: string = response.data.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  }

  function changeHandler(e: ChangeEvent<HTMLInputElement>, key: string) {
    setAuthInputs((prev) => {
      return {
        ...prev,
        [key]: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="signup-container w-full h-full justify-center items-center flex flex-col">
        <div className="main-container w-9/12 sm:w-7/12 flex flex-col">
          {type === "signup" ? (
            <h1 className="text-2xl lg:text-3xl font-bold self-center">
              Create an Account
            </h1>
          ) : (
            <h1 className="text-2xl lg:text-3xl font-bold self-center">
              Login to your Account
            </h1>
          )}

          {type === "signup" && (
            <span className="text-gray-500 text-sm lg:text-base flex flex-row font-medium gap-1 mt-1 items-center self-center">
              <p>Already have an account?</p>
              <Link to="/signin" className="underline">
                Login
              </Link>
            </span>
          )}

          {type === "signin" && (
            <span className="text-gray-500 flex flex-row font-medium gap-1 mt-1 items-center self-center">
              <p>Don't have an account?</p>
              <Link to="/signup" className="underline">
                Signup
              </Link>
            </span>
          )}

          <form
            className="form-container mt-6 flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              sendAuthRequest();
            }}
          >
            {type === "signup" && (
              <LabelledInput
                id="username"
                label="Full Name"
                placeholder="John Doe"
                type="text"
                onChange={(e) => {
                  changeHandler(e, "name");
                }}
              />
            )}

            <LabelledInput
              id="email"
              label="Email"
              placeholder="john@example.com"
              type="email"
              onChange={(e) => {
                changeHandler(e, "email");
              }}
            />

            <LabelledInput
              id="password"
              label="Password"
              placeholder="password"
              type="password"
              onChange={(e) => {
                changeHandler(e, "password");
              }}
            />

            <button
              type="submit"
              className="bg-black text-white py-2.5 rounded-md font-semibold"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;

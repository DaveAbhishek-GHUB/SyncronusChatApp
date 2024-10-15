/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginPage from "../../components/LoginPage";
import LoginBG from "../../assets/login2.png";
import Signup from "../../components/SignupPage";

function AuthPage() {
  const [forLogin, setForLogin] = useState(true);
  const [forSignup, setForSignup] = useState(false);

  const setLogin = () => {
    setForLogin(true);
    setForSignup(false);
  };
  const setSignup = () => {
    setForSignup(true);
    setForLogin(false);
  };

  return (
    <>
      <div className="main-auth-wrapper w-full h-screen flex justify-center items-center">
        <div className="inner-auth-wrapper w-11/12 max-w-4xl h-5/6 rounded-2xl flex flex-col md:flex-row">
          <div className="form-wrapper w-full md:w-1/2 h-full p-4">
            <div className="form-heading-wrapper w-full mb-4">
              <div className="welcom-heading flex gap-5 justify-center">
                <h1 className="text-2xl md:text-4xl mt-4 font-sans font-bold">
                  Welcome
                </h1>
                <span className="text-2xl md:text-4xl mt-4">✌️</span>
              </div>
              <div className="filltheform-heading w-full flex justify-center mt-5">
                <p className="text-sm md:text-lg font-semibold text-center">
                  Fill in the details to get started with the best chat App!
                </p>
              </div>
            </div>
            <div className="form-container w-full mt-10">
              <div className="authSelector w-full flex justify-center gap-4 md:gap-10">
                <button
                  onClick={setLogin}
                  className={`px-4 py-2 ${
                    forLogin ? "border-b-2 border-black" : ""
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={setSignup}
                  className={`px-4 py-2 ${
                    forSignup ? "border-b-2 border-black" : ""
                  }`}
                >
                  Signup
                </button>
              </div>
              <div className="form w-full mt-4">
                {forLogin ? <LoginPage /> : <Signup />}
              </div>
            </div>
          </div>
          <div className="form-image-wrapper hidden md:flex w-full md:w-1/2 h-full justify-center items-center">
            <img
              src={LoginBG}
              alt="..."
              className="object-contain h-full w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;

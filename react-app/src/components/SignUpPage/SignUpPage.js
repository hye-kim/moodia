import React from "react";
import Navbar from "../Elements/Navbar";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl leading-9 font-sans2 font-extrabold text-highlight">
            Welcome to Moodia!
          </h2>
          <p className="mt-2 text-center text-md text-gray-500">
            Create an account to continue
          </p>
        </div>
        <div className="mt-8 mx-8 md:mx-0 bg-secondary py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-white">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

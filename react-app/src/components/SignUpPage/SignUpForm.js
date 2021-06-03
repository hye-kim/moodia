import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../store/session";
import { MailIconElement, LockIconElement } from "../Icons/Icons";

const SignUpForm = () => {
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      signUp(firstName, lastName, email, password, repeatPassword)
    );
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="relative mb-6">
        <input
          type="text"
          name="firstname"
          onChange={updateFirstName}
          value={firstName}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></input>
        <label
          htmlFor="firstname"
          className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
        >
          First Name
        </label>
        {errors.first_name && (
          <div className="text-red-500 text-sm">{errors.first_name}</div>
        )}
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          name="lastname"
          onChange={updateLastName}
          value={lastName}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></input>
        <label
          htmlFor="lastname"
          className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
        >
          Last Name
        </label>
        {errors.last_name && (
          <div className="text-red-500 text-sm">{errors.last_name}</div>
        )}
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></input>
        <label
          htmlFor="email"
          className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
        >
          {MailIconElement} Email
        </label>
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
      </div>
      <div className="relative mb-6">
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></input>
        <label
          htmlFor="password"
          className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
        >
          {LockIconElement} Password
        </label>
        {errors.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
        )}
      </div>
      <div className="relative mb-6">
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></input>
        <label
          htmlFor="repeat_password"
          className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
        >
          {LockIconElement} Confirm Password
        </label>
        {errors.repeat_password && (
          <div className="text-red-500 text-sm">{errors.repeat_password}</div>
        )}
      </div>
      <button
        type="submit"
        className="transition duration-300 w-full px-5 py-2 rounded-lg text-light text-sm text-white rounded-sm bg-highlight border focus:outline-none"
      >
        Sign Up
      </button>
      <p className="mt-5 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login here
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;

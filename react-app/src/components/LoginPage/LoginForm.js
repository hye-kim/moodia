import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../store/session";
import { MailIconElement, LockIconElement } from "../Icons/Icons";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div className="relative mb-6">
        {/* {errors.map((error) => (
          <div className="text-red-500" key={`error-${error}`}>
            {error}
          </div>
        ))} */}
      </div>
      <div className="relative mb-6">
        <input
          name="email"
          type="text"
          value={email}
          onChange={updateEmail}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
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
          name="password"
          type="password"
          value={password}
          onChange={updatePassword}
          className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
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
      <button
        type="submit"
        className="transition duration-300 w-full px-5 py-2 rounded-lg text-light text-sm text-white rounded-sm bg-highlight border focus:outline-none"
      >
        Login
      </button>
      <p className="mt-5 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign up here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;

import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import moodiaLogo from "../../images/moodia-logo.png";

const LandingNavBar = ({ setAuthenticated }) => {
  return (
    <div className="flex justify-between sticky top-0 px-2 md:px-20 py-3 w-full bg-white z-50 ">
      <div className="flex items-center">
        <img src={moodiaLogo} alt="logo" className="inline h-10"></img>
        <h1 className="ml-3 inline text-2xl">Moodia</h1>
      </div>
      <div className="flex items-center">
        <NavLink
          to="/login"
          exact={true}
          className="transition duration-200 mr-2 md:mr-10 px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-highlight text-white hover:opacity-50"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          exact={true}
          className="transition duration-200 px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-highlight text-white hover:opacity-50"
        >
          Sign Up
        </NavLink>
        <LogoutButton setAuthenticated={setAuthenticated} />
      </div>
    </div>
  );
};

export default LandingNavBar;

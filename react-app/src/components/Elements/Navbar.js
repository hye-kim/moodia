import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import moodiaLogo from "../../images/moodia-logo.png";
import LogoutButton from "../auth/LogoutButton";

function Navbar() {
  const user = useSelector((state) => state.session.user);
  return (
    <div className="flex justify-between sticky top-0 px-2 md:px-20 py-3 w-full bg-white z-50 ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={moodiaLogo} alt="logo" className="inline h-10"></img>
        </NavLink>
        <h1 className="ml-3 inline text-2xl">Moodia</h1>
      </div>
      {user && (
        <div className="flex items-center">
          <LogoutButton />
        </div>
      )}
    </div>
  );
}

export default Navbar;

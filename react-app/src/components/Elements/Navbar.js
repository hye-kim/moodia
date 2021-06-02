import React from "react";
import { NavLink } from "react-router-dom";
import moodiaLogo from "../../images/moodia-logo.png";
import LogoutButton from "../auth/LogoutButton";

function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 px-2 md:px-20 py-3 w-full bg-white z-50 ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={moodiaLogo} alt="logo" className="inline h-10"></img>
        </NavLink>
        <h1 className="ml-3 inline text-2xl">Moodia</h1>
      </div>
      <div className="flex items-center">
        {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
        {/* {name && windowWidth >= 768 && <SignOutButton />} */}
      </div>
    </div>
  );
}

export default Navbar;

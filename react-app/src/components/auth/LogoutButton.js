import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (
    <button
      onClick={onLogout}
      className="transition duration-200 px-3 py-1.5 md:px-4 md:py-2 rounded-3xl bg-highlight text-white hover:opacity-50 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

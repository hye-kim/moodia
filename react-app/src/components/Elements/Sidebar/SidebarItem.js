import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ children, url }) {
  return (
    <li className="py-1.5 w-full transition duration-250 border-l-4 hover:border-highlight hover:bg-gray-300">
      <Link to={`/dashboard/${url}`} className="md:text-lg p-3">
        {children}
      </Link>
    </li>
  );
}

export default SidebarItem;

import React from "react";
import { useSelector } from "react-redux";
import {
  HomeIconElement,
  StarIconElement,
  CalendarIconElement,
  ImageIconElement,
  EmoticonIconElement
} from "../../Icons/Icons";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const user = useSelector((state) => state.session.user);

  return (
    <div className={`transition-width duration-300 md:flex bg-base w-56 mb-10`}>
      <div>
        {user.first_name && (
          <h1 className="text-xl my-8">
            How are you,{" "}
            <span className="text-highlight">{user.first_name}</span>?
          </h1>
        )}
        <ul className="text-gray-600">
          <SidebarItem url="dashboard">{HomeIconElement} Dashboard</SidebarItem>
          <SidebarItem url="moods">{EmoticonIconElement} Moods</SidebarItem>
          {/* <SidebarItem urlTarget="breathing">
            {WindIconElement} Breathing
          </SidebarItem> */}
          <SidebarItem url="goals">{StarIconElement} Goals</SidebarItem>
          <SidebarItem url="routines">
            {CalendarIconElement} Habits
          </SidebarItem>
          <SidebarItem url="picture">
            {ImageIconElement} Observations
          </SidebarItem>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

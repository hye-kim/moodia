import React from "react";
import { deleteIconElement } from "../Icons/Icons";

function HabitCard() {
  return (
    <div class="flex justify-between items-center w-full my-3 p-3 rounded-xl shadow-sm bg-white">
      <p class="transition duration-200 cursor-pointer p-3 rounded-lg text-lg text-green-500">
        Eat breakfast (By 9:00 AM)
      </p>
      <p class="transition duration-200 cursor-pointer text-gray-400 hover:text-red-500">
        {deleteIconElement}
      </p>
    </div>
  );
}

export default HabitCard;

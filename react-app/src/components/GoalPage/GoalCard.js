import React from "react";
import Button from "../Elements/Button";

function GoalCard({ goal }) {
  return (
    <div className="h-64 px-8 py-4 m-5 bg-white rounded-xl shadow-md">
      <div className="flex flex-col justify-between h-full p-3 items-center">
        <h3 className="text-xl">{goal.title}</h3>
        <div>
            Progress Bar Placeholder
        </div>
        <div><Button text="View Plan" /></div>
      </div>
    </div>
  );
}

export default GoalCard;

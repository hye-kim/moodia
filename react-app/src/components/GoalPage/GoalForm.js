import React, { useState } from "react";
import Button from "../Elements/Button";
import PageHeading from "../Elements/PageHeading";
import { deleteIconElement } from "../Icons/Icons";

function GoalForm({ setIsOpen }) {
  const [steps, setSteps] = useState([1]);

  const handleAddStep = (e, type) => {
    e.preventDefault();
    if (type === "add") {
      setSteps([...steps, steps.length + 1]);
    } else {
      setSteps([...steps].slice(0, steps.length - 1));
    }
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg p-5">
      <PageHeading title="Add a Goal" />
      <form className="p-3 w-full font-heading">
        <div className="relative mb-6">
          <label
            htmlFor="goal"
              className="p-1.5"
          >
            Goal
          </label>
          <input
            name="goal"
            type="text"
            className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        {steps.map((step) => {
          return (
            <div className="relative mb-6 flex">
              <label
                htmlFor={`step-${step}`}
                className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
              >
                {`Step ${step}`}
              </label>
              <input
                name={`step-${step}`}
                type="text"
                className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
              <div
                className="text-right px-2 py-1.5"
                onClick={(e) => handleAddStep(e, "delete")}
              >
                {deleteIconElement}
              </div>
            </div>
          );
        })}
        <div className="flex justify-between">
            <Button
              type="button"
              text="+ Add a step"
              onClick={(e) => handleAddStep(e, "add")}
            />
            <Button
              type="button"
              text="Cancel"
              bgColor="red-500"
                onClick={() => setIsOpen(false)}
            />
        </div>
      </form>
    </div>
  );
}

export default GoalForm;

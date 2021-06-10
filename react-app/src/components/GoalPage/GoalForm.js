import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../../store/goal";
import Button from "../Elements/Button";
import PageHeading from "../Elements/PageHeading";
import { deleteIconElement } from "../Icons/Icons";

function GoalForm({ setIsOpen, user }) {
  const dispatch = useDispatch();

  const [goal, setGoal] = useState("");
  const [steps, setSteps] = useState([""]);

  const handleAddStep = (e, type) => {
    e.preventDefault();
    if (type === "add") {
      setSteps([...steps, ""]);
    } else {
      setSteps([...steps].slice(0, steps.length - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      created_at: new Date(),
      title: goal,
      userId: user.id,
      steps: steps,
    };

    dispatch(createGoal(newGoal));
    setIsOpen(false)
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg p-5">
      <PageHeading title="Add a Goal" />
      <form className="p-3 w-full font-heading" onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <label htmlFor="goal" className="p-1.5">
            Goal
          </label>
          <input
            name="goal"
            type="text"
            value={goal}
            required={true}
            onChange={(e) => setGoal(e.target.value)}
            className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        {steps.map((step, i) => {
          return (
            <div className="relative mb-6 flex">
              <label
                htmlFor={`step-${i + 1}`}
                className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
              >
                {`Step ${i + 1}`}
              </label>
              <input
                name={`step-${i + 1}`}
                type="text"
                value={steps[i]}
                required={true}
                onChange={(e) => {
                  const tempSteps = [...steps];
                  tempSteps[i] = e.target.value;
                  setSteps([...tempSteps]);
                }}
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
          <div className="flex">
            <div className="px-2">
              <Button text="Submit" bgColor="normal" />
            </div>
            <Button
              type="button"
              text="Cancel"
              bgColor="red-500"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default GoalForm;

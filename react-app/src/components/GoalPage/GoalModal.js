import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStep, removeStep } from "../../store/goal";
import PageHeading from "../Elements/PageHeading";
import {
  checkIconElement,
  deleteIconElement,
  editIconElement,
} from "../Icons/Icons";

function GoalModal({ goal }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");

  const handleComplete = (e, step) => {
    e.preventDefault();
    const newStep = {
      step_id: step.id,
      completed: true,
    };
    dispatch(changeStep(newStep));
  };

  const handleEdit = (e, step) => {
    e.preventDefault();
    const newStep = {
      stepId: step.id,
      body: body,
    };
    dispatch(changeStep(newStep));
  };

  const handleDelete = (e, step) => {
    e.preventDefault();
    dispatch(removeStep(step));
  };

  return (
    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl w-full">
      <PageHeading title={goal.title} />
      <div className="w-full">
        <div className="overflow-auto max-h-52 my-2 md:my-0">
          {goal.steps.map((step) => {
            return (
              <div className="flex justify-between w-full my-2 p-2 rounded-md bg-gray-200">
                {step.body}
                <div className="flex">
                  <div
                    className="px-1.5"
                    onClick={(e) => handleComplete(e, step)}
                  >
                    {" "}
                    {checkIconElement}
                  </div>
                  <div className="px-1.5" onClick={(e) => handleEdit(e, step)}>
                    {" "}
                    {editIconElement}
                  </div>
                  <div
                    className="px-1.5"
                    onClick={(e) => handleDelete(e, step)}
                  >
                    {" "}
                    {deleteIconElement}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GoalModal;

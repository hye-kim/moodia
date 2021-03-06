import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStep, removeStep } from "../../store/goal";
import Button from "../Elements/Button";
import PageHeading from "../Elements/PageHeading";
import {
  checkIconElement,
  closeIconElement,
  deleteIconElement,
  editIconElement,
} from "../Icons/Icons";

function GoalModal({ goal, setIsOpen }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [steps, setSteps] = useState([""]);
  const [showStepForm, setShowStepForm] = useState(false);

  const handleComplete = (e, step) => {
    e.preventDefault();
    const newStep = { ...step };
    newStep.completed = !newStep.completed;
    dispatch(changeStep(newStep));
  };

  const handleEdit = (e, step) => {
    e.preventDefault();
    const newStep = { ...step };
    newStep.body = body;
    dispatch(changeStep(newStep));
    setShowEdit(false);
  };

  const handleDelete = (e, step) => {
    e.preventDefault();
    dispatch(removeStep(step));
  };

  const handleAddStep = (e, type) => {
    e.preventDefault();
    if (type === "add") {
      setSteps([...steps, ""]);
    } else {
      setSteps([...steps].slice(0, steps.length - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newGoal = {...goal}
    newGoal.steps = steps
  }

  return (
    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl w-full">
      <div className="relative w-full">
        <PageHeading title={goal.title} />
        <div
          onClick={() => setIsOpen(false)}
          className="absolute -right-2 -top-4"
        >
          {closeIconElement}
        </div>
      </div>
      <div className="w-full">
        <div className="overflow-auto max-h-52 my-2 md:my-0">
          {Object.values(goal.steps).map((step) => {
            return (
              <div
                key={step.id}
                className={`flex justify-between w-full my-2 p-2 rounded-md ${
                  step.completed ? "bg-green-200" : "bg-gray-200"
                }`}
              >
                {(!showEdit || activeStep !== step.id) && step.body}
                {showEdit && activeStep === step.id && (
                  <form
                    onSubmit={(e) => handleEdit(e, step)}
                    className="flex w-full justify-between"
                  >
                    <input
                      type="text"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <div className="flex items-center">
                      <div className="pl-3">
                        <Button text="Save" />
                      </div>
                      <div className="pl-3">
                        <Button
                          text="Cancel"
                          type="button"
                          bgColor="red-500"
                          onClick={() => setShowEdit(false)}
                        />
                      </div>
                    </div>
                  </form>
                )}
                <div className="flex">
                  {(!showEdit || activeStep !== step.id) && (
                    <div
                      className="px-1.5"
                      onClick={(e) => handleComplete(e, step)}
                    >
                      {" "}
                      {checkIconElement}
                    </div>
                  )}
                  {(!showEdit || activeStep !== step.id) && (
                    <div
                      className="px-1.5"
                      onClick={() => {
                        setActiveStep(step.id);
                        setBody(step.body);
                        setShowEdit(true);
                      }}
                    >
                      {" "}
                      {editIconElement}
                    </div>
                  )}
                  {(!showEdit || activeStep !== step.id) && (
                    <div
                      className="px-1.5"
                      onClick={(e) => handleDelete(e, step)}
                    >
                      {" "}
                      {deleteIconElement}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form className="p-3 w-full font-heading" onSubmit={(e) => handleSubmit(e)}>
        {showStepForm &&
          steps.map((step, i) => {
            return (
              <div className="relative mb-6 flex">
                <label
                  htmlFor={`step-${i + 1 + Object.values(goal.steps).length}`}
                  className="label absolute transition-all top-2.5 left-2 px-1 pointer-events-none bg-white text-xs"
                >
                  {`Step ${i + 1 + Object.values(goal.steps).length}`}
                </label>
                <input
                  name={`step-${i + 1 + Object.values(goal.steps).length}`}
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
      </form>
      {!showStepForm && (
        <div className="text-right">
          <Button
            type="button"
            text="+ Add a step"
            onClick={() => {
              setShowStepForm(true);
            }}
          />
        </div>
      )}
      {showStepForm && (
        <div className="flex justify-end">
          <div className="pr-3">
            <Button
              type="button"
              text="+ Add a step"
              onClick={(e) => {
                handleAddStep(e, "add");
              }}
            />
          </div>
          <Button
            type="button"
            text="Save"
            bgColor="green-400"
          />
        </div>
      )}
    </div>
  );
}

export default GoalModal;

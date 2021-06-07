import React from "react";
import { useDispatch } from "react-redux";
import { removeObservation } from "../../store/observation";
import { deleteIconElement } from "../Icons/Icons";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Elements/Button";

function ObservationModal({ observation, setIsOpen }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeObservation(observation));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
      <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">
        What parts of the picture speak to you?
        <div onClick={handleDelete}>{deleteIconElement}</div>
      </h3>
      <div className="flex flex-col sm:max-w-sm md:max-w-lg">
        <img
          src={observation.picture_url}
          className="rounded-md h-96 md:h-full"
          alt="img"
        ></img>
        <div className="w-full">
          <div className="overflow-auto max-h-52 my-2 md:my-0"></div>
          <form className="flex justify-between mt-4">
            <TextareaAutosize
              placeholder="Enter your observation"
              className="w-5/6 p-2 shadow-sm rounded-xl outline-none border-b focus:border-highlight resize-none"
            />
            <Button text="Add" bgColor="normal" />
          </form>
        </div>
        <div className="text-right mt-4">
          <Button text="Close" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default ObservationModal;

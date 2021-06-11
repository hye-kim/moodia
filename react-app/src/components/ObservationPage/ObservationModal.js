import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createObservationBody,
  removeObservation,
} from "../../store/observation";
import {
  closeIconElement,
  deleteIconElement,
  editIconElement,
} from "../Icons/Icons";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Elements/Button";

function ObservationModal({ observation, setIsOpen }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState(observation.body ? observation.body : "");
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeObservation(observation));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObservation = { ...observation };
    newObservation.body = body;
    dispatch(createObservationBody(newObservation));
    setShowEditForm(false);
  };

  const handleDeleteBody = (e) => {
    e.preventDefault();
    setBody("");
    const newObservation = { ...observation };
    newObservation.body = "";
    dispatch(createObservationBody(newObservation));
  };

  return (
    <div className="inline-block p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
      <div className="relative w-full">
        <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">
          What parts of the picture speak to you?
        </h3>
        <div
          onClick={() => setIsOpen(false)}
          className="absolute -right-6 -top-6"
        >
          {closeIconElement}
        </div>
      </div>
      <div className="flex flex-col sm:max-w-sm md:max-w-lg">
        <img
          src={observation.picture_url}
          className="rounded-md h-96 md:h-full"
          alt="img"
        ></img>
        <div className="w-full">
          {observation.body && (
            <div className="overflow-auto max-h-52 my-2 md:my-0">
              <div className="flex justify-between w-full my-2 p-2 rounded-md bg-gray-200">
                {observation?.body}
                <div className="flex">
                  <div className="pr-3" onClick={() => setShowEditForm(true)}>
                    {editIconElement}
                  </div>
                  <div onClick={(e) => handleDeleteBody(e)}>
                    {deleteIconElement}
                  </div>
                </div>
              </div>
            </div>
          )}
          {(showEditForm || !observation.body) && (
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex justify-between mt-4"
            >
              <TextareaAutosize
                value={body}
                required={true}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter your observation"
                className="w-5/6 p-2 shadow-sm rounded-xl outline-none border-b focus:border-highlight resize-none"
              />
              <Button
                text={`${observation.body ? "Save" : "Add"}`}
                bgColor="normal"
              />
            </form>
          )}
          <div className="pt-3 text-right">
            <Button
              text="Delete Observation"
              bgColor="red-500"
              onClick={(e) => handleDelete(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObservationModal;

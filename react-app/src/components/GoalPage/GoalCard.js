import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Zoom } from "react-awesome-reveal";
import { changeGoal, removeGoal } from "../../store/goal";
import Button from "../Elements/Button";
import GoalModal from "./GoalModal";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { deleteIconElement, editIconElement } from "../Icons/Icons";
import LinesEllipsis from "react-lines-ellipsis";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    maxHeight: "calc(100vh - 2rem)",
    width: "40%",
  },
  overlay: {
    position: "fixed",
    zIndex: 1000,
    overflowY: "auto",
  },
};

Modal.setAppElement("#root");

function GoalCard({ goal }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState(goal.title);

  const handleEdit = (e) => {
    e.preventDefault();
    const newGoal = { ...goal };
    newGoal.title = title;
    dispatch(changeGoal(newGoal));
    setShowEdit(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeGoal(goal));
  };

  const goalPercent =
    (Object.values(goal.steps).filter((step) => step.completed === true)
      .length /
      Object.keys(goal.steps).length) *
    100;

  return (
    <>
      <div className="h-96 w-80 px-8 py-4 m-5 bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-between h-full items-center">
          <div className="w-full relative">
            {!showEdit && (
              <LinesEllipsis
                text={goal.title}
                ellipsis="..."
                maxLine="2"
                trimRight
                basedOn="letters"
                className="w-1/2 m-auto text-2xl text-center break-all"
              />
            )}
            {showEdit && (
              <form
                onSubmit={(e) => handleEdit(e)}
                className="flex w-full justify-between items-center"
              >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="appearance-none block w-full p-2.5 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-highlight transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className="pl-3">
                  <Button text="Save" bgColor="green-400" />
                </div>
              </form>
            )}
            <div className="absolute top-1 -right-2">
              {!showEdit && (
                <div className="flex">
                  <div className="pr-3" onClick={() => setShowEdit(true)}>
                    {editIconElement}
                  </div>
                  <div onClick={handleDelete}>{deleteIconElement}</div>
                </div>
              )}
            </div>
          </div>
          <div className="h-1/2">
            <CircularProgressbar
              className="w-full h-full"
              value={goalPercent ? goalPercent : 0}
              text={`${parseInt(goalPercent ? goalPercent : 0)}%`}
              circleRatio={
                0.75
              } /* Make the circle only 0.75 of the full diameter */
              styles={{
                trail: {
                  transform: "rotate(-135deg)",
                  transformOrigin: "center center",
                },
                path: {
                  transform: "rotate(-135deg)",
                  transformOrigin: "center center",
                },
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <Button
                text="View Steps"
                type="button"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <Zoom duration={500}>
          <GoalModal goal={goal} setIsOpen={setIsOpen} />
        </Zoom>
      </Modal>
    </>
  );
}

export default GoalCard;

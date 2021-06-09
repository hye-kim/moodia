import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Zoom } from "react-awesome-reveal";
import { removeGoal } from "../../store/goal";
import Button from "../Elements/Button";
import GoalModal from "./GoalModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    maxHeight: "calc(100vh - 2rem)",
    width: "50%"
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

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeGoal(goal));
  };

  return (
    <>
      <div className="h-64 px-8 py-4 m-5 bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-between h-full items-center">
          <h3 className="text-xl">{goal.title}</h3>
          <div>Progress Bar Placeholder</div>
          <div className="flex flex-col items-center">
            <div className="pb-2">
              <Button text="View Plan" type="button" onClick={() => setIsOpen(true)} />
            </div>
            <Button
              text="Delete Goal"
              bgColor="red-500"
              type="button"
              onClick={handleDelete}
            />
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
